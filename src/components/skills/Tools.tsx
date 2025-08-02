import TechLogo from "./TechLogo";

const Tools = () => {
  return (
    <div className="bg-bg-light border-border bg-gradient-skills flex flex-col items-start gap-5 rounded-2xl border p-3 lg:col-span-2 lg:flex-row lg:items-center">
      <h2 className="text-sm font-semibold lg:w-20 lg:text-base">
        Developer Tools
      </h2>
      <div className="xs:pb-2 grid w-full grow grid-cols-2 items-center justify-around gap-4 pb-4 lg:flex lg:pb-0">
        <TechLogo name="Git" sm>
          <img src={`/logo/git.svg`} alt="git" width={40} height={40} />
        </TechLogo>
        <TechLogo name="AWS" sm>
          <img
            src="/logo/aws.svg"
            alt="amazon-web-services"
            width={40}
            height={40}
          />
        </TechLogo>
        <TechLogo name="Supabase" sm>
          <img
            src={`/logo/supabase.svg`}
            alt="supabase"
            width={40}
            height={40}
          />
        </TechLogo>
        <TechLogo name="Postman" sm>
          <img src={`/logo/postman.svg`} alt="postman" width={40} height={40} />
        </TechLogo>
      </div>
    </div>
  );
};

export default Tools;
