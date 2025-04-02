import React, { useEffect, useReducer, useState } from 'react';
import wave from '../asset/wave.png';
import TextTransition from "react-text-transition";

import './Home.css';
import { presets } from "react-text-transition";
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Project from './Project';
import WorkExperience from './WorkExperience';
import ContactMe from './ContactMe';
import image from '../asset/profile3.jpg';

function Home() {
  const text =
    "Passionate about crafting modern web applications with a focus on performance, scalability, and user experience. Skilled in React, Node.js, and problem-solving in Java.";

  const [index, setIndex] = useState(0);
  const roles = ["Software Developer!", "MERN Stack Developer!", "Web Developer!"];

  useEffect(() => {
    if (index < text.length) {
      const typingTimeout = setTimeout(() => setIndex(index + 1), 50);
      return () => clearTimeout(typingTimeout);
    }
  }, [index, text]);

  // Role Animation Effect
  const [animationIndex, setAnimationIndex] = useReducer(
    (prev) => (prev + 1) % roles.length,
    0
  );
  
  return (
    <div>
      <div className="home">
        <header>
          <div className='home-div'>
            <h2>
              Hi <img className="home-img" src={wave} alt="Waving hand icon" /> I'm <span className="name">Prakash</span> 
            </h2>
            <span className='home-div-tran'>
  <TextTransition springConfig={presets.wobbly}>
    {roles[animationIndex]}
  </TextTransition>
</span>

           
          </div>
          <div className='home-profile-img'>
            <img src={image} alt='Profile' />
          </div>
        </header>

        <div className="home-links">
          <a href="https://www.linkedin.com/in/prakash-selvaraj-6a1907293/" className="link">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/ConnectPrakash" className="link">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="tel:+1234567890" className="link">
            <i className="fa-solid fa-phone"></i> Phone
          </a>
        </div>

        <div className="home-button">
          <button className="hire">Hire Me!</button>
          <button className="download">My Resume</button>
          <button className="project">View Projects</button>
        </div>
      </div>

      <div className='about'>
        <About />
        <Education />
        <Skills />
        <Project />
        <WorkExperience />
        <ContactMe />
      </div>
    </div>
  );
}

export default Home;
