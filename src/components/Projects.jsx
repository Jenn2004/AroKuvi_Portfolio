import React from 'react'

import "../styles/Project.css";
// import hotelNetwork from "../assets/projects/hotel-network.png";
// import wasteManagement from "../assets/projects/waste-management.png";
const projects = [
  {
    title: "Hotel Network Infrastructure Design",
    // image: hotelNetwork,
    tech: ["Cisco Packet Tracer", "VLAN", "DHCP", "DNS"],
    description:
      "Designed and configured a multi-floor hotel network using VLAN segmentation and security protocols."
  },

  {
    title: "Smart Waste Management System",
    // image: wasteManagement,
    tech: ["ESP32-CAM", "IoT", "ThingSpeak", "AI"],
    description:
      "Developed an IoT-based smart waste monitoring system with real-time alerts."
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

  <img
    src={project.image}
    alt={project.title}
    className="project-image"
  />

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <div className="tech-stack">
    {project.tech.map((item, i) => (
      <span key={i}>{item}</span>
    ))}
  </div>

</div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;