import { cn } from "@sglara/cn";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

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
      <div className="mt-10 flex h-30 w-100 gap-2">
        <ArrowWrapper
          handleClick={() => setActiveImage((prev) => prev - 1)}
          disabled={activeImage === 0}
        >
          <ArrowBigLeft />
        </ArrowWrapper>

        {images.map((image, index) => {
          const isActive = activeImage === index;

          return (
            <button
              onClick={() => setActiveImage(index)}
              className={cn(
                "flex basis-0 flex-col items-center gap-2",
                "bg-bg-light border-border rounded-2xl border p-1 py-3 text-[10px] opacity-40",
                "transition-all duration-250 ease-out",
                hasThreeImages ? "grow-2" : "grow",
                isActive && "grow-3 text-sm font-medium opacity-100",
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

        <ArrowWrapper
          handleClick={() => setActiveImage((prev) => prev + 1)}
          disabled={activeImage === images.length - 1}
        >
          <ArrowBigRight />
        </ArrowWrapper>
      </div>
    </>
  );
};

const ArrowWrapper = ({
  children,
  handleClick,
  disabled,
}: {
  children: ReactNode;
  handleClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "bg-bg-light border-border flex items-center rounded-2xl border p-2",
        disabled && "cursor-default opacity-40",
      )}
    >
      {children}
    </button>
  );
};

export default ProjectImages;
