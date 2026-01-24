import { React, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import Game3D from "./Game3D";
import { GameContext } from "../../GameContext";

function World() {
  const { gameStage, handleClick } = useContext(GameContext);
  return (
    <>
      <Canvas onClick={handleClick}>
        {gameStage === "play" && <Game3D />}
      </Canvas>
    </>
  );
}

export default World;
