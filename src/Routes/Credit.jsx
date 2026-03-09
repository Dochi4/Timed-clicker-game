import React, { useContext, useEffect, useState } from "react";
import "../Css/EndScreen.css";

function Credit({ handleReset }) {
  return (
    <div id="endscreen">
      <h1>Credit</h1>
      <div id="stats-board">
        <h2> Audio - Freesound.org </h2>
        <div id="stats-cell">
          <p>Button Click:</p>
          <p>
            Button Click:w UI Click by TommyListens --
            https://freesound.org/s/839832/ -- License: Creative Commons 0
          </p>
        </div>
        <div id="stats-cell">
          <p>Background Music:</p>
          <p>
            video game 6.1.wav by djgriffin -- https://freesound.org/s/172567/
            -- License: Attribution 4.0
          </p>
        </div>
        <div id="stats-cell">
          <p>Pickaxe Swing: </p>
          <p>
            Metallic pickaxe 2/4 by TechspiredMinds --
            https://freesound.org/s/728757/ -- License: Attribution 4.0
          </p>
        </div>
      </div>
      <div className="button-container ">
        <button onClick={handleReset}>Return to Start Screen</button>
      </div>
    </div>
  );
}

export default Credit;
