import { useRef, useEffect } from "react";
import * as THREE from "three";
// import { useHelper } from "@react-three/drei";

const MonitorLight = () => {
  const dirLight = useRef<THREE.DirectionalLight>(null);
  const target = useRef<THREE.Object3D>(null);

  // Debug helper
  // useHelper(dirLight, THREE.DirectionalLightHelper, 1, "yellow");

  // Attach target to the light
  useEffect(() => {
    if (dirLight.current && target.current) {
      dirLight.current.target = target.current;
    }
  }, []);

  return (
    <>
      <directionalLight
        ref={dirLight}
        position={[-0.2, 0, -0.5]}
        intensity={0.18}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      {/* Invisible target object for direction */}
      <object3D ref={target} position={[-0.3, -1.5, 0]} />
    </>
  );
};

export default MonitorLight;
