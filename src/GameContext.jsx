import { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [counter, setCounter] = useState(0); // points
  const [strength, setStrength] = useState(1); // points per click
  const [gameStage, setGameStage] = useState("start"); // start, play, end, upgrade

  const handleClick = () => {
    if (gameStage !== "play") return;
    setCounter(counter + strength);
  };

  return (
    <GameContext.Provider
      value={{
        counter,
        setCounter,
        strength,
        setStrength,
        gameStage,
        setGameStage,
        handleClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
