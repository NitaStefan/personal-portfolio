import { useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { PAGES_HEIGHTS } from "../../../lib/constants";
// import { useControls } from "leva";
import MonitorLight from "./MonitorLight";
import { useMediaQuery } from "@react-hook/media-query";

const Monitor = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const { scene: monitorScene } = useGLTF("/models/monitor/scene.gltf");
  const { scene: keyboardScene } = useGLTF("/models/keyboard/scene.gltf");
  const { scene: mouseScene } = useGLTF("/models/mouse/scene.gltf");

  const texture = useTexture("/projects-img/autodac-dashboard.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  const { size, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  // const { scalar, position, positionFactor, scalarFactor } = useControls(
  //   "Monitor Settings",
  //   {
  //     scalar: { value: 5.1, min: 0, max: 10 },
  //     scalarFactor: { value: 0.15, min: 0.1, max: 0.5 },
  //     position: { value: 0.8, min: 0, max: 1 },
  //     positionFactor: { value: 0.06, min: 0, max: 0.1 },
  //   },
  //   { collapsed: true },
  // );

  console.log(viewport.width);

  const grPositionX = isLargeScreen ? 0.8 + viewport.width * 0.06 : 0;
  const grPositionY =
    (isLargeScreen ? -3.84 : -3.3) - 15 * (PAGES_HEIGHTS.SKILLS / size.height);

  const scalarVal = isLargeScreen ? 5.1 : 2.8;
  const maxLg = isLargeScreen ? 0 : viewport.width * 0.4;
  const grScale = scalarVal - size.height * 0.15 * 0.01 + maxLg;

  return (
    <>
      <group
        ref={groupRef}
        scale={grScale}
        rotation-y={isLargeScreen ? -0.4 : 0}
        position={[grPositionX, grPositionY, 0]}
      >
        <MonitorLight />
        <primitive object={monitorScene}>
          <mesh position={[0, 0.075, 0.032]}>
            <planeGeometry args={[1, 0.565]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
          </mesh>
        </primitive>

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
