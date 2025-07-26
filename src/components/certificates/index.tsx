import { PAGES_HEIGHTS } from "../../lib/constants";
import SectionHeading from "../SectionHeading";

const Certificates = () => {
  return (
    <>
      <section
        style={{ height: PAGES_HEIGHTS.CERTIFICATES }}
        className="identify"
      >
        <SectionHeading text="Certificates" />
      </section>
    </>
  );
};

export default Certificates;
