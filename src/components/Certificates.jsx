// src/components/Certificates.jsx
import React, { useState } from 'react';
import CertCard from './CertCard';

const certsData = [
  {
    icon: '🖥️',
    accentColor: '#F5C800',
    title: 'Ujian Kompetensi IT Support',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2024',
    category: 'IT Support',
    image: null, // Ganti dengan path gambar sertifikat, misal: '/sertifikat/bnsp.jpg'
  },
  {
    icon: '🌐',
    accentColor: '#4CAF50',
    title: 'Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar',
    issuer: 'Badan Eksekutif Mahasiswa',
    year: '2025',
    category: 'Leadership',
    image: null,
  },
  {
    icon: '💡',
    accentColor: '#2196F3',
    title: 'Nama Sertifikat / Pelatihan',
    issuer: 'Nama Lembaga / Platform Penerbit',
    year: '2023',
    category: 'Programming',
    image: null,
  },
  {
    icon: '📊',
    accentColor: '#E91E63',
    title: 'Nama Sertifikat / Pelatihan',
    issuer: 'Nama Lembaga / Platform Penerbit',
    year: '2022',
    category: 'Data / Office',
    image: null,
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

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
          <CertCard key={idx} {...cert} onClick={() => handleCertClick(cert)} />
        ))}
      </div>

      {/* Modal untuk menampilkan sertifikat */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={handleCloseModal}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={handleCloseModal}>✕</button>
            <div className="cert-modal-header">
              <span className="cert-modal-icon">{selectedCert.icon}</span>
              <div>
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
                <p className="cert-modal-issuer">{selectedCert.issuer}</p>
                <div className="cert-modal-meta">
                  <span className="cert-year">{selectedCert.year}</span>
                  <span className="cert-cat">{selectedCert.category}</span>
                </div>
              </div>
            </div>
            <div className="cert-modal-body">
              {selectedCert.image ? (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-image"
                />
              ) : (
                <div className="cert-modal-placeholder">
                  <span className="cert-placeholder-icon">📜</span>
                  <p>Gambar sertifikat belum tersedia</p>
                  <p className="cert-placeholder-hint">
                    Tambahkan file gambar sertifikat ke folder assets dan update properti <code>image</code> pada data sertifikat
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;