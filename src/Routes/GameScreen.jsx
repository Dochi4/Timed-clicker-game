import React, { useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";

import "../Css/GameScreen.css"
import SimpleSlider from "./SimpleSlider";

function GameScreen({handleClick,time,maxTime,counter}) {

 function Box() {
  return (
    <mesh position={[0, 2, 0]} castShadow>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach = "material" color="green" />
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
    <div id="canvas"  onClick={handleClick}>
      <div id ="infoPanel">
      <h1>Game SCREEN</h1>  
      {time}<SimpleSlider maxtime={maxTime}time={time} />
      <h2>{counter}</h2>
      </div>
      <Canvas >
        <OrbitControls />
        <Stars />
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
        />
    
        <Box />
        <Plane />
      </Canvas>

    </div>
  );
}

export default GameScreen;
