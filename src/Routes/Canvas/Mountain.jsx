import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Mountain() {
  const obj = useLoader(OBJLoader, "/assets/models/Mountain.obj");
  const texture = useTexture("/assets/textures/Mountain/Mountain_BC.png");

  // 1. CLONE the object so each scene gets its own unique copy
  // 2. APPLY the texture inside useMemo so it only happens once per mount
  const sceneObject = useMemo(() => {
    const clone = obj.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          side: THREE.DoubleSide,
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [obj, texture]);

  return (
    <primitive object={sceneObject} position={[0, 0, 0]} scale={[1, 1, 1]} />
  );
}

export default Mountain;
