import { GraduationCap } from "lucide-react";
import { education } from "../../lib/constants";

const Education = ({ type }: { type: "bachelor" | "master" }) => {
  const educationInfo = education[type];

  const graduationDate = new Date(educationInfo.graduationDate);
  const now = new Date();

  const isFuture = graduationDate > now;

  return (
    <div className="flex w-full items-center gap-2 sm:w-118">
      <div className="relative -z-20 flex h-38 flex-col items-center gap-1 sm:h-28">
        <GraduationCap size={48} strokeWidth={1.25} className="text-border" />
        <div className="from-border to-bg h-full w-[2px] rounded-full bg-linear-to-b from-25%" />
      </div>
      <div className="flex grow justify-between">
        <div>
          <p className="font-semibold sm:font-medium">
            {educationInfo.university}
          </p>

          <p className="text-text-muted pb-1 text-xs leading-4 sm:hidden">
            {educationInfo.location}
          </p>

          <p className="text-primary text-base italic sm:text-sm">
            {educationInfo.degree}
          </p>
          <p className="block pt-2 text-sm sm:hidden">
            <span className="text-text-muted text-xs sm:text-sm">
              {isFuture ? "Expected Graduation: " : "Graduated: "}
            </span>
            <span className="sm:font-medium">
              {educationInfo.graduationDate}
            </span>
          </p>
          <p className="text-text-muted text-sm sm:pt-2 sm:text-xs">
            <span className="text-xs">Programme: </span>
            <span className="text-text sm:text-text-muted sm:font-medium">
              {educationInfo.programme}
            </span>
          </p>
        </div>
        <div className="hidden flex-col items-end sm:flex">
          <p className="text-sm/6">
            <span className="text-text-muted">
              {isFuture ? "Expected Graduation: " : "Graduated: "}
            </span>
            <span className="font-medium">{educationInfo.graduationDate}</span>
          </p>
          <p className="text-sm">{educationInfo.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
