import { useState } from "react";
import { PAGES_HEIGHTS, projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import Feature from "./Feature";
import ProjectHeading from "./ProjectHeading";
import ProjectSelection from "./ProjectSelection";
import ProjectImages from "./ProjectImages";
import { useMediaQuery } from "@react-hook/media-query";

const Projects = () => {
  const [projectNo, setProjectNo] = useState(1);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const currProject = projects[projectNo];

  const sectionHeight = isLargeScreen
    ? PAGES_HEIGHTS.PROJECTS.LG
    : PAGES_HEIGHTS.PROJECTS.MAX_LG;

  return (
    <>
      <SectionHeading text="Projects" />
      <section style={{ height: `${sectionHeight}px` }} className="">
        <ProjectHeading
          title={currProject.title}
          subtitle={currProject.subtitle}
        />

        <div className="mt-110 flex flex-col gap-8 lg:mt-20">
          <div className="order-2 grid grid-cols-2 flex-col gap-2 text-sm sm:text-base lg:order-1 lg:flex lg:w-100">
            {currProject.features.map((feature) => (
              <Feature feature={feature} />
            ))}
          </div>

          <ProjectImages images={currProject.images} />

          <ProjectSelection
            no={projectNo}
            handleSelect={(index) => setProjectNo(index)}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
