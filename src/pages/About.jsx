import { motion } from "framer-motion";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-page">
      <motion.div
        initial={{ scale: 0.9, rotate: -2 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="about-container"
      >
        <h2 className="about-title"> About Me</h2>
        <p className="about-text">
          Hi, I'm <span className="highlight">Prakash</span>, a passionate
          <strong> Full-Stack Developer </strong> specializing in{" "}
          <strong>MERN Stack, Java, and Responsive Web Design</strong>. I love
          creating seamless user experiences and solving complex problems with
          clean, efficient code.
        </p>

        <p className="extra-content">
          With experience in <strong>Front-end</strong> and <strong>Back-end development</strong>, I focus on
          building <strong>scalable applications</strong>. I enjoy experimenting with the latest
          web technologies and constantly improving my skills.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="contact-button"
        >
          Contact Me
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="skills-container"
      >
        <div className="skills">
          <h3>💻 Frontend Development</h3>
          <ul>
            <li>React.js & Redux</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Responsive Web Design</li>
            <li>Framer Motion & Animations</li>
          </ul>
        </div>
        <div className="skills">
          <h3>🛠 Backend Development</h3>
          <ul>
            <li>Node.js & Express.js</li>
            <li>MongoDB & Firebase</li>
            <li>REST APIs & Authentication</li>
            <li>Server-side Rendering</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};


export default About;
