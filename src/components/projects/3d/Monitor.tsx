import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Monitor = () => {
  const { scene } = useGLTF("/models/monitor/scene.gltf");
  const { size, viewport } = useThree();
  // const data = useScroll();
  const ref = useRef<THREE.Group>(null);

  console.log(size.height);

  useFrame(() => {
    // const offset = data.offset; // scroll position (0 to 1)
    const monitor = ref.current;

    if (monitor) {
      // monitor.scale.setScalar(3 + viewport.width * 0.1);
      monitor.scale.setScalar(0.1);

      // Rotate around Y axis as you scroll
      monitor.rotation.y = -0.5;

      // Move upward as you scroll
      monitor.position.y = -0.005 * size.height;
      //  - 8;
      monitor.position.x = viewport.width * 0.15;
    }

    // console.log(data.offset);
  });

  return <primitive object={scene} ref={ref} />;
};

export default Monitor;
