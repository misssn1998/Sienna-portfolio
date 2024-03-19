import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/memoji.png";
import styles from "./Hero.module.css"
import { MdOutlineFileDownload } from "react-icons/md";

const RESUME_PDF = "http://127.0.0.1:5173/Sienna_Tech_CV.pdf";

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("contact");
    section.scrollIntoView({ smooth: true, duration: 500, block: "center" });
  };

  const handleDownload = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="mx-auto max-w-7xl mt-10 px-32 py-32 grid grid-cols-3 justify-center items-center sm:grid-cols-3 xs:px-6 xs:flex ">
      {/* Hero span */}
      <div className="col-span-2 pr-20 xs:pr-0">
        <article>
          <h1 className="text-7xl font-semibold tracking-wider leading-normal text-neutral sm:text-5xl sm:tracking-normal xs:tracking-tight xs:text-4xl ">
            Hey, I'm Sienna
            <span>.</span>
          </h1>
          <span className="mt-7 text-4xl tracking-wide leading-normal">
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
              className="font-semibold bg-gradient-to-r from-rose-500 to-cyan-500 bg-clip-text text-transparent "
              wrapper="span"
              repeat={Infinity}
            />
          </span>
          <p className="mt-3 text-lg tracking-wide">
            I'm switching from a career of microbiologist to a developer. I
            enjoy coding and analyse data to create meaningful projects. <br />
            Let's connect!
          </p>
          <div className="flex sm:flex-col sm:w-44">
            <button
              className="btn btn-primary btn-sm rounded-3xl mt-6"
              onClick={handleScroll}
            >
              Contact Me
            </button>
            <button
              className="flex btn btn-sm btn-secondary rounded-3xl mt-6 ml-5 sm:ml-0"
              onClick={() => handleDownload(RESUME_PDF)}
            >
              Download CV
              <MdOutlineFileDownload className="text-xl"/>
            </button>
          </div>
        </article>
      </div>

      {/* AVATAR */}
      <div className="w-80 hidden md:block lg:block">
        <img src={avatar} alt="My avatar" className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
