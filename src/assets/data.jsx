import { nanoid } from "nanoid";

export const links = [
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
  { id: nanoid(), href: "#exp", text: "experience" },
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
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://full-stack-blog-f6yb.onrender.com/",
    github: "",
    title: "Full Stack Web Blog",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    tech: "React - React - React - React",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://full-stack-blog-f6yb.onrender.com/",
    github: "",
    title: "Full Stack Web Blog",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    tech: "React - React - React - React",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://full-stack-blog-f6yb.onrender.com/",
    github: "",
    title: "Full Stack Web Blog",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    tech: "React - React - React - React",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://full-stack-blog-f6yb.onrender.com/",
    github: "",
    title: "Full Stack Web Blog",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    tech: "React - React - React - React",
  },
];

export const jobs = [
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
  },
  {
    id: nanoid(),
    company: "AsureQuality Ltd",
    title: "Microbiology Lab Technician",
    time: "2019 - July 2023",
    texts: [
      "Conducted daily microbiological tests on water and environmental samples for government and private sector clients, ensuring precision and accuracy.",
      "Compiled, analyzed, and reported results to supervisor and scientific team in compliance with rules.",
      "Managed PC2 lab environment and conducted contamination investigations when necessary.",
    ],
  },
];
