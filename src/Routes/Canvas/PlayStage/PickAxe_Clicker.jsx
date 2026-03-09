import React, { useState, useContext, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GameContext } from "../../../GameContext";
import { useTexture } from "@react-three/drei";
import { usePickaxe } from "../../../hooks/usePickaxe";

function PickAxe() {
  const { counter } = useContext(GameContext);
  const playPickaxe = usePickaxe();
  const targetRotation = useRef(0);

  const modelRef = useRef();

  const obj = useLoader(OBJLoader, "src/assets/models/PickAxe_clicker.obj");
  const texture = useTexture("src/assets/textures/PickAxe/PickAxe_BC.png");

  // Texture loading and application
  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    });
  }, [obj, texture]);

  // Animate the pickaxe rotation on click
  useEffect(() => {
    targetRotation.current = -2;
    const timeout = setTimeout(() => {
      targetRotation.current = 0.5;
      playPickaxe();
    }, 100);

    return () => clearTimeout(timeout);
  }, [counter]);

  useFrame(() => {
    if (!modelRef.current) return;
    modelRef.current.rotation.x +=
      (targetRotation.current - modelRef.current.rotation.x) * 0.15;
  });

  let size = { x: 1, y: 1, z: 1 };

  return (
    <mesh
      ref={modelRef}
      position={[-1, 2, 4.5]}
      scale={[size.x, size.y, size.z]}
      castShadow
    >
      <primitive object={obj} />
    </mesh>
  );
}

export default PickAxe;
