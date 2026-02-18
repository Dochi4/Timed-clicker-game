import React, { useState, useContext, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import * as THREE from "three";

function Test_Land() {
  const obj = useLoader(OBJLoader, "src/assets/models/Test_Land.obj");

  let size = { x: 1, y: 1, z: 1 };

  return (
    <mesh position={[0, 0, 0]} scale={[size.x, size.y, size.z]} castShadow>
      <primitive object={obj} />
      <meshStandardMaterial side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Test_Land;
