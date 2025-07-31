import { cn } from "@sglara/cn";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect } from "react";

const ProjectImages = ({
  images,
  activeImage,
  setImg,
}: {
  images: string[];
  activeImage: number;
  setImg: (no: number) => void;
}) => {
  // const hasThreeImages = images.length === 3; // else 4

  useEffect(() => {
    setImg(0);
  }, [images]);

  return (
    <>
      <div className="order-1 flex h-30 gap-1 sm:h-28 sm:gap-2 lg:order-2 lg:h-35 lg:w-110">
        <ArrowWrapper
          handleClick={() => setImg(activeImage - 1)}
          disabled={activeImage === 0}
          direction="left"
          hide
        />

        {images.map((imageDesc, index) => {
          const isActive = activeImage === index;

          return (
            <button
              onClick={() => setImg(index)}
              className={cn(
                "flex flex-1 flex-col items-center gap-1",
                "bg-bg-select border-bg-select-border rounded-2xl border px-1 py-3 text-[11px] text-white opacity-40",
                "transition-all duration-200 ease-out",
                isActive &&
                  "grow-2 text-sm font-medium opacity-85 sm:text-base",
              )}
            >
              <span className="border-bg-select-border flex h-6 w-6 items-center justify-center rounded-full border font-normal">
                {index + 1}
              </span>
              <p className="flex grow items-center">{imageDesc}</p>
            </button>
          );
        })}

        <div className="flex flex-col gap-1">
          <ArrowWrapper
            handleClick={() => setImg(activeImage + 1)}
            disabled={activeImage === images.length - 1}
            direction="right"
          />
          <ArrowWrapper
            handleClick={() => setImg(activeImage - 1)}
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
        "bg-bg-select border-bg-select-border flex grow items-center rounded-2xl border p-2 opacity-85",
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
