import { useState } from "react";
import { projects } from "../../lib/constants";
import SectionHeading from "../SectionHeading";
import Feature from "./Feature";
import ProjectHeading from "./ProjectHeading";
import ProjectSelection from "./ProjectSelection";
import ProjectImages from "./ProjectImages";

const Projects = () => {
  const [projectNo, setProjectNo] = useState(1);

  const currProject = projects[projectNo];

  return (
    <section className="identify relative h-200 py-5">
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

      <div className="absolute bottom-10 flex flex-col gap-8">
        <ProjectImages images={currProject.images} />

        <ProjectSelection
          no={projectNo}
          handleSelect={(index) => setProjectNo(index)}
        />
      </div>
    </section>
  );
};

export default Projects;
