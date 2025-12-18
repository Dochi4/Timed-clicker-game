import React, { useContext, useEffect, useState } from "react";


function EndScreen({handleReset}) {
 

  useEffect(() => {
    
  }, []);

  return (
    <div >
      <h1>End SCREEN</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default EndScreen;
