"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Color, Mesh, MeshStandardMaterial, Object3D } from "three";

type UfoProps = Omit<JSX.IntrinsicElements["primitive"], "object">;

/**
 * ufo.glb 를 불러와 랜딩 씬에 띄운다.
 * 유리(Glass)/돔(Dome) 파트에 은은한 시안 발광을 입혀 bloom 후처리와 어우러지도록 한다.
 */
export function Ufo(props: UfoProps) {
  const { scene } = useGLTF("/ufo.glb");

  const cloned = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((object: Object3D) => {
      const mesh = object as Mesh;
      if (!mesh.isMesh) return;
      const material = mesh.material as MeshStandardMaterial;
      if (!material?.name) return;

      if (material.name.startsWith("Glass") || material.name.includes("Dome")) {
        const glowing = material.clone();
        glowing.emissive = new Color("#22d3ee");
        glowing.emissiveIntensity = 1.6;
        glowing.needsUpdate = true;
        mesh.material = glowing;
      }
    });
    return clone;
  }, [scene]);

  return <primitive object={cloned} {...props} />;
}

useGLTF.preload("/ufo.glb");
