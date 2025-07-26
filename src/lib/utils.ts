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
