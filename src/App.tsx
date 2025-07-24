import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Hero from "./components/hero";

function App() {
  return (
    <Canvas>
      {/* <OrbitControls enableZoom={false} /> */}
      {/* <ambientLight intensity={Math.PI / 2} /> */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      {/* Setup scroll with 3 pages */}

      <ScrollControls pages={3} damping={0.03}>
        {/* 3D content that scrolls */}

        {/* <Scroll>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
          <mesh position={[0, -2, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
          </mesh>
        </Scroll> */}

        <Scroll html style={{ width: "100%" }}>
          <main className="mx-auto max-w-5xl px-6 sm:px-12">
            <Hero />

            <section className="identify h-100 p-5">
              <h1 className="text-5xl font-bold">Welcome to Page 2</h1>
            </section>

            <section className="identify h-120 p-5">
              <h1 className="text-5xl font-bold">Welcome to Page 3</h1>
            </section>
          </main>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
