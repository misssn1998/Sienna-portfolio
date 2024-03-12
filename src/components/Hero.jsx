

const Hero = () => {
  return (
    <div className="py-32">
      <div className="mx-auto max-w-7xl pl-32 pr-96">
        <article>
          <h1 className="text-8xl font-bold tracking-wider">
            Hey, I'm Sienna
            <span>.</span>
          </h1>
          <p className="mt-7 text-4xl tracking-wide">
            I'm a{" "}
            <span className="text-emerald-600 font-black">
              Full Stack Developer
            </span>
          </p>
          <p className="mt-3 text-lg tracking-wide">
            I'm switching from a career of microbiologist to a developer. I
            enjoy coding and analyse data <br /> to create meaningful projects. Let's
            connect!
          </p>
          <div>
            <button className="btn btn-primary mt-6">Contact me</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
