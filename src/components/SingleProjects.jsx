import { useAnimation, useInView, motion } from "framer-motion";
import Modal from "../components/Modal";
import { useState } from "react";
import styles from "./SingleProject.module.css";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";

const SingleProjects = ({ id, url, img, title, github, text, tech }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const getFirstSentence = (text) => {
    const sentences = text.split(/[.!?]/);
    const firstSentence = sentences.slice(0,2).join('. ')
    return firstSentence.trim()
  }

  const firstSentence = getFirstSentence(text)

  return (
    <>
      <motion.div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={id === 1 ? styles.project1 : styles.projectImage}
        >
          <img
            src={img}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>

        <div className={styles.projectCopy}>
          <h4 className={styles.projectTitle}>{title}</h4>
          <div className={styles.projectTitleLine}>
            <Link href={github} target="_blank">
              <AiFillGithub size="2.2rem" />
            </Link>

            <Link href={url} target="_blank">
              <AiOutlineExport size="2.2rem" />
            </Link>
          </div>
        </div>

        <div className={styles.projectTech}>{tech}</div>
        <p className={styles.projectDescription}>
          {firstSentence} <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
        </p>
      </motion.div>
      <Modal image={img} title={title} git={github} tech={tech} text={text} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default SingleProjects;
