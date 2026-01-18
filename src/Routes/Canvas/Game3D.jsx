import React, { useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import PickAxe from "./PickAxe_Clicker";
import Ore from "./Ore_Clicker";

function Game3D() {
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
      <PickAxe />
      <Ore />
    </>
  );
}

export default Game3D;
