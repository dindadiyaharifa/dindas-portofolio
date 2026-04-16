// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="nav-logo">
        Dinda's Portfolio
      </a>
      <ul className="nav-links">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#activity">Activity</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#certificates">Sertifikat</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;