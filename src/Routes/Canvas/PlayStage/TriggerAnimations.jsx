import React, { useState, useContext, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { GameContext } from "../../../GameContext";
import usePrevious from "../../../hooks/usePrevious";

function TriggerAnimations({ cameraRef }) {
  const [shake, setShake] = useState(false); // State to control camera shake
  const shakeTimeout = useRef(null);
  const { counter } = useContext(GameContext);
  const prevCounter = usePrevious(counter);

  useEffect(() => {
    if (counter - prevCounter >= 10 || counter % 10 === 0) {
      triggerShake();
    }
  }, [counter, prevCounter]);

  function triggerShake() {
    if (shakeTimeout.current) {
      clearTimeout(shakeTimeout.current);
    }
    setShake(true);
    shakeTimeout.current = setTimeout(() => {
      setShake(false);
      shakeTimeout.current = null;
    }, 1500);
  }

  useFrame(({ camera, clock }) => {
    if (shake) {
      const speed = clock.elapsedTime * 20; // Shake speed
      const intensity = 0.02; // Shake intensity

      camera.position.x += Math.sin(speed) * intensity;
      camera.position.y += Math.cos(speed * 1.3) * intensity;
      camera.position.z += Math.sin(speed * 0.8) * intensity;
    }
  });

  return null;
}

export default TriggerAnimations;
