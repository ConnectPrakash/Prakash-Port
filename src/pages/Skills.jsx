import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import "./Skills.css";

// Categorized Skills
const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
    { name: "JavaScript", icon: <FaJs className="icon js" /> },
    { name: "React", icon: <FaReact className="icon react" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="icon bootstrap" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="icon tailwind" /> }
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
    { name: "Express.js", icon: <SiExpress className="icon express" /> },
    { name: "MongoDB", icon: <SiMongodb className="icon mongodb" /> },
    { name: "MySQL", icon: <SiMysql className="icon mysql" /> }
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="icon git" /> },
    { name: "GitHub", icon: <FaGithub className="icon github" /> },
    { name: "VS Code", icon: <VscCode className="icon vscode" /> },
    { name: "Postman", icon: <SiPostman className="icon postman" /> }
  ]
};

const Skills = () => {
  return (
    <section className="skills-container">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills / Tech Stack
      </motion.h2>

      {/* Frontend Skills */}
      <h3 className="skills-category">🎨 Frontend Development</h3>
      <div className="skills-row">
      {skills.frontend.map((skill, index) => (
  <motion.div
    key={index}
    className="skill-item"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {skill.icon}
    <span>{skill.name}</span>
  </motion.div>
))}
      </div>

      {/* Backend Skills */}
      <h3 className="skills-category">⚙️ Backend Development</h3>
      <div className="skills-row">
      {skills.backend.map((skill, index) => (
  <motion.div
    key={index}
    className="skill-item"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {skill.icon}
    <span>{skill.name}</span>
  </motion.div>
))}
      </div>

      {/* Tools & Platforms */}
      <h3 className="skills-category">🛠️ Tools & Platforms</h3>
      <div className="skills-row">
      {skills.tools.map((skill, index) => (
  <motion.div
    key={index}
    className="skill-item"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {skill.icon}
    <span>{skill.name}</span>
  </motion.div>
))}
      </div>
    </section>
  );
};

export default Skills;
