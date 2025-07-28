const ProjectHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="pt-30">
      <div className="from-bg via-primary to-bg mb-2 h-0.5 bg-gradient-to-r" />
      <h2 className="text-primary text-center text-xl font-bold">{title}</h2>
      <p className="text-text-muted text-center font-sans text-sm italic sm:text-base">
        {subtitle}
      </p>
      <div className="from-bg via-primary to-bg mt-2 h-0.5 bg-gradient-to-r" />
    </div>
  );
};

export default ProjectHeading;
