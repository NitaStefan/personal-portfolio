import { cn } from "@sglara/cn";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect, useState } from "react";

const ProjectImages = ({
  images,
}: {
  images: {
    path: string;
    description: string;
  }[];
}) => {
  const [activeImage, setActiveImage] = useState(1);

  const hasThreeImages = images.length === 3; // else 4

  useEffect(() => {
    setActiveImage(0);
  }, [images]);

  return (
    <>
      <div className="order-1 flex h-30 gap-1 sm:h-28 sm:gap-2 lg:order-2 lg:h-35 lg:w-100">
        <ArrowWrapper
          handleClick={() => setActiveImage((prev) => prev - 1)}
          disabled={activeImage === 0}
          direction="left"
          hide
        />

        {images.map((image, index) => {
          const isActive = activeImage === index;

          return (
            <button
              onClick={() => setActiveImage(index)}
              className={cn(
                "flex basis-0 flex-col items-center gap-2",
                "bg-bg-light border-border rounded-2xl border px-1 py-3 text-[11px] opacity-40",
                "transition-all duration-200 ease-out",
                hasThreeImages ? "grow-2" : "grow",
                isActive &&
                  "grow-3 text-sm font-medium opacity-100 sm:text-base",
                isActive && (hasThreeImages ? "px-3" : "px-2"),
              )}
            >
              <span className="border-border rounded-full border px-2 font-normal">
                {index + 1}
              </span>
              <p className="flex grow items-center">{image.description}</p>
            </button>
          );
        })}

        <div className="flex flex-col gap-1">
          <ArrowWrapper
            handleClick={() => setActiveImage((prev) => prev + 1)}
            disabled={activeImage === images.length - 1}
            direction="right"
          />
          <ArrowWrapper
            handleClick={() => setActiveImage((prev) => prev - 1)}
            disabled={activeImage === 0}
            direction="left"
          />
        </div>
      </div>
    </>
  );
};

const ArrowWrapper = ({
  handleClick,
  disabled,
  direction,
  hide = false,
}: {
  handleClick: () => void;
  disabled: boolean;
  direction: "left" | "right";
  hide?: boolean;
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "bg-bg-light border-border flex grow items-center rounded-2xl border p-2",
        disabled && "cursor-default opacity-40",
        direction === "left" &&
          (hide ? "xs:block hidden grow-0" : "xs:hidden block"),
      )}
    >
      {direction === "left" ? <ArrowBigLeft /> : <ArrowBigRight />}
    </button>
  );
};

export default ProjectImages;
