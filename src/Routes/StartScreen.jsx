import React, { useContext, useEffect, useState } from "react";

function StartScreen({ handleStart, handleUpgrade }) {
  // useEffect(() => {

  // }, []);

  return (
    <div>
      <h1>START SCREEN</h1>
      <button onClick={handleStart}> Start Game </button>
      <button onClick={handleUpgrade}> Upgrade </button>
    </div>
  );
}

export default StartScreen;
