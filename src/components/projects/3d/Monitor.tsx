import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { PAGES_HEIGHTS } from "../../../lib/constants";
import { useControls } from "leva";
import MonitorLight from "./MonitorLight";

const Monitor = () => {
  const { scene: monitorScene } = useGLTF("/models/monitor/scene.gltf");
  const { scene: keyboardScene } = useGLTF("/models/keyboard/scene.gltf");
  const { scene: mouseScene } = useGLTF("/models/mouse/scene.gltf");

  const { size, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  const { scalar, position, positionFactor, scalarFactor } = useControls(
    "Monitor Settings",
    {
      scalar: { value: 5.1, min: 0, max: 10 },
      scalarFactor: { value: 0.15, min: 0.1, max: 0.5 },
      position: { value: 0.8, min: 0, max: 1 },
      positionFactor: { value: 0.06, min: 0, max: 0.1 },
    },
    { collapsed: true },
  );

  return (
    <>
      <group
        ref={groupRef}
        scale={scalar - size.height * scalarFactor * 0.01}
        rotation-y={-0.4}
        position={[
          position + viewport.width * positionFactor,
          -3.84 - 15 * (PAGES_HEIGHTS.SKILLS / size.height),
          0,
        ]}
      >
        <MonitorLight />
        <primitive object={monitorScene} />
        <primitive
          object={keyboardScene}
          position={[-0.11, -0.48, 0.3]}
          rotation={[0.4, -0.2, 0]}
          scale={1.2}
        />
        <primitive
          object={mouseScene}
          position={[0.25, -0.48, 0.3]}
          rotation={[0.4, 3.4, 0]}
          scale={0.1}
        />
      </group>
    </>
  );
};

export default Monitor;
