import {
  Environment,
  // OrbitControls,
  Preload,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
import Hero from "./components/hero";
import Certificates from "./components/certificates";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Monitor from "./components/projects/3d/Monitor";
import { getTotalContentHeightInPx } from "./lib/utils";
import { useMediaQuery } from "@react-hook/media-query";
// import Test3D from "./components/projects/3d/Test3D";
import { createContext, Suspense, useEffect, useState } from "react";
import Footer from "./components/Footer";
import { CanvasWrapper } from "@isaac_ua/drei-html-fix";

interface ProjectContextType {
  zoomed: boolean;
  projectImage: { project: number; image: number };
  selectProject: (index: number) => void;
  selectImage: (index: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext<ProjectContextType | null>(null);

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const [projectImage, setProjectImage] = useState({ project: 0, image: 0 });
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!isLargeScreen) {
      setZoomed(false);
    }
  }, [isLargeScreen]);

  const pages =
    1 +
    getTotalContentHeightInPx(isLargeScreen, isSmallScreen) /
      window.innerHeight; // hero (1 page) + the rest

  return (
    <CanvasWrapper
      canvasProps={{
        camera: { fov: 60, position: [0, 0, 5] },
        shadows: true,
        dpr: [1, 2],
      }}
    >
      {/* <OrbitControls /> */}
      {/* <Lights /> */}
      <Environment preset="city" environmentIntensity={0.14} />
      <ScrollControls pages={pages} damping={0.001}>
        <Scroll>
          {/* <Test3D /> */}
          <Suspense fallback={null}>
            <Monitor
              projectImage={projectImage}
              zoomed={zoomed}
              toggleZoom={() =>
                setZoomed((prev) => (isLargeScreen ? !prev : false))
              }
            />
            <Preload all />
          </Suspense>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <main className="mx-auto max-w-[1008.8px] px-5 sm:px-12">
            <ProjectContext.Provider
              value={{
                zoomed,
                projectImage,
                selectProject: (index) =>
                  setProjectImage({ image: 0, project: index }),
                selectImage: (index) =>
                  setProjectImage((prev) => ({ ...prev, image: index })),
              }}
            >
              <Hero />

              <Skills />

              <Projects />

              <Certificates />
            </ProjectContext.Provider>
          </main>

          <Footer />
        </Scroll>
      </ScrollControls>
    </CanvasWrapper>
  );
}

export default App;
