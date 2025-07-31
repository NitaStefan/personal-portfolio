import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { PAGES_HEIGHTS } from "../../../lib/constants";
import MonitorLight from "./MonitorLight";
import { useMediaQuery } from "@react-hook/media-query";
import { useRef } from "react";
import * as THREE from "three";
import HtmlImage from "./HtmlImage";

const Monitor = ({ imgUrl }: { imgUrl: string }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const { scene: monitorScene } = useGLTF("/models/monitor/scene.gltf");
  const { scene: keyboardScene } = useGLTF("/models/keyboard/scene.gltf");
  const { scene: mouseScene } = useGLTF("/models/mouse/scene.gltf");

  const monitorRef = useRef<THREE.Group>(null);

  const { size, viewport } = useThree();

  const grPositionX = isLargeScreen ? 0.8 + viewport.width * 0.1 : 0;
  const grPositionY =
    (isLargeScreen ? -3.84 : isSmallScreen ? -3.5 : -2.6) -
    15 * (PAGES_HEIGHTS.SKILLS / size.height);

  const scalarVal = isLargeScreen ? 5.1 : 2.8;
  const maxLg = isLargeScreen ? 0 : viewport.width * 0.4;
  const grScale = scalarVal - size.height * 0.15 * 0.01 + maxLg;

  return (
    <>
      <group scale={grScale} position={[grPositionX, grPositionY, 0]}>
        <MonitorLight />
        <group rotation-y={isLargeScreen ? -0.38 : 0}>
          <primitive object={monitorScene} ref={monitorRef} />
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

        <HtmlImage ref={monitorRef} isLg={isLargeScreen} imgUrl={imgUrl} />
      </group>
    </>
  );
};

export default Monitor;
