import React, { useContext, useEffect, useState } from "react";
import "../Css/Upgrade3D.css"


function UpgradeBoard({handleReset,handleStart,wallet,strength, setWallet,setStrength,setMaxTime,maxTime}) {
  const [error, setError] = useState(null);


  const upgrade ={
    strength: {cost:10},
    maxTime: {cost:20}
  }

  const handleUpgrade = (type) => {
    
    if (wallet >= upgrade[type].cost) {
      setWallet(wallet - upgrade[type].cost);
      
      if (type === 'strength') {
        setStrength(strength + 1);
        setError(null);
      }
      if (type === 'maxTime') {
        setMaxTime(maxTime + 5);
        setError(null);
      }
    } else {
      setError('Not enough money to upgrade');
    }
  }

  return (
    <div >
      <h1>Upgrade Screen</h1>
      <div id="stats-board">
        <h2>Current Stats</h2>
        <p>Wallet: {wallet} Coins</p>

        <div id='stats-cell'>
        <p>Strength: {strength}</p>
        <p>{upgrade.strength.cost} Coins</p>
        <button onClick={() => handleUpgrade('strength')}>Upgrade Strength</button>
        </div>
        <div id='stats-cell'>
        <p>MaxTime: {maxTime}</p>
        <p>{upgrade.maxTime.cost} Coins</p>
        <button onClick={() => handleUpgrade('maxTime')}>Upgrade MaxTime</button>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
      
       

      <button onClick={handleStart}> Start Game </button>
      <button onClick={handleReset}>Return to Start Screen</button>
    </div>
  );
}


export default UpgradeBoard;
