// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    icon: '💻',
    bgColor: '#FFF5B0',
    type: 'Mobile App',
    name: 'MEMBACA',
    desc: 'Aplikasi perpustakaan digital yang ditujukan untuk membantu orang tua menemukan dan membacakan buku cerita untuk anak. Pengguna dapat langsung membaca di aplikasi maupun mengunduhnya untuk dibaca secara offline.',
    stack: ['Dart', 'Flutter'],
    link: 'https://github.com/dindadiyaharifa',
  },
  {
    icon: '🗄️',
    bgColor: '#e8f5e9',
    type: 'Mobile App / Web',
    name: 'MOCO',
    desc: 'Aplikasi manajemen keuangan dengan fitur unggulan berupa fixed cost dan kalkulasi keuangan untuk membantu pengguna mengatur keuangan secara optimal. Saya berperan di backend, membangun API untuk transaksi, profil pengguna, dan sistem informasi panduan pengguna.',
    stack: ['PHP', 'PostgreSQL', 'Laravel', 'Flutter'],
    link: 'https://github.com/dindadiyaharifa',
  },
  {
    icon: '🔧',
    bgColor: '#e3f2fd',
    type: 'IT Support / Hardware',
    name: 'Instalasi CCTV Perusahaan',
    desc: 'Melakukan instalasi dan konfigurasi sistem CCTV untuk kebutuhan keamanan perusahaan, termasuk pemasangan kamera, setting DVR/NVR, dan konfigurasi akses remote monitoring.',
    stack: ['Installation', 'Networking', 'Maintenance'],
    link: null,
  },
  {
    icon: '📱',
    bgColor: '#fce4ec',
    type: 'UI/UX Design',
    name: 'Desain UI Aplikasi Mobile',
    desc: 'Merancang antarmuka pengguna (UI) untuk aplikasi mobile menggunakan Figma, kemudian mengimplementasikannya ke dalam Flutter.',
    stack: ['Figma', 'Flutter'],
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-num">01 /</span>
        <h2 className="section-title">
          <span>Projects</span>
        </h2>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;