import React, { useRef } from "react";
import { PerspectiveCamera, Stars } from "@react-three/drei";

import * as THREE from "three";

function Upgrade3D() {
  const camera = useRef();

  return (
    <>
      {/* Camera*/}
      <PerspectiveCamera
        makeDefault
        ref={camera}
        position={[-8, 2, 9]}
        fov={67}
        onUpdate={(self) => self.lookAt(0.5, 4, 3)}
      />

      {/*Lighting Setup */}

      <ambientLight intensity={0.15} />

      <pointLight
        position={[0, 5, 5]}
        intensity={15}
        distance={20}
        decay={2}
        castShadow
      />

      <spotLight
        position={[-10, 10, -5]}
        angle={0.3}
        penumbra={1}
        intensity={5}
        color="#ff944c"
      />

      <directionalLight position={[-8, 2, 9]} intensity={0.4} />

      {/* 3D Objects */}
      <Stars />
    </>
  );
}

export default Upgrade3D;
