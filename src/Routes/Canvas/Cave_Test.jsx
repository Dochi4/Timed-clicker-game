import React, { useState, useContext, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function Cave_Test() {
  const obj = useLoader(OBJLoader, "src/assets/models/Cave_Test1.obj");

  let size = { x: 1, y: 1, z: 1 };

  return (
    <mesh position={[0, 0, 0]} scale={[size.x, size.y, size.z]} castShadow>
      <primitive object={obj} />
    </mesh>
  );
}

export default Cave_Test;
