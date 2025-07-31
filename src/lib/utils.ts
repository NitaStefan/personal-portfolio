import { PAGES_HEIGHTS } from "./constants";

export const getTotalContentHeightInPx = (isLargeScreen: boolean) => {
  const height =
    PAGES_HEIGHTS.SKILLS + // Skills
    (isLargeScreen
      ? PAGES_HEIGHTS.PROJECTS.LG
      : PAGES_HEIGHTS.PROJECTS.MAX_LG) + // Projects
    PAGES_HEIGHTS.CERTIFICATES; // Certificates

  return height;
};

export const techLabel = (techTag: string): string => {
  const map: Record<string, string> = {
    nextjs: "Next.js",
    reactjs: "React.js",
    "react-hook-form": "React Hook\nForm",
    threejs: "Three.js",
    "material-ui": "Material UI",
    shadcn: "shadcn/ui",
    typescript: "TypeScript",
    java: "Java",
    javafx: "JavaFX",
    zod: "Zod",
    "spring-boot": "Spring Boot",
    supabase: "Supabase",
    mysql: "MySQL",
    sqlite: "SQLite",
    jdbc: "JDBC",
    mathjax: "MathJax",
    tailwindcss: "Tailwind CSS",
    facebook: "Graph API",
  };

  return map[techTag] || techTag;
};
