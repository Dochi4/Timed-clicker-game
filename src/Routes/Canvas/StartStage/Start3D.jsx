import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import Mountain from "../Mountain";
import Forest from "../Forest";
import CameraTracker from "../Log_Camera_Pos";
import OBJModel from "../OBJModel";

function Start3D() {
  const camera = useRef();
  const { scene } = useThree();
  // scene.background = new THREE.Color("#54a4da");

  function Plane() {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry attach="geometry" args={[10, 10]} />
        <meshStandardMaterial
          attach="material"
          color="#ddeaf0"
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
        position={[-50, 20, 4]}
        fov={50}
        onUpdate={(self) => self.lookAt(0, 10, 0)}
      />
      {/* <OrbitControls /> */}
      {/* <CameraTracker /> */}

      {/*Lighting Setup */}

      <ambientLight intensity={0.2} />

      {/* 2. Key Point Light: Positioned near the Ore/Action area */}
      {/* Think of this as a lantern sitting near the player */}
      <pointLight
        position={[1, 30, 10]}
        intensity={3}
        distance={70}
        decay={0.7}
        color="#fde9c3"
        castShadow
      />

      {/* 3. Rim Light: Hits the edges of your models to make them pop from the dark walls */}
      <spotLight
        position={[-10, 10, -5]}
        angle={0.3}
        penumbra={10}
        intensity={20}
        color="#43fded" // Subtle blue "cave mist" tint
      />

      {/* 4. Fill Light: Soft light from the camera direction so the front isn't too dark */}
      <directionalLight position={[-8, 2, 9]} intensity={0.3} color="#73d0f5" />

      {/* 3D Objects */}

      {/* <OBJModel
        file="src/assets/models/Mountain.obj"
        textureFile="src/assets/textures//Mountain/Mountain_BC.png"
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        castShadow
      /> */}
      <Forest />
      <Mountain />
      {/* <Plane /> */}
    </>
  );
}

export default Start3D;
