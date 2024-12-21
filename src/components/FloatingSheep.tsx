"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MovingModel } from "./MovingModel";
import { useState } from "react";

export function FloatingSheep() {
  const COUNT = 120;
  const easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
  const [speed, setSpeed] = useState(1);

  return (
    <div className="bg-white h-screen relative">
      <div className="absolute z-30 bottom-1/2 md:right-1 -right-6 transform rotate-90">
        <input
          type="range"
          min={0}
          max={10}
          value={speed}
          step={1}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="appearance-none cursor-pointer bg-gray-200  rounded-lg w-full h-2 accent-slate-500"
        />
      </div>
      <Canvas flat dpr={[1, 1.5]}>
        <OrbitControls />
        {Array.from({ length: COUNT }, (_, i) => (
          <MovingModel
            key={i}
            index={i}
            z={Math.round(easing(i / COUNT) * 80)}
            speed={speed}
          />
        ))}
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}
