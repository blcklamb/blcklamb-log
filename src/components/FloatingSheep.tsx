"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";
import { MovingModel } from "./MovingModel";
import { useState } from "react";

const SPACE = "#05060d";

export function FloatingSheep() {
  const COUNT = 120;
  const easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
  const [speed, setSpeed] = useState(1);

  return (
    <div className="relative h-screen bg-ink-950">
      {/* 속도 컨트롤: 세로 슬라이더 + 라벨 */}
      <div className="absolute right-4 top-1/2 z-30 -translate-y-1/2 md:right-6">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            speed
          </span>
          <input
            type="range"
            min={0}
            max={10}
            value={speed}
            step={1}
            aria-label="양떼 속도 조절"
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="h-1.5 w-28 cursor-pointer appearance-none rounded-full bg-white/10 accent-indigo-400 [transform:rotate(90deg)] [transform-origin:center]"
          />
          <span className="mt-8 text-xs tabular-nums text-slate-400">
            {speed}
          </span>
        </div>
      </div>

      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <color attach="background" args={[SPACE]} />
        <fog attach="fog" args={[SPACE, 22, 95]} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.25}
        />

        <ambientLight intensity={0.35} />
        <directionalLight position={[6, 10, 6]} intensity={1.1} />
        <pointLight position={[-12, -6, -10]} intensity={140} color="#818cf8" />
        <pointLight position={[12, 8, -20]} intensity={160} color="#22d3ee" />

        {Array.from({ length: COUNT }, (_, i) => (
          <MovingModel
            key={i}
            index={i}
            z={Math.round(easing(i / COUNT) * 80)}
            speed={speed}
          />
        ))}

        <Environment preset="night" />

        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.9}
            luminanceThreshold={0.35}
            luminanceSmoothing={0.4}
          />
          <Vignette offset={0.25} darkness={0.85} eskil={false} />
        </EffectComposer>
      </Canvas>

      {/* 하단으로 자연스럽게 이어지는 페이드 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
