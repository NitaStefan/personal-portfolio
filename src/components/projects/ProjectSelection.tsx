import { projects } from "../../lib/constants";

const ProjectSelection = ({
  no,
  handleSelect,
}: {
  no: number;
  handleSelect: (index: number) => void;
}) => {
  return (
    <div className="bg-bg-light border-border order-3 flex flex-col items-start gap-1 rounded-2xl border p-2 text-sm font-medium sm:gap-2 sm:text-base lg:w-100">
      {projects.map((project, index) => {
        const selected = index === no;

        return (
          <button
            onClick={() => handleSelect(index)}
            className={`${selected && "bg-bg-select border-bg-select-border border"} flex w-full items-center justify-between rounded-lg px-2 py-1`}
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
                    width={30}
                    height={30}
                    style={{ zIndex: z }}
                    className={`${selected ? "border-bg-select bg-bg-select" : "border-bg-light bg-bg-light"} ${tech.circle && "rounded-full"} relative -ml-2.5 border-4`}
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
