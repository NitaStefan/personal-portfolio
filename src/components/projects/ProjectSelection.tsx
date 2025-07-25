import { projects } from "../../lib/constants";

const ProjectSelection = ({ no }: { no: number }) => {
  return (
    <div className="bg-bg-light border-border mt-5 flex flex-col items-start gap-2 rounded-xl border p-2 font-medium">
      {projects.map((project, index) => {
        const selected = index === no;

        return (
          <button
            className={`${selected && "bg-bg-select"} flex w-full items-center justify-between rounded-md px-2 py-1`}
          >
            <div className="flex items-center gap-2">
              {project.faviconPath && (
                <img
                  src={project.faviconPath}
                  alt={project.title}
                  width={18}
                  height={18}
                />
              )}
              <span>{project.title}</span>
            </div>

            <div className="flex">
              {project.techStack.map((tech, index) => {
                const z = project.techStack.length + 1 - index;

                return (
                  <img
                    src={`/logo/${tech.name}.svg`}
                    alt={tech.name}
                    width={24}
                    height={24}
                    style={{ zIndex: z }}
                    className={`${selected ? "border-bg-select bg-bg-select" : "border-bg-light bg-bg-light"} ${tech.circle && "rounded-full"} relative -ml-2 border-3`}
                  />
                );
              })}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectSelection;
