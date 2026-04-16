// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    icon: '💻',
    bgColor: '#FFF5B0',
    type: 'Mobile App',
    name: 'MEMBACA',
    desc: 'Project ini saya berasal dari tugas kuliah saya yaitu membuat aplikasi perpustakaan digital. Disini saya membuat mengambil target untuk orang tua yang ingin membantu orang tua menceritakan buku untuk anaknya. Jadi aplikasi ini membantu orang tua untuk mencari buku yang cocok untuk anaknya. Dan dari aplikasi ini pengguna bisa langsung membaca dari aplikasi atau bisa mengaksesnya secara offline dengan mendownloadnya terlebih dahulu.',
    stack: ['Dart', 'Flutter'],
  },
  {
    icon: '🗄️',
    bgColor: '#e8f5e9',
    type: 'Mobile App / Web',
    name: 'MOCO',
    desc: 'Aplikasi ini merupakan project base learning, aplikasi ini adalah aplikasi manajemen keuangan yang memiliki uniq value yaitu adanya fixed cost dan beberapa kalkulasi keunagan untuk membantu pengguna mengatur keuangannya secara maksimal. pada project ini saya berperan dalam backend yaitu membuat api dari semua transaction, user profile, dan fitur sistem informasi pada mobile untuk panduan pengguna',
    stack: ['PHP', 'PostgreSQL', 'Laravel', 'Flutter'],
  },
  {
    icon: '🔧',
    bgColor: '#e3f2fd',
    type: 'IT Support / Hardware',
    name: 'Instalasi CCTV untuk Perusahaan ...',
    desc: 'Deskripsi singkat project ini — apa yang dibuat, untuk siapa, dan masalah apa yang diselesaikan.',
    stack: ['instalation', 'support', 'maintenance'],
  },
  {
    icon: '📱',
    bgColor: '#fce4ec',
    type: ' / UI',
    name: 'Nama Project Kamu',
    desc: 'Deskripsi singkat project ini — apa yang dibuat, untuk siapa, dan masalah apa yang diselesaikan.',
    stack: ['Figma', 'Flutter'],
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