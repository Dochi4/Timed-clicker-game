import React, { useContext, useEffect, useState } from "react";


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
      <h2>Current Stats</h2>
      <p>Wallet: {wallet}</p>
      <p>Strength: {strength}</p>
      <p>MaxTime: {maxTime}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      <label>Strength Cost: {upgrade.strength.cost}</label>
      <button onClick={() => handleUpgrade('strength')}>Upgrade Strength</button>
      <label>MaxTime Cost: {upgrade.maxTime.cost}</label>
      <button onClick={() => handleUpgrade('maxTime')}>Upgrade MaxTime</button>
      <button onClick={handleStart}> Start Game </button>
      <button onClick={handleReset}>Return to Start Screen</button>
    </div>
  );
}


export default UpgradeBoard;
