import { projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import Feature from "./Feature";
import ProjectHeading from "./ProjectHeading";
import ProjectSelection from "./ProjectSelection";

const Projects = () => {
  const projectNo = 1;

  const currProject = projects[projectNo];

  return (
    <section className="identify h-200 p-5">
      <SectionHeading text="Projects" />

      <ProjectHeading
        title={currProject.title}
        subtitle={currProject.subtitle}
      />

      <div className="mt-20">
        {currProject.features.map((feature) => (
          <Feature feature={feature} />
        ))}
      </div>

      <ProjectSelection no={projectNo} />
    </section>
  );
};

export default Projects;
