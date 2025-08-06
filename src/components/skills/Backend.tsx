import TechLogo from "./TechLogo";

const Backend = () => {
  return (
    <div className="bg-bg-light border-border bg-gradient-skills relative col-span-3 rounded-2xl border p-3 lg:col-span-1">
      <h2 className="bento-title">Backend</h2>
      <div className="pt-10">
        <div className="flex justify-around">
          <TechLogo name="Java">
            <img
              src={`/logo/java.svg`}
              className="absolute"
              alt="java"
              width={48}
              height={48}
            />
          </TechLogo>
          <TechLogo name="Spring Boot">
            <img
              src={`/logo/spring-boot.svg`}
              className="absolute"
              alt="spring-boot"
              width={48}
              height={48}
            />
          </TechLogo>
          <TechLogo name="SQL">
            <img
              src={`/logo/sql.svg`}
              className="absolute"
              alt="sql"
              width={46}
              height={46}
            />
          </TechLogo>
        </div>
        <div className="grid grid-cols-2 gap-1 pt-6 text-sm lg:pt-10 lg:font-medium">
          <p className="border-border rounded-sm border p-1 text-center">
            RESTful APIs
          </p>
          <p className="border-border rounded-sm border p-1 text-center">
            Auth & Security
          </p>
          <p className="border-border rounded-sm border p-1 text-center">ORM</p>
          <p className="border-border rounded-sm border p-1 text-center">
            Layered Architecture
          </p>
        </div>
      </div>
    </div>
  );
};

export default Backend;
