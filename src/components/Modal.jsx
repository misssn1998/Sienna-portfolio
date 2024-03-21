import React, { useEffect } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import styles from "./modal.module.css";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Modal = ({ url, image, title, git, tech, text, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const body = document.querySelector("body");

    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [open]);

  return (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          src={image}
          alt={`An image of the ${title} project.`}
          className={styles.modalImage}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <p className={styles.modalTech}>{tech}</p>
          <div className={styles.suppliedContent}>{text}</div>
          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links <span>.</span>
            </p>
            <div className={styles.links}>
              <a target="_blank" href={git}>
                <AiFillGithub /> source code
              </a>

              {url ? (
                <a target="_blank" href={url}>
                  <AiOutlineExport /> live project
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
