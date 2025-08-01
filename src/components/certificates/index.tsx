import { useRef } from "react";
import SectionHeading from "../SectionHeading";
import CertificatePage from "./CertificatePage";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { cn } from "@sglara/cn";
import { useMediaQuery } from "@react-hook/media-query";
import { getCertificatesSectionHeight } from "../../lib/utils";

const Certificates = () => {
  const scroll = useScroll();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const certifRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (certifRef.current) {
      const yPercent = scroll.offset * 100 - 65;

      for (const child of certifRef.current.children) {
        (child as HTMLElement).style.perspectiveOrigin =
          `50% ${yPercent * (isLargeScreen ? 2.8 : 4)}%`;
      }
    }
  });

  const certificates = [
    {
      issuer: "udemy",
      name: "Figma UI UX Design Essentials",
      url: "https://www.udemy.com/certificate/UC-cce4fbc7-1fb2-4eb6-99fb-6fcfcaf457b1/",
    },

    {
      issuer: "udemy",
      name: "Fundamentals of Operating Systems",
      url: "https://www.udemy.com/certificate/UC-601f5077-3b43-4f77-8f01-aea4bbb3e206/",
    },
    {
      issuer: "aws",
      name: "AWS",
      url: "https://www.credly.com/badges/279efb5e-1304-48cf-aa5b-8857a8299055/public_url",
    },
    {
      issuer: "udemy",
      name: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
      url: "https://www.udemy.com/certificate/UC-55c7b254-bcc2-447f-b88d-e015d5e38367/",
    },
    {
      issuer: "threejs-journey",
      name: "Three.js Journey",
      url: "https://threejs-journey.com/certificate/view/42533",
    },
  ];

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
      <section style={{ height: getCertificatesSectionHeight(isLargeScreen) }}>
        <SectionHeading text="Certificates" />
        {/* <p className="pt-20 text-5xl">{progress}</p> */}

        <div
          ref={certifRef}
          className="relative flex items-center justify-between pt-30"
        >
          {certificates.map((certificate, index) => {
            const mid = Math.floor(certificates.length / 2);
            const size = mid + 1 - Math.abs(index - mid);

            return (
              <a
                href={certificate.url}
                target="_blank"
                className={cn(
                  "group top-60 flex shrink justify-center perspective-[150px] sm:top-80",
                  size === 2 && "absolute lg:static",
                  index === 1 && "left-1/6",
                  index === 3 && "right-1/6",
                )}
              >
                <CertificatePage left size={size} issuer={certificate.issuer} />
                <CertificatePage text={certificate.name} size={size} />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Certificates;
