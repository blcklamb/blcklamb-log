import { useRef, useState } from "react";
import { Sheep } from "./Sheep";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Mesh } from "three";

export function MovingModel({
  index,
  z,
  speed,
}: {
  index: number;
  z: number;
  speed: number;
}) {
  const ref = useRef<Mesh>(null!);
  const { viewport, camera } = useThree();
  // 뷰포트의 너비, 높이를 계산해줍니다.
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  // 위치에 대해 고정값을 정해줍니다.
  const [data] = useState({
    // 높이의 두 배 정도를 잡아 랜덤한 값을 지정합니다.
    y: MathUtils.randFloatSpread(height * 2),
    // -1과 1 사이의 랜덤한 값으로, 추후 너비 배율로 조정할 예정입니다.
    x: MathUtils.randFloatSpread(2),
    // 얼마나 빠르게 돌 것인지 랜덤한 값을 지정합니다.
    spin: MathUtils.randFloat(8, 12),
    // x축, z축으로의 회전 초기값을 랜덤하게 지정합니다.
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  // useFrame은 초당 60번 실행됩니다.
  useFrame((state, dt) => {
    // X 위치를 반응형으로 만들고, Y축으로 천천히 객체를 스크롤하며, Z축을 따라 분배합니다.
    // dt는 델타로, 이 프레임과 이전 프레임 사이의 시간입니다. 화면 새로고침 속도와 독립적이게 하기 위해 사용할 수 있습니다.
    // dt를 0.1로 제한하여 사용자가 탭을 변경하는 동안 누적되지 않고 단순히 멈추도록 합니다.
    if (dt < 0.1)
      if (ref.current) {
        ref.current.position.set(
          index === 0 ? 0 : data.x * width,
          (data.y += dt * speed),
          -z
        );
      }
    // 객체를 회전시킵니다.
    if (ref.current) {
      ref.current.rotation.set(
        (data.rX += dt / data.spin),
        Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
        (data.rZ += dt / data.spin)
      );
    }
    // 지정된 높이 이상을 올라갔다면(화면 밖으로 벗어나간 다음 그 이상) 다시 아래로 위치를 변경합니다.
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  return (
    <mesh ref={ref}>
      <Sheep />
    </mesh>
  );
}
