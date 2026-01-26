import React, { useContext, useEffect, useState } from "react";
import "../Css/Upgrade3D.css";

function UpgradeBoard({
  handleReset,
  handleStart,
  wallet,
  strength,
  setWallet,
  setStrength,
  setMaxTime,
  maxTime,
  convertionRate,
  setConvertionRate,
  upgrade,
  setUpgrade,
}) {
  const [error, setError] = useState(null);

  const handleUpgrade = (type) => {
    if (wallet >= upgrade[type].cost) {
      setWallet(wallet - upgrade[type].cost);

      if (type === "strength") {
        if (strength >= upgrade.strength.max) return;
        setStrength(strength + 1);
        setUpgrade({
          ...upgrade,
          strength: {
            ...upgrade.strength,
            cost: upgrade.strength.cost + 10,
          },
        });
        setError(null);
      }
      if (type === "maxTime") {
        setMaxTime(maxTime + 5);
        setUpgrade((prev) => ({
          ...prev,
          maxTime: {
            ...prev.maxTime,
            cost: prev.maxTime.cost + 10,
          },
        }));
        setError(null);
      }
      if (type === "convertionRate") {
        setConvertionRate(convertionRate + 0.05);
        setUpgrade((prev) => ({
          ...prev,
          convertionRate: {
            ...prev.convertionRate,
            cost: prev.convertionRate.cost + 10,
          },
        }));
        setError(null);
      }
    } else {
      setError("Not enough money to upgrade");
    }
  };

  function floorToSecondDecimal(num) {
    return Math.floor(num * 100) / 100;
  }

  return (
    <div>
      <h1>Upgrade Screen</h1>
      <div id="stats-board">
        <h2>Current Stats</h2>
        <h3>Wallet: {wallet} Coins</h3>

        <div id="stats-cell">
          <p>Strength: {strength}</p>
          <p>{upgrade.strength.cost} Coins</p>

          <button
            onClick={() => handleUpgrade("strength")}
            disabled={strength === upgrade.strength.max}
          >
            {strength === upgrade.strength.max
              ? "Max Strength"
              : "Upgrade Strength"}
          </button>
        </div>

        <div id="stats-cell">
          <p>MaxTime: {maxTime} sec</p>
          <p>{upgrade.maxTime.cost} Coins</p>
          <button
            onClick={() => handleUpgrade("maxTime")}
            disabled={maxTime >= upgrade.maxTime.max}
          >
            {maxTime >= upgrade.maxTime.max
              ? "Max Time Reached"
              : "Upgrade MaxTime"}
          </button>
        </div>

        <div id="stats-cell">
          <p>Swing/Coin: {floorToSecondDecimal(convertionRate)}</p>
          <p>{upgrade.convertionRate.cost} Coins</p>
          <button
            onClick={() => handleUpgrade("convertionRate")}
            disabled={convertionRate >= upgrade.convertionRate.max}
          >
            {convertionRate >= upgrade.convertionRate.max
              ? "Max Conversion Rate"
              : "Upgrade Swing/Coin"}
          </button>
        </div>
        {error && <div className="error">{error}</div>}
      </div>

      <button onClick={handleStart}> Start Game </button>
      <button onClick={handleReset}>Return to Start Screen</button>
    </div>
  );
}

export default UpgradeBoard;
