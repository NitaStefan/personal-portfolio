import { useMediaQuery } from "@react-hook/media-query";
import { cn } from "@sglara/cn";

const CertificatePage = ({
  issuer,
  left = false,
  text,
  size,
}: {
  issuer?: string;
  left?: boolean;
  text?: string;
  size: number;
}) => {
  const isSmScreen = useMediaQuery("(min-width: 640px)");

  const badgeSize = size === 1 ? 13 : size === 2 ? 18 : 24;
  const cornerSize = size === 1 ? 12 : size === 2 ? 16 : 22;
  const issuerSize = size === 1 ? 36 : size === 2 ? 48 : 60;

  return (
    <div
      className={cn(
        "border-border from-bg-light-accent to-bg-light relative rotate-x-2 border to-75% transition-transform duration-250 sm:rotate-x-0",
        left
          ? "translate-x-[7%] rotate-y-30 rounded-l-[5%] bg-linear-to-l group-hover:translate-x-[2%] group-hover:rotate-y-15 group-hover:to-82%"
          : "-translate-x-[7%] -rotate-y-30 rounded-r-[5%] bg-linear-to-r group-hover:-translate-x-[2%] group-hover:-rotate-y-15 group-hover:to-82%",
        size === 1 && "h-18 w-12 sm:h-24 sm:w-16",
        size === 2 && "h-21 w-14 sm:h-30 sm:w-20",
        size === 3 && "h-24 w-16 sm:h-36 sm:w-24",
      )}
    >
      {left && (
        <>
          <img
            className="absolute top-1/2 right-[2%] w-full -translate-y-1/2"
            src="/certificates/leaves.svg"
            alt="certificate-leaves"
          />
          <img
            className="absolute left-1/2 -translate-x-1/2 -translate-y-[34%]"
            src="/certificates/badge.svg"
            alt="certificate-badge"
            width={isSmScreen ? badgeSize : badgeSize - 4}
            height="auto"
          />
          <img
            className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2"
            src={`/logo/${issuer}.svg`}
            alt="certificate-aws"
            width={isSmScreen ? issuerSize : issuerSize - size * 7}
            height="auto"
          />
        </>
      )}

      {/* CLOUD PRACTITIONER */}
      {!left && text && text === "AWS" ? (
        <img
          className="absolute top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2"
          src="/certificates/ccp-badge.svg"
          alt="certificate-aws"
          width={isSmScreen ? 72 : 48}
          height="auto"
        />
      ) : (
        <p
          className={cn(
            "absolute top-1/2 w-full -translate-y-1/2 text-center",
            size === 1 && "text-[7px] sm:text-[9px]",
            size === 2 && "text-[7px] sm:text-[11px]",
          )}
        >
          {text}
        </p>
      )}

      {/* CORNERS */}
      <img
        className="absolute top-[1.6%] right-[1.6%]"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={cornerSize}
        height="auto"
      />
      <img
        className="absolute right-[1.6%] bottom-[1.6%] rotate-90"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={cornerSize}
        height="auto"
      />
      <img
        className="absolute top-[1.6%] left-[1.6%] -rotate-90"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={cornerSize}
        height="auto"
      />
      <img
        className="absolute bottom-[1.6%] left-[1.6%] rotate-180"
        src="/certificates/page-corner.svg"
        alt="certificate-corner"
        width={cornerSize}
        height="auto"
      />
    </div>
  );
};

export default CertificatePage;
