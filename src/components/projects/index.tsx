import { projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import ProjectHeading from "./ProjectHeading";
import ProjectSelection from "./ProjectSelection";
import ProjectImages from "./ProjectImages";
import { useMediaQuery } from "@react-hook/media-query";
import { getProjectsSectionHeight } from "../../lib/utils";

const Projects = ({
  projectImage,
  handleSelect,
  selectImg,
}: {
  projectImage: { project: number; image: number };
  selectImg: (no: number) => void;
  handleSelect: (index: number) => void;
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(min-width: 640px)");

  const sectionHeight = getProjectsSectionHeight(isLargeScreen, isSmallScreen);

  const currProject = projects[projectImage.project];

  return (
    <>
      <SectionHeading text="Projects" />
      <section className="relative" style={{ height: `${sectionHeight}px` }}>
        <ProjectHeading
          title={currProject.title}
          subtitle={currProject.subtitle}
          link={currProject.link}
        />

        <div className="flex flex-col gap-8 pt-80 sm:gap-14 sm:pt-110 lg:pt-24">
          <ProjectSelection
            no={projectImage.project}
            handleSelect={handleSelect}
          />

          <ProjectImages
            projectImage={projectImage}
            images={currProject.images}
            selectImg={selectImg}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
