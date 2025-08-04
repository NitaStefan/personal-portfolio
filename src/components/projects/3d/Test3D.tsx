import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { getSkillsSectionHeight } from "../../../lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
// import { PAGES_HEIGHTS } from "../../../lib/constants";
// import { Html } from "@react-three/drei";

const Test3D = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const { size } = useThree();
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    const cube = ref.current;

    if (cube) {
      cube.scale.setScalar(0.04);

      cube.position.y =
        -2.88 - // based on hero sect
        5.77 * (getSkillsSectionHeight(isLargeScreen) / size.height) + // similar to absolute relative to skills section
        0;
    }
  });

  return (
    <>
      {/* <mesh position={[0, -10, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh> */}

      <mesh ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[0.05, 24, 0, 6.28]} />
        <meshNormalMaterial />
      </mesh>
      {/* <Html
          portal={{ current: gl.domElement.parentNode }}
          transform
          style={{ position: "sticky" }}
        >
          <img
            src="/projects-img/autodac-dashboard.png"
            style={{ width: "150px" }}
          />
        </Html> */}
      {/* <Html position={[0, 0, 0]} transform>
          <div className="text-5xl font-bold">
            <img
              height="auto"
              width={200}
              src="/projects-img/autodac-dashboard.png"
              alt="autodac"
            />
          </div>
          <div>salut</div>
        </Html> */}
    </>
  );
};

export default Test3D;
