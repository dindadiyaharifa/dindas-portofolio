// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className="footer-name">Dinda Diyah Arifa</p>
      <p style={{ opacity: 0.5, fontSize: '11px' }}>
        D3 Informatics Engineering · Surabaya, East Java
      </p>
      <div className="footer-links">
        <a href="https://github.com/dindadiyaharifa#">GitHub</a>
        <a href="https://www.linkedin.com/in/dinda-diyah-arifa-03b205301/">LinkedIn</a>
        <a href="mailto:dindadiyaharifa@gmail.com">Email</a>
        <a href="#">Download CV</a>
      </div>
      <p style={{ marginTop: '16px', opacity: 0.3, fontSize: '10px' }}>
        © 2025 Dinda — built with 💛
      </p>
    </footer>
  );
};

export default Footer;