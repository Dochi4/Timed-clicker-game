import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import Mountain from "../Mountain";
import CameraTracker from "../Log_Camera_Pos";
import Forest from "../Forest";
import OBJModel from "../OBJModel";

function End3D() {
  const camera = useRef();
  const { scene } = useThree();
  // scene.background = new THREE.Color("#e66c1a");

  function Plane() {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry attach="geometry" args={[10, 10]} />
        <meshStandardMaterial
          attach="material"
          color="#031924"
          side={THREE.DoubleSide}
        />
      </mesh>
    );
  }
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

      {/* 2. Key Point Light: Positioned near the Ore/Action area */}
      {/* Think of this as a lantern sitting near the player */}
      <pointLight
        position={[-15, 12, -20]}
        intensity={2}
        distance={100}
        decay={0.5}
        color="#c77b17"
        castShadow
      />

      {/* 3. Rim Light: Hits the edges of your models to make them pop from the dark walls */}
      <spotLight
        position={[-10, 10, -15]}
        angle={0.3}
        penumbra={1}
        intensity={0}
        color="#094891" // Subtle blue "cave mist" tint
      />

      {/* 4. Fill Light: Soft light from the camera direction so the front isn't too dark */}
      <directionalLight position={[-8, 2, 9]} intensity={0.2} />

      {/* 3D Objects */}
      <OBJModel
        file="src/assets/models/Mountain.obj"
        textureFile="src/assets/textures/Mountain/Mountain_BC.png"
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        castShadow
      />
      <Stars />
      <Forest />
      {/* <Mountain /> */}
    </>
  );
}

export default End3D;
