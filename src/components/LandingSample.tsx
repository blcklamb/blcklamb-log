"use client";

import { Environment, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import Loader from "./Loader";
import { Color, MathUtils, Mesh, MeshStandardMaterial } from "three";

function Model() {
  const { scene } = useGLTF("/sheep.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const { raycaster } = useThree();
  const intersects = raycaster.intersectObjects(clonedScene.children);
  if (intersects[0]) {
    const firstObj = intersects[0].object as Mesh;
    const firstMaterial = firstObj.material as MeshStandardMaterial;

    firstMaterial.color = new Color("black");
  }
  return <primitive object={clonedScene} />;
}

function MovingModel({
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
  // getCurrentViewport is a helper that calculates the size of the viewport
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  // Local component state, it is safe to mutate because it's fixed data
  const [data] = useState({
    // Randomly distributing the objects along the vertical
    y: MathUtils.randFloatSpread(height * 2),
    // This gives us a random value between -1 and 1, we will multiply it with the viewport width
    x: MathUtils.randFloatSpread(2),
    // How fast objects spin, randFlost gives us a value between min and max, in this case 8 and 12
    spin: MathUtils.randFloat(8, 12),
    // Some random rotations, Math.PI represents 360 degrees in radian
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  // useFrame executes 60 times per second
  useFrame((state, dt) => {
    // Make the X position responsive, slowly scroll objects up at the Y, distribute it along the Z
    // dt is the delta, the time between this frame and the previous, we can use it to be independent of the screens refresh rate
    // We cap dt at 0.1 because now it can't accumulate while the user changes the tab, it will simply stop
    if (dt < 0.1)
      if (ref.current) {
        ref.current.position.set(
          index === 0 ? 0 : data.x * width,
          (data.y += dt * speed),
          -z
        );
      }
    // Rotate the object around
    if (ref.current) {
      ref.current.rotation.set(
        (data.rX += dt / data.spin),
        Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
        (data.rZ += dt / data.spin)
      );
    }
    // If they're too far up, set them back to the bottom
    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });
  return (
    <mesh ref={ref}>
      <Model />
    </mesh>
  );
}

export default function FloatingSheep() {
  const count = 120;
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
      <Canvas flat gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={<Loader />}>
          {Array.from({ length: count }, (_, i) => (
            <MovingModel
              key={i}
              index={i}
              z={Math.round(easing(i / count) * 80)}
              speed={speed}
            />
          ))}
          <Environment preset="forest" />
          <ambientLight intensity={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
