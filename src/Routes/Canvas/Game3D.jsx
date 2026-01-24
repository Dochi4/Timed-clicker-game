import React, { useContext, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import PickAxe from "./PickAxe_Clicker";
import Ore from "./Ore_Clicker";

function Game3D() {
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
      <PerspectiveCamera
        makeDefault
        position={[-8, 2, 9]} // camera position
        fov={67}
        onUpdate={(self) => self.lookAt(0.5, 4, 3)}
      />
      <Stars />
      <ambientLight intensity={0.3} />
      <directionalLight position={[-7, 10, 5]} intensity={1} castShadow />
      <spotLight position={[-10, 15, 10]} angle={0.4} intensity={0.7} />

      <PickAxe />
      <Ore />
      <Plane />
    </>
  );
}

export default Game3D;
