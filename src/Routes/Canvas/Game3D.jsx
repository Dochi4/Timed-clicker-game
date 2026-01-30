import React, { useState, useRef, useContext, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import PickAxe from "./PickAxe_Clicker";
import Ore from "./Ore_Clicker";
import { GameContext } from "../../GameContext";
import usePrevious from "../../hooks/usePrevious";
import TriggerAnimations from "./TriggerAnimations";

function Game3D() {
  const camera = useRef();

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
      {/* Camera */}
      <PerspectiveCamera
        makeDefault
        ref={camera}
        position={[-8, 2, 9]} // camera position
        fov={67}
        onUpdate={(self) => self.lookAt(0.5, 4, 3)}
      />
      <TriggerAnimations cameraRef={camera} />
      {/* Lighting  */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[-7, 10, 5]} intensity={1} castShadow />
      <spotLight position={[-10, 15, 10]} angle={0.4} intensity={0.7} />
      {/* 3D Objects */}
      <Stars />
      <PickAxe />
      <Ore />
      <Plane />
    </>
  );
}

export default Game3D;
