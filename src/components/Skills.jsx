import { skills } from "../assets/data";
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
      delay: 0.05 * index,
    }
  }),
};

const Skills = () => {
  return (
    <ul className="mx-auto py-2">
      {skills.map((skill, index) => {
        const { id, text } = skill;
        return (
          <motion.li
            key={id}
            className="badge px-2 py-4 bg-primary mx-1 my-2 "
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}

          >
            {text}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Skills;
