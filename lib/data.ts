import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import deduplication from "@/public/Deduplication.png";
import twittersearch from "@/public/twittersearch.png";
import weatherforecast from "@/public/weatherforecast.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CVR College of Engineering",
    location: "Hyderabad, India",
    description:
      "I graduated with a bachelors degree in computer science and engineering. ",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
  {
    title: "Software Engineer, Virtusa",
    location: "Hyderabad,India",
    description:
      "I worked as a Software Engineer for 1 year working on couple of projects including full stack developement.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "University of California",
    location: "Riverside, CA",
    description:
      "I graduated with a masters degree in computer science with a GPA of 3.75.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Software Engineering Intern, Apple",
    location: "Cupertino, CA",
    description:
      "I was an intern in Communication applications team at Apple. I worked with feature development of automation web application called Frost.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022-Sep 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Advanced Weather Forecasting System",
    description:
      "Built a serverless weather app backend with machine learning for accurate forecasts and an engaging UI.",
    tags: ["React", "FastAPI", "PySpark", "AWS", "Hadoop", "Python"],
    imageUrl: weatherforecast,
  },
  {
    title: "Twitter Search Engine",
    description:
      "Built a high-accuracy, lightning-fast Twitter search engine using NLP and efficient crawling techniques.",
    tags: ["Python", "Numpy", "Pandas", "Pylucene", "BERT"],
    imageUrl: twittersearch,
  },
  {
    title: "Secure File Storage with Data Deduplication",
    description:
      "Secure, deduplicated file storage system with user access control built with Java Servlets and AES encryption.",
    tags: ["HTML", "CSS", "Java", "SHA", "MySQL"],
    imageUrl: deduplication,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Django",
  "Spring Boot",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "MongoDB",
  "GraphQL",
  "Express",
  "MySQL",
  "PostgreSQL",
  "RabbitMQ",
  "Docker",
  "pandas",
] as const;
