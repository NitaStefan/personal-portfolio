import TechLogo from "./TechLogo";

const Tools = () => {
  return (
    <div className="bg-bg-light border-border bg-gradient-skills relative rounded-2xl border p-3 lg:col-span-2">
      <h2 className="bento-title whitespace-pre">{"Developer\nTools"}</h2>
      <div className="grid h-full w-full grid-cols-2 items-center justify-around gap-4 pt-13 lg:flex lg:pt-0 lg:pl-20">
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
