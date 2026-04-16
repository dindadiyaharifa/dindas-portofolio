// src/components/Experience.jsx
import React from 'react';

const experiences = [
  {
    id: 1,
    role: "IT Support Intern",
    company: "Accurate Jaya Computer",
    period: "Desember 2022 - Agustus 2025",
    description: "Menangani instalasi CCTV untuk perusahaan, termasuk konfigurasi jaringan dan pemeliharaan sistem.",
    skills: ["Networking", "Troubleshooting", "Helpdesk"]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header reveal">
        <span className="section-num">03 /</span>
        <h2 className="section-title"><span>Experience</span></h2>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div className="experience-card reveal" key={exp.id}>
            <div className="exp-content">
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-period">{exp.period}</p>
              <p className="exp-desc">{exp.description}</p>
              <div className="exp-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="exp-skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;