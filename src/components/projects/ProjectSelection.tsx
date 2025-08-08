import { cn } from "@sglara/cn";
import { projects } from "../../lib/constants";
import { techLabel } from "../../lib/utils";
import { useContext } from "react";
import { ProjectContext } from "../../App";

const ProjectSelection = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("must be used within a ProjectContext");
  }

  const { zoomed, projectImage, selectProject } = context;

  return (
    <div
      className={cn(
        "bg-bg-light border-border order-2 flex flex-col gap-1 rounded-2xl border p-2 text-sm font-medium transition-opacity duration-300 sm:gap-2 sm:text-base lg:w-110",
        zoomed && "pointer-events-none opacity-0",
      )}
    >
      {projects.map((project, index) => {
        const selected = index === projectImage.project;

        return (
          <button
            onClick={() => selectProject(index)}
            className={cn(
              "hover:border-bg-select-border hover:bg-bg-select group relative flex h-9 w-full items-start rounded-lg border border-transparent px-2 py-1.5 transition-[height,padding] duration-600 ease-out",
              selected && "bg-bg-select border-bg-select-border h-26 py-3",
            )}
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
              <span className={cn(selected && "font-semibold")}>
                {project.title}
                {selected && project.title === "AutoDac" && (
                  <span className="text-text-muted pl-3 text-xs font-normal sm:text-sm">
                    Freelance Client Project
                  </span>
                )}
              </span>
            </div>

            <div
              style={{
                left: selected
                  ? "0"
                  : `calc(100% - ${project.techStack.length * 20}px)`,
              }}
              className={cn(
                "absolute flex transition-[top,left] duration-500",
                selected ? "top-12" : "top-0.5",
              )}
            >
              {project.techStack.map((tech, index) => {
                const z = project.techStack.length + 1 - index;

                return (
                  <img
                    src={`/logo/${tech.name}.svg`}
                    alt={tech.name}
                    width={30}
                    height={30}
                    style={{ zIndex: z }}
                    className={cn(
                      "group-hover:bg-bg-select group-hover:border-bg-select -ml-2.5 rounded-md border-4 transition-[margin] duration-600",
                      selected
                        ? "border-bg-select/0 bg-bg-select/0 xs:ml-3 ml-2 first:ml-1 sm:ml-6"
                        : "border-bg-light bg-bg-light",
                      tech.circle && "rounded-full",
                    )}
                  />
                );
              })}
            </div>
            <div
              className={cn(
                "pointer-events-none absolute top-19.5 left-0 flex w-screen transition-opacity",
                selected
                  ? "opacity-100 delay-300 duration-600"
                  : "opacity-0 duration-10",
              )}
            >
              {project.techStack.map((tech) => (
                <p className="text-text-muted xs:ml-3 ml-2 flex w-7.5 justify-center text-[6px] font-semibold whitespace-pre first:ml-1 sm:ml-6 sm:text-[8px]">
                  {techLabel(tech.name)}
                </p>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectSelection;
