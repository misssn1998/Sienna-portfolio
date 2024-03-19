import SectionTitle from "./SectionTitle";
import SingleProject from "./SingleProjects";
import { projects } from "../assets/data";
import styles from "./SingleProject.module.css";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div>
        <SectionTitle text="Projects" />
      </div>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <ul>
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{
                  once: true
                }}
              >
                <SingleProject key={project.id} {...project} />
              </motion.li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
