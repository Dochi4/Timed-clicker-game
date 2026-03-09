import { useThree, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useState } from "react";

export default function CameraTracker() {
  const { camera } = useThree();
  const [position, setPosition] = useState({
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  });

  useFrame(() => {
    setPosition({
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    });
  });

  return (
    <Html position={[0, 0, 0]} fullscreen>
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "white",
          fontSize: "12px",
          background: "rgba(0,0,0,0.6)",
          padding: "8px",
          borderRadius: "4px",
          pointerEvents: "none",
        }}
      >
        <div>X: {position.x.toFixed(2)}</div>
        <div>Y: {position.y.toFixed(2)}</div>
        <div>Z: {position.z.toFixed(2)}</div>
      </div>
    </Html>
  );

  // This was used to determine the postion the camera needed to be in for the other scenes. It was removed after I got the values I needed, but I kept it in the codebase in case I need to reference it again in the future.
}
