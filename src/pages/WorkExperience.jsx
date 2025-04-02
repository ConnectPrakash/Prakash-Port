import React from "react";
import "./WorkExperience.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    position: "MERN Stack Developer",
    company: "Squash App (Internship)",
    duration: "Oct 2024 - Mar 2025",
    description: "Developing a full-stack application using MERN stack with real-time data synchronization.",
  },
  {
    position: "Frontend Developer",
    company: "CodSoft (Virtual Internship)",
    duration: "June 2024 - July 2024",
    description: "Created a fully responsive and interactive UI using React, Tailwind, and Bootstrap.",
  },
  {
    position: "MERN Stack Training",
    company: "Guvi",
    duration: "2024",
    description: "Completed intensive hands-on training on MongoDB, Express, React, and Node.js.",
  },
];

const WorkExperience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-box" key={index}>
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
