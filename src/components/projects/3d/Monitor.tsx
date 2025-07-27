import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PAGES_HEIGHTS } from "../../../lib/constants";
import { useControls } from "leva";

const Monitor = () => {
  const { scene } = useGLTF("/models/monitor/scene.gltf");
  const { size, viewport } = useThree();
  const ref = useRef<THREE.Group>(null);

  const { scalar, position, positionFactor, scalarFactor } = useControls({
    scalar: { value: 5.1, min: 0, max: 10 },
    scalarFactor: { value: 0.15, min: 0.1, max: 0.5 },
    position: { value: 0.9, min: 0, max: 1 },
    positionFactor: { value: 0.07, min: 0, max: 0.1 },
  });

  useEffect(() => {
    const monitor = ref.current;

    if (monitor) {
      monitor.scale.setScalar(scalar - size.height * scalarFactor * 0.01);

      monitor.rotation.y = -0.4;

      monitor.position.x = position + viewport.width * positionFactor;
      // monitor.position.y = -3.84 - 15 * (PAGES_HEIGHTS.SKILLS / size.height);
    }
  }, [
    size,
    viewport.width,
    //LEVA
    scalar,
    position,
    positionFactor,
    scalarFactor,
  ]);

  return <primitive object={scene} ref={ref} />;
};

export default Monitor;
