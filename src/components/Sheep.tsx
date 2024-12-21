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

  for (const intersect of intersects) {
    if (intersect.object.name.includes("Fur")) {
      const firstObj = intersect.object as Mesh;
      const firstMaterial = firstObj.material as MeshStandardMaterial;
      firstMaterial.color = new Color("black");
    }
  }

  return <primitive object={clonedScene} />;
}
