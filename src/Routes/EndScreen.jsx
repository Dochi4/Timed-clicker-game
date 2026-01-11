import React, { useContext, useEffect, useState } from "react";

function EndScreen({
  handleReset,
  handleStart,
  handleUpgrade,
  counter,
  wallet,
  newCoins,
}) {
  return (
    <div>
      <h1>End SCREEN</h1>
      <h2>You Swung {counter} Times </h2>
      <h2>You earned {newCoins} Coins </h2>
      <h2>You current wallet is {wallet} Coins</h2>
      <button onClick={handleStart}>Play Again</button>
      <button onClick={handleReset}>Return to Start Screen</button>
      <button onClick={handleUpgrade}>Upgrade</button>
    </div>
  );
}

export default EndScreen;
