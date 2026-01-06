import React from "react";
import { Canvas  } from "@react-three/fiber";
import Game3D from "./Game3D";


function World({gameStage,handleClick}) {

  return (
    <div >
      <Canvas id="canvas">
        {gameStage ==='play' && <Game3D handleClick={handleClick} /> }
      </Canvas>
    </div>
  );
}


export default World;
