import React, { useState, useContext, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GameContext } from "../../GameContext";

function PickAxe() {
  const { counter } = useContext(GameContext);
  const targetRotation = useRef(0);

  const modelRef = useRef();

  useEffect(() => {
    targetRotation.current = -2; // swing down
    const timeout = setTimeout(() => {
      targetRotation.current = 0.9; // swing back up
    }, 100); // hold swing down for 100ms

    return () => clearTimeout(timeout);
  }, [counter]);

  useFrame(() => {
    if (!modelRef.current) return;
    // Interpolate current rotation toward target rotation
    modelRef.current.rotation.x +=
      (targetRotation.current - modelRef.current.rotation.x) * 0.15;
  });

  const obj = useLoader(OBJLoader, "src/assets/models/PickAxe_clicker.obj");

  let size = { x: 0.03, y: 0.03, z: 0.03 };

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
