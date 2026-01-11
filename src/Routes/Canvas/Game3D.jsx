import React, { useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function Game3D() {
  function Model({ url }) {
    const obj = useLoader(OBJLoader, url);
    return (
      <mesh position={[0, 1, -5]} scale={[0.1, 0.1, 0.1]} castShadow>
        <primitive object={obj} />
      </mesh>
    );
  }

  function Box() {
    return (
      <mesh position={[0, 2, 0]} castShadow>
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="green" />
      </mesh>
    );
  }
  function Plane() {
    return (
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial color="pink" />
      </mesh>
    );
  }

  return (
    <>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <Box />
      <Plane />
      <Model url="src/assets/models/boombox.obj" />
    </>
  );
}

export default Game3D;
