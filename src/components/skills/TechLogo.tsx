import { cn } from "@sglara/cn";
import { type ReactNode } from "react";

const TechLogo = ({
  name,
  lg = false,
  sm = false,
  children,
}: {
  name: string;
  lg?: boolean;
  sm?: boolean;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center",
          lg && "w-18.5",
          sm && "h-7 w-7 lg:h-10 lg:w-10",
        )}
      >
        {children}
      </div>
      <p className="text-center text-[10px] whitespace-pre lg:text-xs">
        {name}
      </p>
    </div>
  );
};

export default TechLogo;
