import { MapPin } from "lucide-react";
import Education from "./Education";
import Wave from "./Wave";

const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <Wave />

      <div className="bg-bg/60 border-border flex flex-col items-center rounded-full border p-6">
        <h1 className="px-4 text-4xl font-medium sm:text-5xl">Ștefan Niță</h1>
        <h2 className="text-primary pt-1 text-xl italic">
          Full-Stack Developer
        </h2>
      </div>
      <p className="flex items-center gap-1 pt-2 text-sm sm:text-base">
        <MapPin size={18} strokeWidth={1.5} />
        Bucharest, Romania
      </p>

      {/* SOCIALS */}
      <div className="text-text-muted flex gap-7 pt-6 text-xs sm:gap-8 sm:pt-8">
        <a
          className="hover:text-text flex w-12 flex-col items-center gap-1 hover:font-medium"
          href="https://github.com/NitaStefan"
          target="_blank"
        >
          <img src={`/logo/github.svg`} alt="github" width={28} height={28} />
          <p>GitHub</p>
        </a>

        <a
          className="hover:text-text flex w-12 flex-col items-center gap-1 hover:font-medium"
          href="https://www.linkedin.com/in/stefan-nita-12a656267/"
          target="_blank"
        >
          <img
            src={`/logo/linkedin.svg`}
            alt="linkedin"
            width={28}
            height={28}
          />
          <p>LinkedIn</p>
        </a>

        <a
          className="hover:text-text flex w-12 flex-col items-center gap-1 hover:font-medium"
          href="/Ștefan-Niță-Resume-2025.pdf"
          target="_blank"
        >
          <img src={`/logo/resume.svg`} alt="resume" width={28} height={28} />
          <p>Resume</p>
        </a>
      </div>

      <div className="flex flex-col pt-6 sm:gap-2 sm:pt-8">
        <Education type="master" />
        <Education type="bachelor" />
      </div>
    </section>
  );
};

export default Hero;
