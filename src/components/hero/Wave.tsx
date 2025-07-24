const Wave = () => {
  return (
    <>
      <img
        src="/wave-top.svg"
        alt="wave-frame-top"
        className="absolute top-0 left-1/2 -z-10 block w-[calc(100%+96px)] max-w-5xl -translate-x-1/2 sm:hidden"
      />
      <img
        src="/wave-bottom.svg"
        alt="wave-frame-bottom"
        className="absolute bottom-0 left-1/2 -z-10 block w-[calc(100%+96px)] max-w-5xl -translate-x-1/2 rounded-b-2xl sm:hidden"
      />
      <img
        src="/wave-top-2.svg"
        alt="wave-frame-top"
        className="absolute top-0 left-1/2 -z-10 hidden w-[calc(100%+96px)] max-w-5xl -translate-x-1/2 sm:block"
      />
      <img
        src="/wave-bottom-2.svg"
        alt="wave-frame-bottom"
        className="absolute bottom-0 left-1/2 -z-10 hidden w-[calc(100%+96px)] max-w-5xl -translate-x-1/2 rounded-b-2xl sm:block"
      />
    </>
  );
};

export default Wave;
