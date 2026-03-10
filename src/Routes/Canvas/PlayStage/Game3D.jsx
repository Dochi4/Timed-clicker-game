import React, { useRef } from "react";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import TriggerAnimations from "./TriggerAnimations";
import PickAxe from "./PickAxe_Clicker";
import Test_Land from "./Test_Land";

function Game3D() {
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

      <TriggerAnimations cameraRef={camera} />

      {/*Lighting Setup */}

      <ambientLight intensity={0.15} />

      {/* 2. Key Point Light: Positioned near the Ore/Action area */}

      {/* Think of this as a lantern sitting near the player */}

      <pointLight
        position={[0, 5, 5]}
        intensity={15}
        distance={20}
        decay={2}
        castShadow
      />

      {/* 3. Rim Light: Hits the edges of your models to make them pop from the dark walls */}

      <spotLight
        position={[-10, 10, -5]}
        angle={0.3}
        penumbra={1}
        intensity={5}
        color="#19436e" // Subtle blue "cave mist" tint
      />

      {/* 4. Fill Light: Soft light from the camera direction so the front isn't too dark */}

      <directionalLight position={[-8, 2, 9]} intensity={0.4} />

      {/* 3D Objects */}

      <PickAxe />

      {/* <Ore /> */}

      <Test_Land />

      {/* <Cave_Test /> */}
    </>
  );
}

export default Game3D;
