import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import MonitorLight from "./MonitorLight";
import { useMediaQuery } from "@react-hook/media-query";
import { useRef } from "react";
import * as THREE from "three";
import HtmlImage from "./HtmlImage";
import {
  getProjectsSectionHeight,
  getSkillsSectionHeight,
} from "../../../lib/utils";

const Monitor = ({ imgUrl }: { imgUrl: string }) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const { scene: monitorScene } = useGLTF("/models/monitor/scene.gltf");
  const { scene: keyboardScene } = useGLTF("/models/keyboard/scene.gltf");
  const { scene: mouseScene } = useGLTF("/models/mouse/scene.gltf");

  const monitorRef = useRef<THREE.Group>(null);

  const { size, viewport } = useThree();

  const grPositionX = isLargeScreen ? 1 + viewport.width * 0.062 : 0;
  const grPositionY =
    -2.88 -
    5.77 * (getSkillsSectionHeight(isLargeScreen) / size.height) -
    (isLargeScreen ? 3.2 : isSmallScreen ? 2.22 : 2.6) *
      (getProjectsSectionHeight(isLargeScreen, isSmallScreen) / size.height);

  const grScale = (isSmallScreen ? 4.3 : 3.8) - size.height * 0.16 * 0.01;

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

        {/* {isLargeScreen && ( */}
        <HtmlImage ref={monitorRef} isLg={isLargeScreen} imgUrl={imgUrl} />
        {/* )} */}
      </group>
    </>
  );
};

export default Monitor;
