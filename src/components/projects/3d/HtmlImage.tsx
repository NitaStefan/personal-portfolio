import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { cn } from "@sglara/cn";
import { useRef, type RefObject } from "react";
import * as THREE from "three";
import { projects, projectTags } from "../../../lib/constants";

const HtmlImage = ({
  projectImage,
  ref,
  isLg,
}: {
  projectImage: {
    project: number;
    image: number;
  };
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
        divRef.current.style.perspectiveOrigin = `5% ${65 + prevY * (45 + size.height * 0.014)}%`;
      }
    }
  });

  const noOfImages = projects.map((project) => project.images.length);

  //   import { useEffect } from "react";

  // function Preloader({ urls }: { urls: string[] }) {
  //   useEffect(() => {
  //     urls.forEach((url) => {
  //       const img = new Image();
  //       img.src = url;
  //     });
  //   }, [urls]);

  //   return null; // nothing visible
  // }

  // // usage
  // <Preloader urls={[
  //   "/projects-img/project1-1.png",
  //   "/projects-img/project1-2.png",
  //   "/projects-img/project1-3.png",
  // ]} />

  return (
    <Html
      transform
      portal={{ current: gl.domElement.parentNode as HTMLElement }}
      pointerEvents="none"
      position={[isLg ? -0.018 : 0, 0.075, 0.03]}
      distanceFactor={1}
    >
      <div ref={divRef} className="perspective-[650px]">
        <div
          className={cn("flex h-57 w-100 items-center", isLg && "-rotate-y-22")}
        >
          {Array.from(
            { length: noOfImages[projectImage.project] },
            (_, i) => i,
          ).map((imgNo) => (
            <img
              src={`/projects-img/${projectTags[projectImage.project]}-${imgNo + 1}.png`}
              alt={`${projectTags[projectImage.project]}-${imgNo + 1}`}
              className={projectImage.image !== imgNo ? "hidden" : ""}
              width={400}
              height="auto"
            />
          ))}
        </div>
      </div>
    </Html>
  );
};

export default HtmlImage;
