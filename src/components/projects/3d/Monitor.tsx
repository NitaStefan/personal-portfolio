import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Monitor = () => {
  const { scene } = useGLTF("/models/monitor/scene.gltf");
  const data = useScroll();
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    const offset = data.offset; // scroll position (0 to 1)
    if (ref.current) {
      const monitor = ref.current;
      // Scale grows from 1 to 2
      monitor.scale.setScalar(1 + offset);

      // Rotate around Y axis as you scroll
      monitor.rotation.y = offset * Math.PI * 2;

      // Move upward as you scroll
      monitor.position.y = -offset * 16;
    }
  });

  return <primitive object={scene} ref={ref} />;
};

export default Monitor;
