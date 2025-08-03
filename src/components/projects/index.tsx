import { projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import ProjectHeading from "./ProjectHeading";
import ProjectSelection from "./ProjectSelection";
import ProjectImages from "./ProjectImages";
import { useMediaQuery } from "@react-hook/media-query";
import { getProjectsSectionHeight } from "../../lib/utils";

const Projects = ({
  projectNo,
  handleSelect,
  ...rest
}: {
  activeImage: number;
  setImg: (no: number) => void;
  handleSelect: (index: number) => void;
  projectNo: number;
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const sectionHeight = getProjectsSectionHeight(isLargeScreen, isSmallScreen);

  const currProject = projects[projectNo];

  return (
    <>
      <SectionHeading text="Projects" />
      <section className="relative" style={{ height: `${sectionHeight}px` }}>
        <ProjectHeading
          title={currProject.title}
          subtitle={currProject.subtitle}
          link={currProject.link}
        />
        {/* <div className="flex h-80 w-100 items-center">
          <img src="/projects-img/autodac-1.png" width={400} />
        </div> */}
        {/* <div>
          <img
            src="/projects-img/autodac-1.png"
            width={10}
            className="absolute top-110 right-52 opacity-50"
          />
        </div> */}
        {/* <div>
          <img
            src="/projects-img/autodac-1.png"
            width={30}
            className="absolute top-110 left-119 opacity-50"
          />
        </div> */}

        <div className="flex flex-col gap-8 pt-80 sm:gap-14 sm:pt-110 lg:pt-24">
          <ProjectSelection no={projectNo} handleSelect={handleSelect} />

          <ProjectImages images={currProject.images} {...rest} />
        </div>
      </section>
    </>
  );
};

export default Projects;
