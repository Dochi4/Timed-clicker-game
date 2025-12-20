import React, { useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SimpleSlider from "./SimpleSlider";

function GameScreen({handleClick,time,maxTime,counter}) {

 function Box() {
  return (
    <mesh position={[0, 0, 0]} castShadow>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial color="green" />
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

  useEffect(() => {
    
  }, []);  

  return (
    <div onClick={handleClick}>
      <h1>Game SCREEN</h1>  
      {time}<SimpleSlider maxtime={maxTime}time={time} />
      <h2>{counter}</h2>
        <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          castShadow
        />
        <OrbitControls />

        <Box />
        <Plane />
      </Canvas>

    </div>
  );
}

export default GameScreen;
