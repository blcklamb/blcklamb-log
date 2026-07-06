"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { Color, Mesh, MeshStandardMaterial } from "three";

export function Sheep() {
  const { scene } = useGLTF("/sheep.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const { raycaster } = useThree();
  const intersects = raycaster.intersectObjects(clonedScene.children);

  // 포인터가 닿은 양은 "검은 양(blcklamb)"으로 변하며 은은한 오로라 빛을 낸다.
  for (const intersect of intersects) {
    if (intersect.object.name.includes("Fur")) {
      const firstObj = intersect.object as Mesh;
      const firstMaterial = firstObj.material as MeshStandardMaterial;
      firstMaterial.color = new Color("#0a0a12");
      firstMaterial.emissive = new Color("#818cf8");
      firstMaterial.emissiveIntensity = 0.9;
      firstMaterial.needsUpdate = true;
    }
  }

  return <primitive object={clonedScene} />;
}
