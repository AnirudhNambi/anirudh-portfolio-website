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
      
Recent computer science graduate and Software Engineer (2+ years), I excel in Java, Python, and Javascript, passionate about building highly scalable backend systems, automation tools, and data processing solutions. Driven by innovation and delivering efficiency, I honed my skills at Apple Internship, enhancing Frost's automation and user experience, and at Virtusa, spearheading a RESTful employee service in an employee management system. Eager to collaborate on impactful projects!
      </p>
    </motion.section>
  );
}
