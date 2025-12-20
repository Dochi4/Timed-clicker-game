import React, { useContext, useEffect, useState } from "react";


function SimpleSlider({maxTime,time}) {
  return (
    
      <input
        type="range"
        min="0"
        max={maxTime}
        value={time}
        disabled
      />
    
  );
}

export default SimpleSlider;
