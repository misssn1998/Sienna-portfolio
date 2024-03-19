import { links } from "../assets/data";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [activeSession, setActiveSession] = useState("about");
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-md shadow-black-500 backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <motion.li
                key={id}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  href={href}
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition capitalize ",
                    { "text-gray-950": activeSession === text }
                  )}
                  onClick={() => setActiveSession(text)}
                >
                  {text}

                  {text === activeSession && (
                    <motion.span
                      className="bg-gray-200 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSession"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
