// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ icon, bgColor, type, name, desc, stack }) => {
  return (
    <div className="project-card reveal">
      <div className="project-thumb" style={{ background: bgColor || '#FFF5B0' }}>
        <span className="icon">{icon}</span>
      </div>
      <div className="project-body">
        <p className="project-type">{type}</p>
        <p className="project-name">{name}</p>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map((tech, idx) => (
            <span key={idx} className="stack-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;