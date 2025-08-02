import SectionHeading from "../SectionHeading";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Tools from "./Tools";
import Principles from "./Principles";
import { useMediaQuery } from "@react-hook/media-query";
import { getSkillsSectionHeight } from "../../lib/utils";

const Skills = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <section style={{ height: getSkillsSectionHeight(isLargeScreen) }}>
      <SectionHeading text="Skills" />

      <div className="grid grid-cols-[2fr_2fr_2fr] gap-3 pt-30 lg:grid-cols-[2fr_2fr_1.2fr]">
        <Frontend />

        <Backend />

        <Principles />

        <Tools />
      </div>
    </section>
  );
};

export default Skills;
