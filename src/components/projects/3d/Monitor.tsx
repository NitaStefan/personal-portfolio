import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import MonitorLight from "./MonitorLight";
import { useMediaQuery } from "@react-hook/media-query";
import { useRef } from "react";
import * as THREE from "three";
import HtmlImage from "./HtmlImage";
import {
  getProjectsSectionHeight,
  getSkillsSectionHeight,
} from "../../../lib/utils";

const Monitor = ({
  zoomed,
  toggleZoom,
  projectImage,
}: {
  zoomed: boolean;
  toggleZoom: () => void;
  projectImage: {
    project: number;
    image: number;
  };
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const { scene: monitorScene } = useGLTF("/models/monitor/scene.gltf");
  const { scene: keyboardScene } = useGLTF("/models/keyboard/scene.gltf");
  const { scene: mouseScene } = useGLTF("/models/mouse/scene.gltf");

  const monitorRef = useRef<THREE.Group>(null);

  const { size, viewport } = useThree();

  const grPositionX = isLargeScreen ? 1 + viewport.width * 0.062 : 0;
  const relativeToProjectsSection =
    (isLargeScreen ? 3.2 : isSmallScreen ? 2.22 : 2.6) * (zoomed ? 0.9 : 1);
  const grPositionY =
    -2.88 -
    5.77 * (getSkillsSectionHeight(isLargeScreen) / size.height) -
    relativeToProjectsSection *
      (getProjectsSectionHeight(isLargeScreen, isSmallScreen) / size.height);

  const grScale = (isSmallScreen ? 4.3 : 3.8) - size.height * 0.16 * 0.01;

  //  refs for animating
  const groupRef = useRef<THREE.Group>(null);
  const wrapperRef = useRef<THREE.Group>(null);
  const kbMouseRef = useRef<THREE.Group>(null);

  // Smooth animate toward targets each frame
  useFrame(() => {
    const g = groupRef.current;
    const w = wrapperRef.current;
    const kb = kbMouseRef.current;
    if (!g || !w || !kb) return;

    // Targets derived from your existing logic
    const targetScale = zoomed ? grScale * 1.8 - size.height * 0.0005 : grScale;
    const targetX = zoomed ? 0 : grPositionX;
    const targetRotY = isLargeScreen && !zoomed ? -0.38 : 0;
    const targetKbScale = zoomed ? 0.7 : 1;

    // Lerp factor: tweak 0.1–>0.2 slower->faster smoothing
    const t = 0.1;

    // Scale (uniform)
    g.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      t * 1.6,
    );

    // Position X (keep Y/Z from layout)
    g.position.x = THREE.MathUtils.lerp(g.position.x, targetX, t * 0.8);
    // If you also want to smooth Y when layout changes, uncomment:
    // g.position.y = THREE.MathUtils.lerp(g.position.y, grPositionY, t);

    // Rotation Y
    w.rotation.y = THREE.MathUtils.lerp(w.rotation.y, targetRotY, t * 0.6);

    // Keyboard + mouse scale
    kb.scale.lerp(
      new THREE.Vector3(targetKbScale, targetKbScale, targetKbScale),
      t,
    );
  });

  return (
    <group
      ref={groupRef} /* initial values; animation takes over */
      scale={grScale}
      position={[grPositionX, grPositionY, 0]}
    >
      <MonitorLight />
      <group ref={wrapperRef} /* rotation will be animated */>
        <primitive
          onClick={toggleZoom}
          onPointerOver={() =>
            (document.body.style.cursor = isLargeScreen
              ? zoomed
                ? "zoom-out"
                : "zoom-in"
              : "auto")
          }
          onPointerOut={() => (document.body.style.cursor = "auto")}
          object={monitorScene}
          ref={monitorRef}
        />
        <group ref={kbMouseRef} position-y={-0.11}>
          <primitive
            object={keyboardScene}
            position={[-0.11, -0.48, 0.1]}
            rotation={[0.4, -0.2, 0]}
            scale={1.2}
          />
          <primitive
            object={mouseScene}
            position={[0.25, -0.48, 0.1]}
            rotation={[0.4, 3.4, 0]}
            scale={0.1}
          />
        </group>
      </group>

      <HtmlImage
        zoomed={zoomed}
        ref={monitorRef}
        isLg={isLargeScreen}
        projectImage={projectImage}
      />
    </group>
  );
};

export default Monitor;
