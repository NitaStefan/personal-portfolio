import { cn } from "@sglara/cn";
import { ExternalLink } from "lucide-react";

const ProjectHeading = ({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link?: string;
}) => {
  const TitleComp = (
    <h2
      className={cn(
        "text-primary flex items-center justify-center gap-2 text-center text-xl font-bold",
        link && "cursor-pointer hover:underline",
      )}
    >
      {title}
      {link && <ExternalLink size={16} />}
    </h2>
  );

  return (
    <div className="pt-24 sm:pt-28">
      <div className="from-bg via-primary to-bg mb-2 h-0.5 bg-gradient-to-r" />
      {link ? (
        <a target="_blank" href={link}>
          {TitleComp}
        </a>
      ) : (
        TitleComp
      )}

      <p className="text-text-muted text-center text-sm italic sm:text-base">
        {subtitle}
      </p>
      <div className="from-bg via-primary to-bg mt-2 h-0.5 bg-gradient-to-r" />
    </div>
  );
};

export default ProjectHeading;
