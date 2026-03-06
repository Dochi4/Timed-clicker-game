import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

function OBJModel({ file, textureFile, ...props }) {
  const obj = useLoader(OBJLoader, file);
  const texture = useTexture(textureFile);

  useEffect(() => {
    obj.traverse((child) => {
      if (child.isMesh) child.material.map = texture;
    });
  }, [obj]);

  return <primitive object={obj} {...props} />;
}

export default OBJModel;
