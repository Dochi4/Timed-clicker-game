import React, { useContext, useEffect, useState } from "react";
import "../Styles/EndScreen.css";

function EndScreen({
  handleReset,
  handleStart,
  handleUpgrade,
  counter,
  wallet,
  newCoins,
}) {
  return (
    <div id="endscreen">
      <h1>End Of Day</h1>
      <div id="stats-board">
        <h2> Today's Stats</h2>
        <div id="stats-cell">
          <p>You Swung {counter} Times </p>
        </div>
        <div id="stats-cell">
          <p>You Earned {newCoins} Coins </p>
        </div>
        <div id="stats-cell">
          <p>You Current Wallet is {wallet} Coins</p>
        </div>
      </div>
      <div className="button-container ">
        <button onClick={handleStart}>Play Again</button>
        <button onClick={handleReset}>Return to Start Screen</button>
        <button onClick={handleUpgrade}>Upgrade</button>
      </div>
    </div>
  );
}

export default EndScreen;
