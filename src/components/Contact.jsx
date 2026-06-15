import React from 'react'

import "../styles/Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <h2 className="section-title">
          Contact <span className="highlight">Me</span>
        </h2>

        <div className="contact-grid">

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <a href="mailto:arokuvi@gmail.com" className="contact-link">arokuvi@gmail.com</a>
            
          </div>

          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+971 563047402</p>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/arockiakuvinstion/" target="_blank" className="contact-link"><p>linkedin.com://arokuvi</p></a>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Abu Dhabi, UAE</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
