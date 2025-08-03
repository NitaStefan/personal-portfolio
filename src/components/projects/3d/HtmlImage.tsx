import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { cn } from "@sglara/cn";
import { useRef, type RefObject } from "react";
import * as THREE from "three";

const HtmlImage = ({
  imgUrl,
  ref,
  isLg,
}: {
  imgUrl: string;
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
      position={[0, 0.075, 0.03]}
      distanceFactor={2}
      scale={0.5}
    >
      <div ref={divRef} className="perspective-[610px]">
        <div
          className={cn("flex h-57 w-100 items-center", isLg && "-rotate-y-22")}
        >
          <img src={imgUrl} width={400} />
        </div>
      </div>
    </Html>
  );
};

export default HtmlImage;
