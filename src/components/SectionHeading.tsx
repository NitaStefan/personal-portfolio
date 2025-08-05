import { Award, CodeXml, FolderGit2 } from "lucide-react";

const SectionHeading = ({ text }: { text: string }) => {
  return (
    <h1 className="from-bg-dark to-bg border-text-muted absolute left-1/2 w-full max-w-5xl -translate-x-1/2 translate-y-5 border-l-4 bg-linear-to-r from-15% to-90% py-2 pl-4 text-2xl font-medium sm:pl-5">
      {text === "Certificates" && (
        <Award strokeWidth={1.75} size={26} className="mr-3 mb-1 inline" />
      )}
      {text === "Projects" && (
        <FolderGit2 strokeWidth={1.75} size={26} className="mr-3 mb-1 inline" />
      )}
      {text === "Skills" && (
        <CodeXml strokeWidth={1.75} size={26} className="mr-3 mb-1 inline" />
      )}
      {text}
    </h1>
  );
};

export default SectionHeading;
