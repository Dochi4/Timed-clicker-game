import React, { useContext, useEffect, useState } from "react";
import "../Css/StartScreen.css";

function StartScreen({ handleStart, handleUpgrade }) {
  const linkedinUrl = "https://www.linkedin.com/in/mike-panaiotti-baa41b1a1/";

  return (
    <div id="start-screen">
      <h1 id="start-title">Mine Masher</h1>
      <p id="start-subtitle">CLICK • SMASH • GAIN</p>
      <div className="button-container">
        <button onClick={handleStart}> Start Game </button>
        <button onClick={handleUpgrade}> Upgrade </button>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-btn contact-link"
        >
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default StartScreen;
