import { useRef } from "react";
import { PAGES_HEIGHTS } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import CertificatePage from "./CertificatePage";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Certificates = () => {
  const scroll = useScroll();

  const certifRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (certifRef.current) {
      //TODO: tweak values
      const yPercent = scroll.offset * 100 - 60;
      certifRef.current.style.perspectiveOrigin = `50% ${yPercent * 2.4}%`;
    }
  });

  // TEST SCROLL
  // const [progress, setProgress] = useState(0);

  // // Track scroll inside the render loop
  // useFrame(() => {
  //   // normalized value between 0 and 1
  //   const offset = scroll.offset;
  //   setProgress(Math.round(offset * 100));
  // });

  return (
    <>
      <section
        style={{ height: PAGES_HEIGHTS.CERTIFICATES }}
        className="identify"
      >
        <SectionHeading text="Certificates" />
        {/* <p className="pt-20 text-5xl">{progress}</p> */}
        <div
          ref={certifRef}
          className="flex justify-center pt-30 perspective-[150px]"
        >
          <CertificatePage left />
          <CertificatePage />
        </div>
      </section>
    </>
  );
};

export default Certificates;
