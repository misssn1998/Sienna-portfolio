import SectionTitle from "./SectionTitle";
import Skills from "./Skills";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="scroll-mt-56">
      <div>
        <SectionTitle text="About" isFirst={true} />

        {/* About me */}
        <div className="mx-auto max-w-7xl px-32 grid grid-cols-3">
          <div className="space-y-8 col-span-2">
            <p>
              Hey! I'm Sienna, if you haven't already gathered that by now. I'm
              a microbiologist turned software engineer and data analyst from
              Auckland, New Zealand. I specialize in full stack, primarily React
              and Nodejs, but love building with whatever tools are right for
              the job.
            </p>
            <p>
              I'm currently doing Master in Information Technology focusing on
              programming and self-taught data analysis.
            </p>
            <p>
              Outside of work, I enjoy going to the gym, hiking and reading.
            </p>
            <p>
              I'm passively looking for new positions where I can merge my love
              for code with creating meaningful projects. If you think you've
              got an opening that I might like, let's connect 🔗
            </p>
            <div className="flex flex-cols-2 items-center gap-4">
              <div className="flex flex-cols-2 gap-2">
                <span>My Links</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-emerald-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
              <div className="flex flex-cols-2 items-center gap-2">
                <a href="https://github.com/misssn1998">
                  <FaGithubSquare className="h-8 w-8 text-secondary hover:text-emerald-600 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/sienna-nguyen-0828b4146/">
                  <FaLinkedin className="h-8 w-8 text-secondary hover:text-emerald-600  duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex flex-cols-2 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-emerald-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <span className="text-xl font-bold text-neutral">My Skills</span>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
