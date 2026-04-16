// src/components/Certificates.jsx
import React from 'react';
import CertCard from './CertCard';

const certsData = [
  {
    icon: '🖥️',
    accentColor: '#F5C800',
    title: 'Ujian Kompetensi IT Support',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2024',
    category: 'IT Support',
  },
  {
    icon: '🌐',
    accentColor: '#4CAF50',
    title: 'Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar 2025',
    issuer:'Badan Eksekutif Mahasiswa',
    year: '2025',
    category: 'Networking',
  },
  {
    icon: '💡',
    accentColor: '#2196F3',
    title: 'Nama Sertifikat / Pelatihan',
    issuer: 'Nama Lembaga / Platform Penerbit',
    year: '2023',
    category: 'Programming',
  },
  {
    icon: '📊',
    accentColor: '#E91E63',
    title: 'Nama Sertifikat / Pelatihan',
    issuer: 'Nama Lembaga / Platform Penerbit',
    year: '2022',
    category: 'Data / Office',
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <div className="section-header reveal">
        <span className="section-num">04 /</span>
        <h2 className="section-title">
          <span>Sertifikat</span>
        </h2>
      </div>
      <div className="cert-list">
        {certsData.map((cert, idx) => (
          <CertCard key={idx} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;