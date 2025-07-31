import { PAGES_HEIGHTS, projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import ProjectHeading from "./ProjectHeading";
import ProjectSelection from "./ProjectSelection";
import ProjectImages from "./ProjectImages";
import { useMediaQuery } from "@react-hook/media-query";

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

  const currProject = projects[projectNo];

  const sectionHeight = isLargeScreen
    ? PAGES_HEIGHTS.PROJECTS.LG
    : PAGES_HEIGHTS.PROJECTS.MAX_LG;

  return (
    <>
      <SectionHeading text="Projects" />
      <section style={{ height: `${sectionHeight}px` }}>
        <ProjectHeading
          title={currProject.title}
          subtitle={currProject.subtitle}
          link={currProject.link}
        />

        <div className="mt-80 flex flex-col gap-8 sm:mt-110 sm:gap-14 lg:mt-32">
          <ProjectSelection no={projectNo} handleSelect={handleSelect} />

          <ProjectImages images={currProject.images} {...rest} />
        </div>
      </section>
    </>
  );
};

export default Projects;
