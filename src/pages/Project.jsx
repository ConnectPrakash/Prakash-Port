import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
  {
    name: "Flibcourt",
    description: "A local storage-based web app for tracking items.",
    techStack: ["JavaScript", "Bootstrap", "LocalStorage"],
    liveLink: "https://67f5ff255f56580e054986db--mellow-biscochitos-17f037.netlify.app/", // Replace with your actual link
    githubLink: "#",
    image: "/images/phone.jpg", // Replace with your actual image path
  },
  {
    name: "University Task",
    description: "A Jira-like task management tool for university students.",
    techStack: ["MERN Stack", "Redux", "Tailwind CSS"],
    liveLink: "https://67f4e9fd58ac9b00a764050f--helpful-gumdrop-4e4633.netlify.app/",
    githubLink: "#",
    image: "/images/task.jpg",
  },
  {
    name: "E-Commerce App",
    description: "An online food ordering system with a responsive UI.",
    techStack: ["React"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/e-commerce.jpeg",
  },
  {
    name: "Book Store App",
    description: "An online food ordering system with a responsive UI.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "https://musical-hotteok-6e71dd.netlify.app/",
    githubLink: "#",
    image: "/images/bookstore.jpeg",
  },
  {
    name: "Chat Application",
    description: "An online food ordering system with a responsive UI.",
    techStack: ["React","Node js","Mongo DB","Socket io"],
    liveLink: "https://genuine-froyo-89694d.netlify.app/",
    githubLink: "#",
    image: "/images/snap1.jpg",
  },
  {
    name: "AI Travel Planner",
    description: "An AI-powered travel planner that generates personalized trip itineraries based on user preferences such as destination, budget, and travel companions.",
    techStack: ["React", "Socket.io", "OpenAI", "Firebase"],
    liveLink: "https://67f60d5860c15f22dd3a4fb8--hilarious-fox-679330.netlify.app/",
    githubLink: "#",
    image: "/images/Travel.jpg"
  }

];

const Project = () => {
  return (
    <section className="projects-container">
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-item">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo">
                 Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github">
                 GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
