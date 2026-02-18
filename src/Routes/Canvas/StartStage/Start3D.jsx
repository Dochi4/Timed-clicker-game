import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

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
      {/* <PerspectiveCamera
        makeDefault
        ref={camera}
        position={[-8, 2, 9]}
        fov={67}
        onUpdate={(self) => self.lookAt(0.5, 4, 3)}
      /> */}

      <OrbitControls />

      {/*Lighting Setup */}

      <ambientLight intensity={0.15} />

      {/* 2. Key Point Light: Positioned near the Ore/Action area */}
      {/* Think of this as a lantern sitting near the player */}
      <pointLight
        position={[-1, 4, -7]}
        intensity={15}
        distance={20}
        decay={2}
        color="#faf1df"
        castShadow
      />

      {/* 3. Rim Light: Hits the edges of your models to make them pop from the dark walls */}
      <spotLight
        position={[-10, 10, -5]}
        angle={0.3}
        penumbra={1}
        intensity={5}
        color="#f2fdfb" // Subtle blue "cave mist" tint
      />

      {/* 4. Fill Light: Soft light from the camera direction so the front isn't too dark */}
      <directionalLight position={[-8, 2, 9]} intensity={0.4} color="#73d7f5" />

      {/* 3D Objects */}
      <Stars />
      <Plane />
    </>
  );
}

export default Start3D;
