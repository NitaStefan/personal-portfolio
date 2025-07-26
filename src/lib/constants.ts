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
    ],
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    images: [
      {
        path: "/example/peak-planner.png",
        description: "Visually Appealing Design",
      },
      {
        path: "/example/peak-planner.png",
        description: "Simple Navigation Controls",
      },
      {
        path: "/example/peak-planner.png",
        description: "Some Final Step Description",
      },
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
    features: [
      "Intuitive Schedule Display",
      "Flexible Goal-Activity Linking",
      "Highly Customizable & Versatile",
      "JWT Authentication Filter",
    ],
    images: [
      { path: "/example/peak-planner.png", description: "Highly Diverse" },
      {
        path: "/example/peak-planner.png",
        description: "Visually Appealing Design",
      },
      {
        path: "/example/peak-planner.png",
        description: "Simple Navigation Controls",
      },
      {
        path: "/example/peak-planner.png",
        description: "Some Final Step Description",
      },
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
    features: [
      "Real-Time Surface Computation",
      "Interactive Surface Exploration",
      "NURBS-Based Modeling",
      "Precise Geometric Representation",
    ],
    images: [
      { path: "/example/peak-planner.png", description: "Highly Diverse" },
      {
        path: "/example/peak-planner.png",
        description: "Visually Appealing Design",
      },
      {
        path: "/example/peak-planner.png",
        description: "Simple Navigation Controls",
      },
      {
        path: "/example/peak-planner.png",
        description: "Some Final Step Description",
      },
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
      { path: "/example/peak-planner.png", description: "Highly Diverse" },
      {
        path: "/example/peak-planner.png",
        description: "Visually Appealing Design",
      },
      {
        path: "/example/peak-planner.png",
        description: "Simple Navigation Controls",
      },
      {
        path: "/example/peak-planner.png",
        description: "Some Final Step Description",
      },
    ],
    features: ["CRUD Operations", "Layered Architecture"],
  },
];
