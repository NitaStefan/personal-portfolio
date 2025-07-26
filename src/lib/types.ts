type Image = { path: string; description: string };
type ThreeOrFourImages = [Image, Image, Image] | [Image, Image, Image, Image];

export type Project = {
  title: ProjectTitle;
  subtitle: string;
  techStack: { name: string; circle: boolean }[];
  features: string[];
  images: ThreeOrFourImages;
  faviconPath?: string;
  link?: string;
};

export type ProjectTitle =
  | "AutoDac"
  | "Peak Planner"
  | "NURBS Surface Visualizer"
  | "Hospital Appointments Manager";
