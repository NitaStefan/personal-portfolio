const Principles = () => {
  return (
    <div className="bg-bg-light border-border bg-gradient-skills relative col-span-2 h-full rounded-2xl border p-3 text-sm lg:col-span-1 lg:row-span-2 lg:gap-5">
      <h2 className="bento-title">Engineering Essentials</h2>
      <div className="xs:text-sm flex h-full grow flex-col justify-between gap-1 pt-9 text-xs sm:pt-12 lg:font-medium">
        <p className="border-border rounded-sm border p-1 text-center">
          Object-Oriented Programming
        </p>
        <p className="border-border rounded-sm border p-1 text-center">
          Data Structures & Algorithms
        </p>
        <p className="border-border rounded-sm border p-1 text-center">
          Design Patterns
        </p>
        <p className="border-border rounded-sm border p-1 text-center">
          SOLID Principles
        </p>
        <p className="border-border rounded-sm border p-1 text-center">
          Operating Systems
        </p>
      </div>
    </div>
  );
};

export default Principles;
