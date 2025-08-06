import { Mail, Phone } from "lucide-react";
import { PAGES_HEIGHTS } from "../lib/constants";

const Footer = () => {
  return (
    <footer
      style={{ height: PAGES_HEIGHTS.FOOTER }}
      className="from-bg-dark to-bg bg-gradient-to-t from-90%"
    >
      <div className="mx-auto w-fit pt-26">
        <p className="text-xl">Quick Contact</p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            <a href="mailto:stefannita62@yahoo.com" className="hover:underline">
              <Mail size={16} className="mr-1 inline" /> stefannita62@yahoo.com
            </a>
          </li>
          <li>
            <a href="tel:+40784311008" className="hover:underline">
              <Phone size={16} className="mr-1 inline" /> +40 784 311 008
            </a>
          </li>
        </ul>
      </div>

      <div className="text-text-muted mx-auto w-fit pt-26 text-sm">
        © {new Date().getFullYear()} Ștefan Niță. All rights reserved.
      </div>
      <div className="bg-text-muted mt-2 h-px"></div>
    </footer>
  );
};

export default Footer;
