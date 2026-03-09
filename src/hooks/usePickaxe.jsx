import { useContext } from "react";
import { GameContext } from "../GameContext";
import soundFile from "../assets/sounds/728757__techspiredminds__metallic-pickaxe-24.wav";
import * as Tone from "tone";

export function usePickaxe() {
  const { soundEffectsOn } = useContext(GameContext);

  const playSound = async () => {
    if (!soundEffectsOn) return;

    if (Tone.BaseContext.state !== "running") {
      await Tone.start();
    }

    const player = new Tone.Player(soundFile).toDestination();

    const pitchShift = new Tone.PitchShift(
      Math.random() < 0.5 ? -2 : 2,
    ).toDestination();

    player.connect(pitchShift);

    player.autostart = true;

    player.onstop = () => {
      player.dispose();
      pitchShift.dispose();
    };
  };

  return playSound;
}
