import React from 'react';
import profileImage from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero-eyebrow">// welcome to my space</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        <div style={{ flex: '2' }}>
          <h1 className="hero-name">
            Hi, I'm<span>Dinda</span>
          </h1>
          <p className="hero-desc">
            D3 Informatics Engineering student. Passionate about computer systems &
            application development. Hands-on experience in IT Support, and always learning.
          </p>
          <div className="hero-tags">
            <span className="tag">IT Support</span>
            <span className="tag">App Development</span>
            <span className="tag">Problem Solver</span>
            <span className="tag">Fast Learner</span>
          </div>
          <p className="hero-scroll">
            <span className="scroll-line"></span> scroll to explore
          </p>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
            <img src={profileImage} alt="foto profil" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--yellow)', boxShadow: '6px 6px 0 var(--black)' }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;