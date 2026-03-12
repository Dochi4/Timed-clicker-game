import { useEffect, useState, useContext } from "react";
import "./Styles/App.css";
import GameScreen from "./Routes/GameScreen";
import StartScreen from "./Routes/StartScreen";
import EndScreen from "./Routes/EndScreen";
import UpgradeBoard from "./Routes/UpgradeBoard";
import Credit from "./Routes/Credit";
import World from "./Routes/Canvas/World";
import { GameContext } from "./GameContext";
// importing sounds and button click effect
import PlayMusic from "./Routes/PlayMusic";
import * as Tone from "tone";
const buttonSound = "/assets/sounds/839832__tommylistens__ui-click.wav";

function App() {
  const {
    counter,
    setCounter,
    strength,
    setStrength,
    gameStage,
    setGameStage,
    soundEffectsOn,
  } = useContext(GameContext);

  const [maxTime, setMaxTime] = useState(10); //max amount of seconds per game
  const [time, setTime] = useState(maxTime); // seconds
  const [wallet, setWallet] = useState(0); // coins for upgrades
  const [convertionRate, setConvertionRate] = useState(0.1); // points to coins
  const [upgrade, setUpgrade] = useState({
    strength: { cost: 10, max: 10 },
    maxTime: { cost: 20, max: 60 },
    convertionRate: { cost: 30, max: 2 },
  }); // upgrades state initial cost and max values

  // Listen Globally for Button add sound
  useEffect(() => {
    const clickAudio = new Audio(buttonSound);

    const handleGlobalClick = (event) => {
      if (event.target.closest("button") && soundEffectsOn) {
        clickAudio.currentTime = 0;
        clickAudio.play().catch(() => {});
      }
    };

    window.addEventListener("click", handleGlobalClick);

    return () => window.removeEventListener("click", handleGlobalClick);
  }, [soundEffectsOn]);

  // Play Stage Count Down Timer
  useEffect(() => {
    if (gameStage !== "play") return;
    const timer = setInterval(() => {
      setTime((t) => {
        if (t === 0) {
          endGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time, gameStage]);

  const walletConvertion = () => {
    const newCoins = Math.floor(counter * convertionRate);
    setWallet(wallet + newCoins);
  };

  const handleStart = () => {
    setCounter(0);
    setTime(maxTime);
    setGameStage("play");
  };
  const handleReset = () => {
    setGameStage("start");
  };
  const handleUpgrade = () => {
    setGameStage("upgrade");
  };
  const endGame = () => {
    walletConvertion();
    setGameStage("end");
  };
  const handleCredit = () => {
    setGameStage("credit");
  };

  function renderStages() {
    switch (gameStage) {
      case "start":
        return (
          <StartScreen
            handleStart={handleStart}
            handleUpgrade={handleUpgrade}
            handleCredit={handleCredit}
          />
        );
      case "play":
        return (
          <GameScreen
            endGame={endGame}
            maxTime={maxTime}
            time={time}
            counter={counter}
          />
        );
      case "end":
        return (
          <EndScreen
            handleReset={handleReset}
            handleStart={handleStart}
            handleUpgrade={handleUpgrade}
            counter={counter}
            wallet={wallet}
            newCoins={Math.floor(counter * convertionRate)}
          />
        );
      case "upgrade":
        return (
          <UpgradeBoard
            handleReset={handleReset}
            handleStart={handleStart}
            wallet={wallet}
            setWallet={setWallet}
            strength={strength}
            setStrength={setStrength}
            setMaxTime={setMaxTime}
            maxTime={maxTime}
            convertionRate={convertionRate}
            setConvertionRate={setConvertionRate}
            upgrade={upgrade}
            setUpgrade={setUpgrade}
          />
        );
      case "credit":
        return <Credit handleReset={handleReset} />;
    }
  }

  return (
    <div className="App">
      {/* 3D Canvas */}
      <div className="canvas">
        <World />
      </div>
      {/* UI */}
      <div className="ui-panel">{renderStages()}</div>
      {/* Music */}
      <PlayMusic />
    </div>
  );
}

export default App;
