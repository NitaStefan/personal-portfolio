import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, type RefObject } from "react";
import * as THREE from "three";

const HtmlImage = ({
  ref,
  isLg,
}: {
  ref: RefObject<THREE.Group<THREE.Object3DEventMap> | null>;
  isLg: boolean;
}) => {
  const { gl, size } = useThree();
  const divRef = useRef<HTMLDivElement>(null);

  let prevY = 0;

  useFrame(() => {
    if (ref.current) {
      const vector = new THREE.Vector3();
      ref.current.getWorldPosition(vector);

      if (divRef.current && vector.y !== prevY) {
        prevY = vector.y;
        divRef.current.style.perspectiveOrigin = `5% ${65 + prevY * (45 + size.height * 0.006)}%`;
      }
    }
  });

  return (
    <Html
      transform
      portal={{ current: gl.domElement.parentNode as HTMLElement }}
      pointerEvents="none"
      position={[0, 0.072, 0.03]}
    >
      <div ref={divRef} className="perspective-[60px]">
        <img
          src="/projects-img/autodac-dashboard.png"
          width={40}
          className={isLg ? "-rotate-y-22" : ""}
        />
      </div>
    </Html>
  );
};

export default HtmlImage;
