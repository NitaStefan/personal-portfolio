import TechLogo from "./TechLogo";

const Frontend = () => {
  return (
    <div className="bg-bg-light border-border bg-gradient-skills relative col-span-3 rounded-2xl border p-3 lg:col-span-1">
      <h2 className="bento-title">Frontend</h2>
      <div className="pt-10">
        <div className="flex justify-around lg:justify-between">
          <TechLogo name={"HTML, CSS &\nJavaScript"} lg>
            <img
              src={`/logo/html-css-js.svg`}
              className="absolute"
              alt="html-css-javascript"
              width={74}
              height={48}
            />
          </TechLogo>

          <TechLogo name="TypeScript">
            <img
              src={`/logo/typescript.svg`}
              className="absolute"
              alt="typeScript"
              width={46}
              height={46}
            />
          </TechLogo>
          <TechLogo name={"React\n(Next.js)"}>
            <img
              src={`/logo/reactjs.svg`}
              className="reactjs"
              alt="nextjs"
              width={48}
              height={48}
            />
            <img
              src={`/logo/nextjs.svg`}
              className="absolute right-0 bottom-0"
              alt="nextjs"
              width={23}
              height={23}
            />
          </TechLogo>
          <TechLogo name={"Tailwind CSS\n(shadcn/ui)"}>
            <img
              src={`/logo/tailwindcss.svg`}
              className="absolute right-0 bottom-0"
              alt="tailwindcss"
              width={48}
              height={48}
            />
            <img
              src={`/logo/shadcn.svg`}
              className="absolute right-0 bottom-0"
              alt="shadcn"
              width={23}
              height={23}
            />
          </TechLogo>
        </div>
        <div className="grid grid-cols-2 gap-1 pt-6 text-sm lg:font-medium">
          <p className="border-border rounded-sm border p-1 text-center">
            Responsive Design
          </p>
          <p className="border-border rounded-sm border p-1 text-center">
            Data Fetching
          </p>
          <p className="border-border rounded-sm border p-1 text-center">
            Rendering Strategies
          </p>
          <p className="border-border rounded-sm border p-1 text-center">
            UI / UX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
