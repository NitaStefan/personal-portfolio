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
    <section style={{ height: `${sectionHeight}px` }}>
      <SectionHeading text="Projects" />
      <ProjectHeading
        title={currProject.title}
        subtitle={currProject.subtitle}
        link={currProject.link}
      />

      <div className="mt-80 flex flex-col gap-8 sm:mt-110 sm:gap-14 lg:mt-24">
        <ProjectSelection no={projectNo} handleSelect={handleSelect} />

        <ProjectImages images={currProject.images} {...rest} />
      </div>
    </section>
  );
};

export default Projects;
