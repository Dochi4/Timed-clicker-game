import { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [counter, setCounter] = useState(0); // points
  const [strength, setStrength] = useState(1); // points per click
  const [gameStage, setGameStage] = useState("start"); // start, play, end, upgrade
  const [musicOn, setMusicOn] = useState(true); // music toggle
  const [soundEffectsOn, setSoundEffectsOn] = useState(true); // sound effects toggle

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
        musicOn,
        setMusicOn,
        soundEffectsOn,
        setSoundEffectsOn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
