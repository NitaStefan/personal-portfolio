export type Project = {
  title: ProjectTitle;
  subtitle: string;
  techStack: string[];
  features: string[];
  faviconPath?: string;
  link?: string;
};

export type ProjectTitle =
  | "AutoDac"
  | "Peak Planner"
  | "NURBS Surface Visualizer"
  | "Hospital Appointments Manager";
