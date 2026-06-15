import React from 'react'
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/Hero.css";
import profile from "../assets/images/imag1.jpg";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="profile">
          <img
            src={profile}
            alt="Arockia Kuvinston"
            className="profile-image"
          />
        </div>
      </div>

      <div className="hero-right">
        <h3>Hello, I'm <h2>Arockia Kuvinstion J</h2></h3>

        <h1>
          NETWORK <br />
          <span>ENGINEER</span>
        </h1>

        <p>
          CCNA Certified Network Engineer and Technical Support Engineer
          specializing in Network Administration, Windows Server,
          Microsoft 365, Cloud Technologies, and IT Infrastructure.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Download Resume
          </button>

          <button className="secondary-btn">
            Contact Me
          </button>
        </div>
        <div className="stats">
            <div className="stat-card">
              <h2>1+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h2>2</h2>
              <p>Certifications</p>
            </div>

             <div className="stat-card">
               <h2>2</h2>
               <p>Projects</p>
            </div>
          </div>
          <div className="social-icons">
  <a href="https://www.linkedin.com/in/arockiakuvinstion/" targer="_blank"><FaLinkedin /></a>
  <a href="mailto:arokuvi@gmail.com" target="_blank"><FaEnvelope /></a>
  <a href="#"><FaPhone /></a>
</div>
      </div>
    </section>
  );
};

export default Hero;