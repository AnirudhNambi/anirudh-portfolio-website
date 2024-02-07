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
    title: "Software Engineering Intern, Apple",
    location: "Cupertino, CA",
    description:
      "Automated Frost web app for seamless real-time collaboration, enhanced performance with GraphQL, and boosted scalability with RabbitMQ/Celery. Rigorous testing secured a 10% bug reduction for a rock-solid experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022-Sep 2022",
  },
  {
    title: "University of California",
    location: "Riverside, CA",
    description:
      "Recently completed Master's degree in Computer Science with 3.75 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Software Engineer, Virtusa",
    location: "Hyderabad,India",
    description:
      "Built a secure and scalable employee management backend using Spring Boot microservices and MySQL. Designed REST APIs for employee CRUD operations and integrated with auth/authorization for data security.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "CVR College of Engineering",
    location: "Hyderabad, India",
    description:
      "Graduated with an 8.9 GPA in Bachelor of Technology, Computer Science & Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
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
