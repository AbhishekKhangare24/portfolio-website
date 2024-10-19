import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import swiftkart from "@/public/swiftkart.png";
import dieTree from "@/public/dietree.png";
import ytImg from "@/public/youtube.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering",
    location: "TGPCET, Nagpur",
    description:
      "I Completed my Engineering in Information Technology stream from nagpur university.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2018 - Jun 2022",
  },
  {
    title: "Explore the web dev world",
    location: "",
    description:
      "After finishing my degree, I wanted to delve deeper into web development, so I focused on mastering the MERN stack – MongoDB, Express.js, React, and Node.js – through online courses.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 - May 2023",
  },
  {
    title: "MERN Stack Developer Internship",
    location: "Work From Home",
    description:
      "To gain practical experience, I completed an eight-month internship in MERN stack development. During this time, I collaborated with experienced professionals and contributed to building various web applications, including hospital management and student management websites.",
    icon: React.createElement(FaReact),
    date: "May 2023 - Jan 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Youtube Clone",
    description:
      "Youtube clone is an online video sharing app that will fetch the data from YouTube Data API and render it using React.",
    tags: ["React", "Redux", "Material UI"],
    imageUrl: ytImg,
    liveUrl: "https://youtubeclonebyak.netlify.app/",
    codeUrl: "https://github.com/AbhishekKhangare24/youtube_clone",
  },

  {
    title: "Swiftkart",
    description:
      "Swiftkart is a MERN e-commerce app featuring optimized performance, clean architecture, reusable components and responsive design.",
    tags: ["MERN", "Redux Toolkit"],
    imageUrl: swiftkart,
    liveUrl: "https://swiftkart-ecommerce-frontend.onrender.com/",
    codeUrl: "https://github.com/AbhishekKhangare24/Swiftkart",
    // backendUrl: "https://github.com/AbhishekKhangare24/eshop-mern-backend",
  },
  {
    title: "Dietree App",
    description:
      "In my 8 months of internship i worked on Dietree app (it is similer to hospital management system app) created its ui, integrated apis and fixed bugs.",
    tags: ["React", "Node", "MongoDB", "Tailwind", "Mongoose"],
    imageUrl: dieTree,
    liveUrl: "",
    codeUrl: "",
    // backendUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "Shadcn UI",
  "Sass",
  "Prisma",
  "MongoDB",
  "Mongoose",
  "Redux Toolkit",
  "Express",
] as const;
