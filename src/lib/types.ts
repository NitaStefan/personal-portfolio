export type Project = {
  title: ProjectTitle;
  subtitle: string;
  techStack: { name: string; circle: boolean }[];
  features: string[];
  faviconPath?: string;
  link?: string;
};

export type ProjectTitle =
  | "AutoDac"
  | "Peak Planner"
  | "NURBS Surface Visualizer"
  | "Hospital Appointments Manager";
