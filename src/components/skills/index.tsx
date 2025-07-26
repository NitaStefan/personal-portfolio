import { PAGES_HEIGHTS } from "../../lib/constants";
import SectionHeading from "../SectionHeading";

const Skills = () => {
  return (
    <section
      style={{ height: PAGES_HEIGHTS.SKILLS }}
      className="identify h-100"
    >
      <SectionHeading text="Skills" />
    </section>
  );
};

export default Skills;
