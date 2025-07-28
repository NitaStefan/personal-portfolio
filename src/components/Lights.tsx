import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

const Lights = () => {
  const spot = useRef<SpotLight>(null);

  //@ts-expect-error it works
  useHelper(spot, SpotLightHelper, "yellow");

  return (
    <spotLight
      // ref={spot}
      position={[1, 4, 0.2]}
      angle={1}
      penumbra={1}
      decay={0}
      intensity={0.5}
      castShadow
    />
  );
};

export default Lights;
