import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { PAGES_HEIGHTS } from "../../../lib/constants";

const Test3D = () => {
  const { size } = useThree();
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    const cube = ref.current;

    if (cube) {
      cube.scale.setScalar(0.05);

      cube.position.y =
        -4 - // based on hero sect
        10 * (PAGES_HEIGHTS.SKILLS / size.height); // similar to absolute relative to skills section
    }
  });

  return (
    <>
      <mesh ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[0.05, 24, 0, 6.28]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Test3D;
