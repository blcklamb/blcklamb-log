"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, MathUtils } from "three";
import { Ufo } from "./Ufo";

/**
 * UFO 한 대가 양 떼 사이를 가로질러 비행한다.
 * - 화면을 좌우로 횡단하며 끝에 닿으면 반대편에서 다시 등장
 * - 비행하며 상하로 부드럽게 흔들리고(bobbing) 앞뒤 깊이로도 위빙하여 양들 사이를 지난다
 * - 진행 방향으로 살짝 뱅킹(roll)하고, 접시가 도는 것처럼 Y축으로 자전
 */
export function MovingUfo({ z }: { z: number }) {
  const flyRef = useRef<Group>(null!);
  const spinRef = useRef<Group>(null!);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const [data] = useState(() => ({
    x: MathUtils.randFloatSpread(width),
    baseY: MathUtils.randFloatSpread(height * 0.6),
    direction: Math.random() > 0.5 ? 1 : -1,
    flySpeed: MathUtils.randFloat(2, 3),
    bobAmp: MathUtils.randFloat(0.6, 1.1),
    bobSpeed: MathUtils.randFloat(0.6, 0.9),
    weaveAmp: MathUtils.randFloat(4, 7),
    weaveSpeed: MathUtils.randFloat(0.25, 0.4),
    phase: Math.random() * Math.PI * 2,
    spinSpeed: MathUtils.randFloat(0.9, 1.4),
    scale: 3.4,
  }));

  useFrame((state, dt) => {
    // 탭 전환 등으로 누적되는 큰 dt는 무시한다.
    if (dt > 0.1) return;
    const t = state.clock.elapsedTime;

    // 좌우 횡단 비행 + 화면 밖으로 나가면 반대편에서 재등장
    data.x += dt * data.flySpeed * data.direction;
    const bound = width / 2 + 6;
    if (data.x > bound) data.x = -bound;
    if (data.x < -bound) data.x = bound;

    if (flyRef.current) {
      flyRef.current.position.set(
        data.x,
        data.baseY + Math.sin(t * data.bobSpeed + data.phase) * data.bobAmp,
        -z + Math.sin(t * data.weaveSpeed + data.phase) * data.weaveAmp
      );
      // 진행 방향으로 뱅킹, 진행 반대 방향으로 살짝 노즈업
      flyRef.current.rotation.set(0.14, 0, -data.direction * 0.22);
    }
    if (spinRef.current) {
      spinRef.current.rotation.y += dt * data.spinSpeed;
    }
  });

  return (
    <group ref={flyRef}>
      <group ref={spinRef}>
        <Ufo scale={data.scale} />
      </group>
    </group>
  );
}
