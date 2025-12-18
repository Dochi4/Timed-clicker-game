import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Css/App.css"
import GameScreen from "./Routes/GameScreen";
import StartScreen from "./Routes/StartScreen";
import EndScreen from "./Routes/EndScreen";



function App() {
  const [counter, setCounter] = useState(0);
  const [gameStage, setGameStage] = useState("start");
  const [time, setTime] = useState(5);

  useEffect(()=>{
    if (gameStage !=='play') return; // only runs when playing 

    if(time ===0){
      endGame();
      return
    }
  
    const timer = setInterval(()=>{
      setTime((t)=> t-1)
    },1000)

    return() => clearInterval(timer)
  },[time,gameStage])

  const handleClick =()=>{
    setCounter(counter+1)
    setTime(5)
  }

  const handleStart =()=>{
    
    setGameStage("play")
  }
  const handleReset =()=>{
    setTime(5)
    setCounter(0)
    setGameStage("start")
  }
  const endGame =()=>{
    setGameStage("end")
  }

  function renderStages(){
    switch(gameStage){
      case'start':
        return < StartScreen handleStart={handleStart}   />
      case'play':
        return <GameScreen handleClick ={handleClick} time={time}counter={counter} />
      case'end':
        return <EndScreen handleReset = {handleReset}/>
    }
  }

  return (
    <div>
    {renderStages()}
    </div>
  );
}

export default App;
