"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Passionate about technology, I completed engineering in Information
        Technology, After finishing my degree, I wanted to delve deeper into web
        development, so I focused on mastering the MERN stack – MongoDB,
        Express.js, React, and Node.js – through online courses. To gain
        practical experience, I completed an eight-month internship in MERN
        stack development. During this time, I collaborated with experienced
        professionals and contributed to building web applications, including
        hospital management and Learning management system website. React,
        Next.js, Node.js, and MongoDB. Apart from MERN, I am also familiar with
        NextJS, TypeScript and Prisma. I am always looking to learn new
        technologies.
      </p>

      <p>
        <span className="italic">Now feeling confident in my skills,</span>
        <span className="font-medium">
          {" "}
          I aim to work full-time position as a software developer. I have a
          strong desire for learning and enjoy finding creative solutions to
          problems in web development.
        </span>
      </p>
    </motion.section>
  );
}
