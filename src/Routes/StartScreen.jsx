import React, { useContext, useEffect, useState } from "react";
import "../Css/StartScreen.css";
import { GameContext } from "../GameContext.jsx";

function StartScreen({ handleStart, handleUpgrade, handleCredit }) {
  const linkedinUrl = "https://www.linkedin.com/in/mike-panaiotti-baa41b1a1/";
  const { soundEffectsOn, setSoundEffectsOn, musicOn, setMusicOn } =
    useContext(GameContext);

  const soundEffectToggle = () => {
    setSoundEffectsOn(!soundEffectsOn);
  };

  const musicToggle = () => {
    setMusicOn(!musicOn);
  };
  return (
    <div id="start-screen">
      <div id="tiny-button-container">
        <button className="tiny-button" onClick={soundEffectToggle}>
          Sound Effects: {soundEffectsOn ? "ON" : "OFF"}
        </button>
        <button className="tiny-button" onClick={musicToggle}>
          Music: {musicOn ? "ON" : "OFF"}
        </button>
        <button className="tiny-button" onClick={handleCredit}>
          Credits
        </button>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-btn contact-link tiny-button"
        >
          CONTACT ME
        </a>
      </div>
      <h1 id="start-title">Mine Masher</h1>
      <p id="start-subtitle">CLICK • SMASH • GAIN</p>
      <div className="button-container">
        <button onClick={handleStart}> Start Game </button>
        <button onClick={handleUpgrade}> Upgrade </button>
      </div>
    </div>
  );
}

export default StartScreen;
