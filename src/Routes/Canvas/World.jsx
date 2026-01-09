import React from "react";
import { Canvas  } from "@react-three/fiber";
import Game3D from "./Game3D";


function World({gameStage,handleClick}) {

  return (
    <>
      <Canvas onClick={handleClick}>
        {gameStage ==='play' && <Game3D/> }
      </Canvas> 
    </>
  );
}


export default World;
