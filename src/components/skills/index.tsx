import { PAGES_HEIGHTS } from "../../lib/constants";
import SectionHeading from "../SectionHeading";

const Skills = () => {
  return (
    <section style={{ height: PAGES_HEIGHTS.SKILLS }} className="h-100">
      <SectionHeading text="Skills" />
      <div className="grid h-60 grid-cols-1 gap-3 pt-30 lg:grid-cols-3">
        <div className="bg-bg-light border-border bg-gradient-skills rounded-2xl border p-6">
          <img src={`/logo/nextjs.svg`} alt="nextjs" width={52} height={52} />
        </div>
        <div className="bg-bg-light border-border bg-gradient-skills rounded-2xl border p-6">
          <img src={`/logo/nextjs.svg`} alt="nextjs" width={52} height={52} />
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          <div className="bg-bg-light border-border bg-gradient-skills rounded-2xl border p-6">
            <img src={`/logo/nextjs.svg`} alt="nextjs" width={52} height={52} />
          </div>
          <div className="bg-bg-light border-border bg-gradient-skills rounded-2xl border p-6">
            <img src={`/logo/nextjs.svg`} alt="nextjs" width={52} height={52} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
