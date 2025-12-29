import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Css/App.css"
import GameScreen from "./Routes/GameScreen";
import StartScreen from "./Routes/StartScreen";
import EndScreen from "./Routes/EndScreen";
import UpgradeBoard from "./Routes/UpgradeBoard";



function App() {
  const [counter, setCounter] = useState(0);
  const [gameStage, setGameStage] = useState("start");
  const [maxTime,setMaxTime] = useState(100)
  const [time, setTime] = useState(maxTime);

  const [wallet,setWallet] = useState(0);
  const [strength, setStrength] = useState(1)
  const convertionRate = 10

  useEffect(()=>{
    if (gameStage !=='play') return; // only runs when playing 
    const timer = setInterval(()=>{
      setTime((t)=> { 
      if(t ===0){
        endGame();
        return 0 
    }
      return t-1
      })
    },1000)

    return() => clearInterval(timer)
  },[time,gameStage])

  const handleClick =()=>{
    if (gameStage !=='play') return;

    setCounter(counter+strength)
    setTime(maxTime)
  }
  
  const walletConvertion = ()=>{
    if( counter < convertionRate) return
      const newCoins = Math.floor(counter/convertionRate)
      setWallet(wallet + newCoins)
    }

  const handleStart =()=>{
    setCounter(0)
    setTime(maxTime)
    setGameStage("play")
  }
  const handleReset =()=>{
    setGameStage("start")
  }
  const handleUpgrade =()=>{
    setGameStage("upgrade")
  }
  const endGame =()=>{
    walletConvertion()
    setGameStage("end")
  }

  function renderStages(){
    switch(gameStage){
      case'start':
        return < StartScreen handleStart={handleStart} handleUpgrade={handleUpgrade} />
      case'play':
        return <GameScreen handleClick ={handleClick} maxTime={maxTime}time={time} counter={counter} />
      case'end':
        return <EndScreen handleReset = {handleReset} handleStart={handleStart} handleUpgrade={handleUpgrade} counter={counter} wallet={wallet} newCoins = {Math.floor(counter/convertionRate)}/>
      case'upgrade':
        return <UpgradeBoard handleReset={handleReset} handleStart={handleStart} wallet={wallet} setWallet={setWallet} strength={strength} setStrength={setStrength} setMaxTime={setMaxTime} maxTime={maxTime}/>
    
    }
  }

  return (
    <div className="App">
    {renderStages()}
    </div>
  );
}

export default App;
