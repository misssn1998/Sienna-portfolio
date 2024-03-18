import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProjects";
import { projects } from "../assets/data";
import styles from "./SingleProject.module.css";

const Projects = () => {
  return (
    <section
      id="projects"
      className={styles.container}
    >
      <div>
        <SectionTitle text="Projects" />
      </div>
      <div className={styles.projects}>
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
