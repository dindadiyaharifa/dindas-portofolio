import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Activity from './components/Activity';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Experience from './components/Experience';


function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Activity />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Certificates />
      <Footer />
    </>
  );
}

export default App;