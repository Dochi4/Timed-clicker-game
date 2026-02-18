import React, { useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function Ore() {
  const obj = useLoader(OBJLoader, "src/assets/models/Ore_clicker.obj");
  let size = { x: 1, y: 1, z: 1 };

  return (
    <mesh position={[0, 0, 0]} scale={[size.x, size.y, size.z]} castShadow>
      <primitive object={obj} />
    </mesh>
  );
}

export default Ore;
