import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Before Sending:", formData); // Debugging

    emailjs
      .sendForm(
        "service_zbyvyo1", // Your EmailJS Service ID
        "template_pcqqfug", // Your EmailJS Template ID
        e.target, // Sends form data
        "nBx42piIk_MY2bImg" // Your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            to_name: "",
            from_name: "",
            email: "",
            message: "",
            file: null,
          });
        },
        (error) => {
          console.error("Failed...", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-details">
        <motion.a
          href="mailto:prakashselvaraj9626@gmail.com"
          className="contact-item"
          whileHover={{ scale: 1.1 }}
        >
          <i className="fa-solid fa-envelope"></i> prakashselvaraj9626@gmail.com
        </motion.a>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="to_name"
              placeholder="Recipient's Name"
              className="input-field"
              value={formData.to_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="input-field"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              className="textarea-field"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="file-upload">
              <label>
                <i className="fa-solid fa-folder-open"></i> Attach documents
                <input type="file" name="file" onChange={handleChange} />
              </label>
            </div>
            <button type="submit" className="send-button">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
 