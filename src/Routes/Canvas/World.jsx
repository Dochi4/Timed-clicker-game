import { React, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import Game3D from "./PlayStage/Game3D";
import Start3D from "./StartStage/Start3D";
import Upgrade3D from "./UpgradeStage/Upgrade3D";
import End3D from "./EndStage/End3D";
import { GameContext } from "../../GameContext";

function World() {
  const { gameStage, handleClick } = useContext(GameContext);
  const backgroundColor = {
    start: "linear-gradient(50deg, #166cee 0%, #46b3f1 35%, #fde9c3 100%)",
    play: "#30a3dd",
    upgrade: "linear-gradient(190deg, #010d31 0%, #031601 100%)",
    end: "linear-gradient(190deg, #010d31 0%, #a52c07 35%, #ffd000 100%)",
  };

  return (
    <>
      <Canvas
        onClick={handleClick}
        style={{ background: backgroundColor[gameStage] }}
      >
        {gameStage === "play" && <Game3D />}
        {gameStage === "start" && <Start3D key="start-stage" />}
        {gameStage === "upgrade" && <Upgrade3D />}
        {gameStage === "end" && <End3D key="end-stage" />}
      </Canvas>
    </>
  );
}

export default World;
