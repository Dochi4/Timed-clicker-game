import React, { useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function PickAxe() {
  function PickAxe() {
    const obj = useLoader(OBJLoader, "src/assets/models/PickAxe_clicker.obj");
    let size = { x: 0.05, y: 0.05, z: 0.05 };
    return (
      <mesh position={[0, 2, 10]} scale={[size.x, size.y, size.z]} castShadow>
        <primitive object={obj} />
      </mesh>
    );
    sdw;
  }

  return <PickAxe />;
}

export default PickAxe;
