import { PAGES_HEIGHTS } from "./constants";

export const getTotalContentHeightInPx = (
  isLargeScreen: boolean,
  isSmallScreen: boolean,
) => {
  const height =
    getSkillsSectionHeight(isLargeScreen) + // Skills
    getProjectsSectionHeight(isLargeScreen, isSmallScreen) + // Projects
    getCertificatesSectionHeight(isLargeScreen) + // Certificates
    PAGES_HEIGHTS.FOOTER; // Footer

  return height;
};

export const getProjectsSectionHeight = (
  isLargeScreen: boolean,
  isSmallScreen: boolean,
) => {
  return isLargeScreen
    ? PAGES_HEIGHTS.PROJECTS.LG
    : isSmallScreen
      ? PAGES_HEIGHTS.PROJECTS.SM
      : PAGES_HEIGHTS.PROJECTS.MAX_SM;
};

export const getCertificatesSectionHeight = (isLargeScreen: boolean) => {
  return isLargeScreen
    ? PAGES_HEIGHTS.CERTIFICATES.LG
    : PAGES_HEIGHTS.CERTIFICATES.MAX_LG;
};

export const getSkillsSectionHeight = (isLargeScreen: boolean) => {
  return isLargeScreen ? PAGES_HEIGHTS.SKILLS.LG : PAGES_HEIGHTS.SKILLS.MAX_LG;
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
