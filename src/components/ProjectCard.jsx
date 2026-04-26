// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ icon, bgColor, type, name, desc, stack, link }) => {
  const CardWrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? { href: link, target: '_blank', rel: 'noopener noreferrer', className: 'project-card reveal project-card-link' }
    : { className: 'project-card reveal' };

  return (
    <CardWrapper {...wrapperProps}>
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
        {link && (
          <div className="project-link-hint">
            <span>Lihat di GitHub →</span>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;