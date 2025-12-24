import React, { useContext, useEffect, useState } from "react";


function EndScreen({handleReset,counter,wallet,newCoins}) {
 

  return (
    <div >
      <h1>End SCREEN</h1>
      <h2>You Swung {counter} Times </h2>
      <h2>You earned {newCoins} Coins </h2>
      <h2>You current wallet is {wallet} Coins</h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default EndScreen;
