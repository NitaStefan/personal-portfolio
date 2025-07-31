type ThreeOrFourImages =
  | [string, string, string]
  | [string, string, string, string];

export type Project = {
  title: ProjectTitle;
  subtitle: string;
  techStack: { name: string; circle: boolean }[];
  images: ThreeOrFourImages;
  faviconPath?: string;
  link?: string;
};

export type ProjectTitle =
  | "AutoDac"
  | "Peak Planner"
  | "NURBS Surface Visualizer"
  | "Hospital Appointments Manager";
