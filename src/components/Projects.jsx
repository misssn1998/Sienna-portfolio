import SectionTitle from "./SectionTitle"
import SingleProject from "./SingleProjects"
import {projects} from "../assets/data"

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-44">
      <SectionTitle text="Projects" />
      <div className="mx-auto max-w-7xl px-32 py-8 grid lg:grid-cols-2 place-items-center gap-10 ">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects