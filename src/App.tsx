import {
  Environment,
  OrbitControls,
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
import Test3D from "./components/projects/3d/Test3D";

function App() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const pages =
    1.5 + getTotalContentHeightInPx(isLargeScreen) / window.innerHeight; // hero + the rest
  // const pages =
  //   1.3 + getTotalContentHeightInPx(isLargeScreen) / window.screen.height; // hero + the rest

  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      {/* <OrbitControls /> */}
      {/* <Lights /> */}
      <Environment preset="city" environmentIntensity={0.15} />

      <ScrollControls pages={pages} damping={0.001}>
        <Scroll>
          {/* <Test3D /> */}
          <Monitor />
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <main className="mx-auto max-w-5xl px-5 sm:px-12">
            <Hero />

            <Skills />

            <Projects />

            <Certificates />

            {/* TEST */}
            <div className="identify h-25">
              innerHeight: {window.innerHeight} | visualViewport:{" "}
              {window.visualViewport?.height} | totalPixels:{" "}
              {getTotalContentHeightInPx(isLargeScreen)} | window.screen.height:{" "}
              {window.screen.height}
            </div>
          </main>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
