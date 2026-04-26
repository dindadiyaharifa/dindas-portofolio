// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <a href="#" className="nav-logo">
        Dinda's Portfolio
      </a>

      {/* Tombol hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu navigasi"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu navigasi */}
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
          <a href="#activity" onClick={closeMenu}>Activity</a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>Experience</a>
        </li>
        <li>
          <a href="#certificates" onClick={closeMenu}>Sertifikat</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;