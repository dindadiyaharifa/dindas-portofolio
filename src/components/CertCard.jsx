// src/components/CertCard.jsx
import React from 'react';

const CertCard = ({ icon, accentColor, title, issuer, year, category }) => {
  return (
    <div className="cert-card reveal">
      <div className="cert-accent" style={{ background: accentColor || '#F5C800' }}></div>
      <div className="cert-icon">{icon}</div>
      <div className="cert-body">
        <p className="cert-title">{title}</p>
        <p className="cert-issuer">{issuer}</p>
        <div className="cert-meta">
          <span className="cert-year">{year}</span>
          <span className="cert-cat">{category}</span>
        </div>
      </div>
      <div className="cert-badge">🏅</div>
    </div>
  );
};

export default CertCard;