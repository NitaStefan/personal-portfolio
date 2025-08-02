import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "AutoDac",
    subtitle: "Used Car Sales, Dismantling & Towing Platform",
    techStack: [
      { name: "nextjs", circle: true },
      { name: "typescript", circle: false },
      { name: "tailwindcss", circle: true },
      { name: "shadcn", circle: true },
      { name: "supabase", circle: true },
      { name: "facebook", circle: true },
    ],
    images: [
      "Clean Layout",
      "Direct Customer Engagement",
      "Facebook Page Auto-Post",
    ],
    faviconPath: "/projects-ico/autodac.svg",
    link: "https://www.autodac.ro/masini",
  },
  {
    title: "Peak Planner",
    subtitle: "Scheduling & Goal-Tracking Application",
    techStack: [
      { name: "nextjs", circle: true },
      { name: "typescript", circle: false },
      { name: "tailwindcss", circle: true },
      { name: "shadcn", circle: true },

      { name: "react-hook-form", circle: false },
      { name: "zod", circle: true },
      { name: "spring-boot", circle: true },
      { name: "mysql", circle: true },
    ],
    images: [
      "Quick Activity Check",
      "Progressive Goal Steps",
      "Goal-Schedule Integration",
      "Unified Planner View",
    ],
    faviconPath: "/projects-ico/peak-planner.svg",
    link: "https://peak-planner-frontend.vercel.app/",
  },
  {
    title: "NURBS Surface Visualizer",
    subtitle: "Interactive 3D visualization tool for NURBS surfaces",
    techStack: [
      { name: "reactjs", circle: true },
      { name: "threejs", circle: true },
      { name: "material-ui", circle: true },
      { name: "mathjax", circle: false },
    ],
    images: [
      "360° Detailed View",
      "Dynamic Surface Adjustments",
      "Common Surface Types as NURBS",
    ],
    faviconPath: "/projects-ico/nurbs.svg",
    link: "https://nitastefan.github.io/NURBS-Visualizer/",
  },
  {
    title: "Hospital Appointments Manager",
    subtitle: "Application for managing hospital appointments",
    techStack: [
      { name: "javafx", circle: true },
      { name: "sqlite", circle: true },
      { name: "jdbc", circle: false },
    ],
    images: [
      "CRUD for Patients & Appointments",
      "SQLite Integrity Checks",
      "Simple Report Insights",
    ],
  },
];

export const projectTags = ["autodac", "peak-planner", "nurbs", "hospital"];

// PAGES HEIGHTS
export const PAGES_HEIGHTS = {
  SKILLS: { LG: 500, MAX_LG: 850 },
  PROJECTS: { MAX_SM: 900, SM: 1100, LG: 820 },
  CERTIFICATES: { LG: 450, MAX_LG: 520 },
  FOOTER: 200,
};
