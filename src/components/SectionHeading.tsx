const SectionHeading = ({ text }: { text: string }) => {
  return (
    <h1 className="from-bg-dark to-bg border-text-muted absolute left-1/2 w-full max-w-5xl -translate-x-1/2 translate-y-5 border-l-4 bg-linear-to-r from-15% to-90% py-2 pl-5 text-2xl font-medium">
      {text}
    </h1>
  );
};

export default SectionHeading;
