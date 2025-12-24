import React, { useContext, useEffect, useState } from "react";


function StartScreen({handleStart}) {
 

  // useEffect(() => {
    
  // }, []);



  return (
    <div >
      <h1>START SCREEN</h1>
      <button onClick={handleStart}> Start Game </button>
    </div>
  );
}

export default StartScreen;
