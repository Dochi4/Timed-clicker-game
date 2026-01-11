import React, { useContext, useEffect, useState } from "react";
import "../Css/GameScreen.css"


function GameScreen({maxTime,time,counter,endGame}) {
  
  const precentage =(time / maxTime) * 100

  return (
    <div className="gamescreen" >
      <h1>Game SCREEN</h1> 
       
       
       
      {time} <input
        type="range"
        min="0"
        max={maxTime}
        value={time}
        disabled
      />
      <button onClick={endGame}>End Early</button>
      <h2>{counter}</h2>
      <h2>{precentage}%s</h2>
    
    </div>
  );
}

export default GameScreen;
