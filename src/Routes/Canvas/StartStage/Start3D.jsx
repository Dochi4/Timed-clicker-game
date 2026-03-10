import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";
import Mountain from "../Mountain";
import Forest from "../Forest";
import CameraTracker from "../Log_Camera_Pos";
import OBJModel from "../OBJModel";

function Start3D() {
  const camera = useRef();

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

      <pointLight
        position={[1, 30, 10]}
        intensity={3}
        distance={70}
        decay={0.7}
        color="#fde9c3"
        castShadow
      />

      <spotLight
        position={[-10, 10, -5]}
        angle={0.3}
        penumbra={10}
        intensity={20}
        color="#43fded"
      />

      <directionalLight position={[-8, 2, 9]} intensity={0.3} color="#73d0f5" />

      {/* 3D Objects */}

      <Forest />
      <Mountain />
    </>
  );
}

export default Start3D;
