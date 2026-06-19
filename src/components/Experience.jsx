import React from 'react'

import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <h2 className="section-title">
          Work <span className="highlight">Experience</span>
        </h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>Technical Support Engineer</h3>
              <h4>IPNS -<i> Abu Dhabi, UAE</i></h4>
              <span>Dec 2025 - Present</span>

              <ul>
                <li>Provide end-user IT support and troubleshooting.</li>
                <li>Manage Microsoft 365 services and user accounts.</li>
                <li>Resolve hardware, software, and network issues.</li>
                <li>Support LAN/WAN infrastructure and system operations.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>IT Support Intern</h3>
              <a href="https://www.ipns-uae.com/"><h4>AK Infopark Pvt Ltd <i>- Nagercoil, Tamilnadu</i></h4></a>
              <span>Feb 2025 - Sep 2025</span>

              <ul>
                <li>Supported 50+ users with technical assistance.</li>
                <li>Configured Active Directory, DNS, and DHCP.</li>
                <li>Assisted VLAN implementation and network monitoring.</li>
                <li>Worked with AWS EC2 and cloud infrastructure support.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;