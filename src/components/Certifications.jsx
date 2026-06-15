import React from 'react'

import "../styles/Certifications.css";
// import { FaCertificate } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const certifications = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    year: "2025",
    icon: <SiCisco />,
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
  },
  {
    title: "Microsoft Certified Systems Engineer (MCSE)",
    year: "2024",
    icon: <FaMicrosoft />,
    link: "https://learn.microsoft.com/"
  }
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Certifications</span>
        </h2>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="cert-link"
    key={index}
  >
    <div className="cert-card">

      <div className="cert-icon">
        {cert.icon}
      </div>

      <h3>{cert.title}</h3>

      <p>{cert.year}</p>

    </div>
  </a>
))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
