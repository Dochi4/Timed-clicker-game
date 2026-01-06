import React, { useContext, useEffect, useState } from "react";
import { Canvas , useLoader } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import "../Css/GameScreen.css"


function GameScreen({}) {
  

  return (
    <div id="GameScreen" >
      <div id ="infoPanel">
      <h1>Game SCREEN</h1>  
      {time} <input
        type="range"
        min="0"
        max={maxTime}
        value={time}
        disabled
      />
      <h2>{counter}</h2>
      </div>
    </div>
  );
}

export default GameScreen;
