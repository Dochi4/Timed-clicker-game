import { useEffect, useContext, useRef } from "react";
import { GameContext } from "../GameContext";
import * as Tone from "tone";
const sound = "/assets/sounds/172567__djgriffin__video-game-61.wav";
function PlayMusic() {
  const { musicOn } = useContext(GameContext);
  const playerRef = useRef(null);

  useEffect(() => {
    if (musicOn) {
      playerRef.current = new Tone.Player({
        url: sound,
        loop: true,
        autostart: true,
        volume: -12,
      }).toDestination();
    } else {
      playerRef.current?.stop();
      playerRef.current?.dispose();
    }

    return () => {
      playerRef.current?.stop();
      playerRef.current?.dispose();
    };
  }, [musicOn]);

  useEffect(() => {
    const resumeAudio = () => {
      if (Tone.getContext().state !== "running") {
        Tone.getContext().resume();
      }
    };

    window.addEventListener("click", resumeAudio);
    return () => window.removeEventListener("click", resumeAudio);
  }, []);
  return null;
}

export default PlayMusic;
