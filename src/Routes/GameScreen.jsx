import React, { useContext, useEffect, useState } from "react";
import "../Css/GameScreen.css";

function GameScreen({ maxTime, time, counter, endGame }) {
  const precentage = (time / maxTime) * 100;
  const root = document.documentElement;
  root.style.setProperty("--precentage", `${precentage}%`);

  return (
    <div className="gamescreen">
      <h1 id="title">DEEP CAVE</h1>
      <p id="subtitle">Click to swing</p>
      <div id="time-bar-button-container">
        <div id="time-bar-container">
          <div id="time-bar-fill" />
          <div id="time-bar-label">Time Left: {`${time} seconds`}</div>
        </div>
        <button id="end-game-button" onClick={endGame}>
          End Early
        </button>
      </div>
      <h2 id="counter-label">Swings: {counter}</h2>
    </div>
  );
}

export default GameScreen;
