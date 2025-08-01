import { cn } from "@sglara/cn";

const CertificatePage = ({ left = false }: { left?: boolean }) => {
  return (
    <div
      className={cn(
        "border-border from-bg-light-accent to-bg-light relative h-42 w-28 border to-75%",
        left
          ? "rotate-y-30 rounded-l-lg bg-linear-to-l"
          : "-rotate-y-30 rounded-r-lg bg-linear-to-r",
      )}
    >
      {left && (
        <>
          <img
            className="absolute top-1/2 w-full -translate-y-1/2"
            src="/certificates/leaves.svg"
            alt="certificate-leaves"
          />
          <img
            className="absolute -top-3.5 left-1/2 -translate-x-1/2"
            src="/certificates/badge.svg"
            alt="certificate-badge"
            width={26}
            height="auto"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/logo/aws.svg"
            alt="certificate-aws"
            width={70}
            height="auto"
          />
        </>
      )}
      <img
        className="absolute top-1 right-1"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={24}
        height="auto"
      />
      <img
        className="absolute right-1 bottom-1 rotate-90"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={24}
        height="auto"
      />
      <img
        className="absolute top-1 left-1 -rotate-90"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={24}
        height="auto"
      />
      <img
        className="absolute bottom-1 left-1 rotate-180"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={24}
        height="auto"
      />
    </div>
  );
};

export default CertificatePage;
