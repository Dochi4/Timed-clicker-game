import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Css/App.css"
import GameScreen from "./Routes/GameScreen";



function App() {
  const [counter, setCounter] = useState(0);
  const [gameOn, setGameOn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [time, setTime] = useState(5);

  const handleClick =()=>{
    setCounter(counter+1)
    setTime(5)
  }

  
  useEffect(()=>{
    if (time <=0) return
    const timer = setInterval(()=>{
      setTime((t)=> t-1)
    },1000)
    return() => clearInterval(timer)
  },[time])

  return (
    <div onClick={handleClick}>
    <h1>Time:{time}</h1>
    <h2>{counter}</h2>
    <GameScreen/>
    </div>
  );
}

export default App;
