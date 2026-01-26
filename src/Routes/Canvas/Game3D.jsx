import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import PickAxe from "./PickAxe_Clicker";
import Ore from "./Ore_Clicker";

function Game3D() {
  const [shake, setShake] = useState(true); // State to control camera shake
  const camera = useRef();

  function Plane() {
    return (
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial color="pink" />
      </mesh>
    );
  }

  function triggerShake() {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
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

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={camera}
        position={[-8, 2, 9]} // camera position
        fov={67}
        onUpdate={(self) => self.lookAt(0.5, 4, 3)}
      />
      <ambientLight intensity={0.3} />
      <directionalLight position={[-7, 10, 5]} intensity={1} castShadow />
      <spotLight position={[-10, 15, 10]} angle={0.4} intensity={0.7} />
      {/* 3D Objects */}
      <Stars />
      <PickAxe />
      <Ore />
      <Plane />
    </>
  );
}

export default Game3D;
