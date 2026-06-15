import React from 'react'

import "../styles/Certifications.css";
// import { FaCertificate } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const certifications = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    year: "2025",
    icon: <SiCisco />
  },
  {
    title: "Microsoft Certified Systems Engineer (MCSE)",
    year: "2024",
    icon: <FaMicrosoft />
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
            <div className="cert-card" key={index}>

  <div className="cert-icon">
    {cert.icon}
  </div>

  <h3>{cert.title}</h3>

  <p>{cert.year}</p>

</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
