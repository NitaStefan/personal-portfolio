import { PAGES_HEIGHTS, projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import Feature from "./Feature";
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

        <div className="mt-80 flex flex-col gap-8 sm:mt-110 lg:mt-20">
          <div className="order-2 grid grid-cols-2 flex-col gap-2 text-sm sm:text-base lg:order-1 lg:flex lg:w-100">
            {currProject.features.map((feature) => (
              <Feature feature={feature} />
            ))}
          </div>

          <ProjectImages images={currProject.images} {...rest} />

          <ProjectSelection no={projectNo} handleSelect={handleSelect} />
        </div>
      </section>
    </>
  );
};

export default Projects;
