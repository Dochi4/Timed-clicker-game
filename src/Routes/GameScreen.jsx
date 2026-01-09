import React, { useContext, useEffect, useState } from "react";
import "../Css/GameScreen.css"


function GameScreen({maxTime,time,counter}) {
  

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
      <h2>{counter}</h2>
    </div>
  );
}

export default GameScreen;
