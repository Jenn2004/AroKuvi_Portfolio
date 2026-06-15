import React, { useState } from "react";

import {
  FaNetworkWired,
  FaProjectDiagram,
  FaLock,
  FaShieldAlt,
  FaExchangeAlt,
  FaServer,
  FaCloud,
  FaTools,
  FaWindows,
} from "react-icons/fa";

import {
  SiCisco,
  // SiAmazonwebservices,
  SiLinux,
  // SiMicrosoft,
} from "react-icons/si";

import "../styles/Skills.css";

const skillData = {
  Networking: [
  { name: "OSPF", icon: <FaProjectDiagram /> },
  { name: "EIGRP", icon: <FaProjectDiagram /> },
  { name: "RIP", icon: <FaProjectDiagram /> },

  { name: "VLAN", icon: <FaNetworkWired /> },
  { name: "LAN/WAN", icon: <FaNetworkWired /> },

  { name: "VPN", icon: <FaLock /> },

  { name: "ACL", icon: <FaShieldAlt /> },

  { name: "NAT", icon: <FaExchangeAlt /> },

  { name: "Routing & Switching", icon: <FaNetworkWired /> },
],

  "System Admin": [
    { name: "Windows Server", icon: <FaWindows /> },
    { name: "Active Directory", icon: <FaServer /> },
    { name: "DNS", icon: <FaServer /> },
    { name: "DHCP", icon: <FaServer /> },
    { name: "Group Policy", icon: <FaServer /> },
    { name: "Microsoft 365", icon: <FaWindows /> },
  ],

  Cloud: [
    { name: "AWS EC2", icon: <FaCloud /> },
    { name: "Cloud Networking", icon: <FaCloud /> },
    { name: "Virtual Machines", icon: <FaCloud /> },
  ],

  Security: [
    { name: "Firewall Configuration", icon: <FaShieldAlt /> },
    { name: "Port Security", icon: <FaLock /> },
    { name: "VPN Setup", icon: <FaLock /> },
  ],

  Tools: [
    { name: "Cisco Packet Tracer", icon: <SiCisco/> },
    { name: "Remote Support Tools", icon: <FaTools /> },
    { name: "Ticketing Systems", icon: <FaTools /> },
    { name: "Basic Linux", icon: <SiLinux /> },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Networking");

  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          Technical <span className="highlight">Skills</span>
        </h2>

        <div className="skills-buttons">
          {Object.keys(skillData).map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillData[activeTab].map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
