import { nanoid } from "nanoid";
import { FaUniversity } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import React from "react";
import img1 from "../assets/blog.png"
import img2 from "../assets/pokemon.png"

export const links = [
  { id: nanoid(), href: "/", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#exp", text: "experience" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  { id: nanoid(), text: "JavaScript" },
  { id: nanoid(), text: "Java" },
  { id: nanoid(), text: "Python" },
  { id: nanoid(), text: "HTML" },
  { id: nanoid(), text: "CSS" },
  { id: nanoid(), text: "React" },
  { id: nanoid(), text: "NodeJS" },
  { id: nanoid(), text: "Express" },
  { id: nanoid(), text: "MongoDB" },
  { id: nanoid(), text: "Git" },
  { id: nanoid(), text: "Tailwind" },
];

export const projects = [
  {
    id: 1,
    img: img1,
    url: "https://full-stack-blog-f6yb.onrender.com",
    github: "https://github.com/misssn1998/g2-full-stack-blog-web.git",
    title: "G2 Full Stack Web Blog",
    text: "User-friendly, secure, and interactive. Features include user registration and authentication, article comments, likes, and subscriptions. WYSIWYG editor for content control. User autonomy over personal information. Analytics for insights into user-generated content. Primary reviewer for PRs and merge conflicts.",
    tech: "HTML - CSS - ExpressJs - NodeJs - UUID - AJAX - API - SQL - Handlebars - VanillaJs",
  },
  {
    id: 2,
    img: img2,
    url: "",
    github: "https://github.com/misssn1998/pokemon-exploration-website",
    title: "Pokemon Exploration Website",
    text: "This web project is to create a single-page application that dynamically displays data about Pokémon. The application utilizes AJAX for dynamic loading of data from the server without refreshing the entire page. It aims to demonstrate proficiency in client-side and server-side JavaScript development while adhering to good coding practices and design principles.",
    tech: "HTML - CSS - AJAX - JS - API - Local storage",
  },
];

export const experiences = [
  {
    id: nanoid(),
    company: "Sparklehaze | Singapore (Remote)",
    title: "Front-end Developer & Data Analyst Intern",
    time: "November 2023 - Present",
    texts: [
      "Utilized Typescript, HTML/CSS and Angular to design, develop and debug a user-friendly, adaptive, and responsive website for customers in hospital industry.",
      "Developed UI (user interface) for both client-site and administrative interfaces of Sparklehaze website.",
      "Implemented effective SEO (Search Engine Optimization) best practices and techniques to enhance website content and visibility.",
      "Analyzed data to help back-end team developed APIs for web application, improving functionality and user experience.",
    ],
    icon: React.createElement(MdWorkOutline),
  },
  {
    id: nanoid(),
    company: "AsureQuality Ltd",
    title: "Microbiology Lab Technician",
    time: "2019 - July 2023",
    texts: [
      "Conducted daily microbiological tests on water and environmental samples for government and private sector clients, ensuring precision and accuracy.",
      "Compiled, analyzed, and reported results to supervisor and scientific team in compliance with rules.",
      "Collaborated within a large team to ensure timely delivery of successful results.",
      "Managed PC2 lab environment and conducted contamination investigations when necessary.",
    ],
    icon: React.createElement(MdWorkOutline),
  },
  {
    id: nanoid(),
    title: "Master of Information Technology (MInfoTech)",
    time: "2023-Present",
    company: "Unversity of Auckland",
    course: "Programming with web technology (A+), Programming with Industry (A-)",
    icon: React.createElement(FaUniversity),
  },
  {
    id: nanoid(),
    title: "Bachelor of Science - Biotechnology",
    time: "2017-2020",
    company: "Unversity of Auckland",
    icon: React.createElement(FaUniversity),
  },
];
