import React, { useMemo, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Test_Land() {
  const obj = useLoader(OBJLoader, "/assets/models/Test_Land.obj");
  const texture = useTexture("/assets/textures/Land/Test_Land_BC.png");

  useEffect(() => {
    if (texture) {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
    }
  }, [texture]);

  const sceneObject = useMemo(() => {
    const clone = obj.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          side: THREE.DoubleSide,
          roughness: 1.0,
          metalness: 0.0,
        });

        child.castShadow = true;
        child.receiveShadow = true;
        child.material.shadowSide = THREE.BackSide;
      }
    });
    return clone;
  }, [obj, texture]);

  return (
    <primitive object={sceneObject} position={[0, 0, 0]} scale={[1, 1, 1]} />
  );
}

export default Test_Land;
