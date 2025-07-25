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
import Lights from "./components/Lights";

function App() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <Lights />
      <Environment preset="city" environmentIntensity={0.1} />

      {/* <ambientLight intensity={} /> */}

      <ScrollControls pages={3} damping={0.001}>
        <Scroll>
          {/* <mesh>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh> */}
          {/* <mesh position={[0, -2, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
          </mesh> */}

          {/* <Monitor /> */}
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <main className="mx-auto max-w-5xl px-6 sm:px-12">
            <Hero />

            <Skills />

            <Projects />

            <Certificates />
          </main>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
