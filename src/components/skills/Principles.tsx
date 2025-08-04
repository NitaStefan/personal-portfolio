const Principles = () => {
  return (
    <div className="col-span-2 lg:col-span-1 lg:row-span-2">
      <div className="bg-bg-light border-border bg-gradient-skills flex h-full flex-col gap-3 rounded-2xl border p-3 text-sm lg:gap-5">
        <h2 className="pb-1 text-sm font-semibold lg:text-base">
          Engineering Essentials
        </h2>
        <div className="xs:text-sm flex grow flex-col justify-between gap-1 text-xs lg:font-medium">
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
    </div>
  );
};

export default Principles;
