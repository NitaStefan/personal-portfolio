import { PAGES_HEIGHTS } from "../lib/constants";

const Footer = () => {
  return (
    <footer
      style={{ height: PAGES_HEIGHTS.FOOTER }}
      className="bg-bg-dark border-border border-b-4"
    >
      <p className="text-center text-2xl">footer</p>
    </footer>
  );
};

export default Footer;
