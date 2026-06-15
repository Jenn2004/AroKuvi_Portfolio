import React from 'react'

import "../styles/About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>

        <div className="about-content">

          <div className="about-text">
            <p>
              CCNA-certified Network Engineer with hands-on experience in
              network administration, Windows Server environments,
              Microsoft 365, and cloud technologies.
            </p>

            <p>
              Currently working as a Technical Support Engineer in Abu Dhabi,
              providing IT support, troubleshooting network issues, managing
              Microsoft 365 services, and ensuring reliable IT operations.
            </p>

            <p>
              Passionate about designing secure and scalable network
              infrastructures while delivering excellent technical support
              and customer service.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;