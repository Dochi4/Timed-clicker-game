import React, { useState, useContext, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function Test_Land() {
  const obj = useLoader(OBJLoader, "src/assets/models/Test_Land.obj");

  const texture = useTexture("src/assets/textures/Land/Test_Land_BC.png");

  // Texture loading and application
  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [obj, texture]);

  return (
    <mesh position={[0, 0, 0]} scale={[1, 1, 1]} castShadow>
      <primitive object={obj} />
      <meshStandardMaterial side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Test_Land;
