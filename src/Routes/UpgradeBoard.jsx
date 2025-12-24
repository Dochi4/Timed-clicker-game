import React, { useContext, useEffect, useState } from "react";


function UpgradeBoard({handleReset,counter, SetCounter}) {
 

//   const upgrade ={

//   }

  return (
    <div >
      <h1>End SCREEN</h1>
      <h2>Your swings {counter}</h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default UpgradeBoard;
