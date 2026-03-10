import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import CameraTracker from "../Log_Camera_Pos";
import Forest from "../Forest";
import Mountain from "../Mountain";

function End3D() {
  const camera = useRef();

  return (
    <>
      {/* Camera*/}
      <PerspectiveCamera
        makeDefault
        ref={camera}
        position={[-33, 8, -1]}
        fov={50}
        onUpdate={(self) => self.lookAt(0, 10, -1)}
      />
      {/* <OrbitControls /> */}
      {/* <CameraTracker /> */}
      {/*Lighting Setup */}

      <ambientLight intensity={0.03} color="#0c1f5e" />

      <pointLight
        position={[-15, 12, -20]}
        intensity={2}
        distance={100}
        decay={0.5}
        color="#c77b17"
        castShadow
      />

      <spotLight
        position={[-10, 10, -15]}
        angle={0.3}
        penumbra={1}
        intensity={0}
        color="#094891"
      />

      <directionalLight position={[-8, 2, 9]} intensity={0.2} />

      {/* 3D Objects */}

      <Mountain />
      <Stars />
      <Forest />
    </>
  );
}

export default End3D;
