import {
  Environment,
  OrbitControls,
  Preload,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Hero from "./components/hero";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Monitor from "./components/projects/3d/Monitor";
import { getTotalContentHeightInPx } from "./lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
// import Test3D from "./components/projects/3d/Test3D";
import { Suspense, useState } from "react";
import { projectTags } from "./lib/constants";

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const [activeImage, setActiveImage] = useState(1);
  const [projectNo, setProjectNo] = useState(0);

  const pages =
    1 +
    getTotalContentHeightInPx(isLargeScreen, isSmallScreen) /
      window.innerHeight; // hero (1 page) + the rest

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* <OrbitControls /> */}
      {/* <Lights /> */}
      <Environment preset="city" environmentIntensity={0.14} />

      <ScrollControls pages={pages} damping={0.001}>
        <Scroll>
          {/* <Test3D /> */}
          <Suspense fallback={null}>
            <Monitor
              imgUrl={`/projects-img/${projectTags[projectNo]}-${activeImage + 1}.png`}
            />
            <Preload all />
          </Suspense>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <main className="mx-auto max-w-5xl px-5 sm:px-12">
            <Hero />

            <Skills />

            <Projects
              projectNo={projectNo}
              handleSelect={(index) => setProjectNo(index)}
              activeImage={activeImage}
              setImg={(no: number) => setActiveImage(no)}
            />

            <Certificates />
          </main>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
