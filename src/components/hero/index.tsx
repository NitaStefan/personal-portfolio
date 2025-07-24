import Wave from "./Wave";

const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <Wave />

      <div className="bg-bg/60 border-border flex flex-col items-center rounded-full border p-2">
        <h1 className="font-quicksand p-4 text-5xl font-medium">Ștefan Niță</h1>
        <h2 className="text-primary text-xl italic">Full-Stack Developer</h2>
      </div>
    </section>
  );
};

export default Hero;
