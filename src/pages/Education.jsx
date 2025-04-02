import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
  {
    id: 1,
    title: "MCA",
    institute: "Nehru Institude of Information Technology and Management, IN",
    duration: "2023 - 2025",
    description: "Master of Computer Applications",
  },
  {
    id: 2,
    title: "BCA",
    institute: "H.H The Rajah's College, Pudukkottai",
    duration: "2020 - 2023",
    description: "Bachelor of Computer Applications",
  },
  {
    id: 3,
    title: "12th Standard",
    institute: "St. Mary's Higher Secondary School, Pudukkottai",
    duration: "2018 - 2020",
    description: "Physics, Chemistry and Mathematics",
  },
  {
    id: 4,
    title: "10th Standard",
    institute: "St. Mary's Higher Secondary School, Pudukkottai",
    duration: "2017 - 2018",
    description: "General Science",
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">EDUCATION DETAILS</h2>
      <div className="timeline-edu">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            className={`timeline-item-edu ${index % 2 === 0 ? "left" : "right"}`}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated Icon with Circular Motion */}
            <motion.div
              className="timeline-icon-edu"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              {item.icon}
            </motion.div>
            {/* Education Card */}
            <div className="timeline-card-edu">
              <h3>{item.title}</h3>
              <p className="institute">{item.institute}</p>
              <p className="duration">{item.duration}</p>
              <p className="description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Education;