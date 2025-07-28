import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const MonitorLight = () => {
  const spot = useRef<THREE.SpotLight>(null);

  //@ts-expect-error it works
  useHelper(spot, THREE.SpotLightHelper, "yellow");

  return (
    <spotLight
      //   ref={spot}
      position={[-0.6, 0.8, 0]}
      angle={0.8}
      penumbra={1}
      intensity={5}
      castShadow
    />
  );
};

export default MonitorLight;
