import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("contact");
    section.scrollIntoView({ smooth: true, duration: 500, block: "center" });
  };
  return (
    <div className="py-32">
      <div className="mx-auto max-w-7xl pl-32 pr-96">
        <article>
          <h1 className="text-7xl font-semibold tracking-wider">
            Hey, I'm Sienna
            <span>.</span>
          </h1>
          <span className="mt-7 text-4xl tracking-wide">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Data Analyst",
                2000,
                "Microbiologist",
                2000,
              ]}
              speed={50}
              className="text-rose-500 font-semibold
              "
              wrapper="span"
              repeat={Infinity}
            />
          </span>
          <p className="mt-3 text-lg tracking-wide">
            I'm switching from a career of microbiologist to a developer. I
            enjoy coding and analyse data <br /> to create meaningful projects.
            Let's connect!
          </p>
          <div>
            <button className="btn btn-primary mt-6" onClick={handleScroll}>
              Contact Me
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
