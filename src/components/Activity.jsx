// src/components/Activity.jsx
import React from 'react';
import pklImage from '../assets/pkl-ut.jpeg';
import lmtImage from '../assets/act-lmt.jpeg';
import cctvImage from '../assets/act-instalasicctv.jpeg';
import futsalImage from '../assets/act-panitiafutsal.jpeg';
import pekanImage from '../assets/act-pekankomunitas.jpeg';
import pkkmbImage from '../assets/act-pkkmb.jpeg';

const activitiesData = [
  {
    id: 1,
    img: pklImage,
    info: {
      title: "PKL di Accurate Jaya Computer",
      desc: "Magang sebagai IT Support — menangani jaringan, hardware, dan instalasi CCTV",
      tempat: "Surabaya",
      tanggal: "Desember 2022 - Agustus 2025"
    },
    className: "big"
  },
  {
    id: 2,
    img: cctvImage,
    info: {
      title: "Instalasi CCTV",
      desc: "Pemasangan dan konfigurasi sistem CCTV di lapangan",
      tempat: "Surabaya",
      tanggal: "2023"
    },
    className: "med"
  },
  {
    id: 3,
    img: pkkmbImage,
    info: {
      title: "PKKMB",
      desc: "Pengenalan Kehidupan Kampus bagi Mahasiswa Baru",
      tempat: "Kampus PENS",
      tanggal: "2024"
    },
    className: "med"
  },
  {
    id: 4,
    img: futsalImage,
    info: {
      title: "Panitia Futsal",
      desc: "Menjadi panitia turnamen futsal kampus",
      tempat: "Kampus",
      tanggal: "2024"
    },
    className: "wide"
  },
  {
    id: 5,
    img: pekanImage,
    info: {
      title: "Pekan Komunitas",
      desc: "Kegiatan pekan komunitas bersama teman-teman",
      tempat: "Kampus",
      tanggal: "2024"
    },
    className: "med"
  },
  {
    id: 6,
    img: lmtImage,
    info: {
      title: "LKMM-TD 2025",
      desc: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
      tempat: "Kampus",
      tanggal: "2025"
    },
    className: "med"
  },
];

const Activity = () => {
  return (
    <section id="activity">
      <div className="section-header reveal">
        <span className="section-num">02 /</span>
        <h2 className="section-title">
          <span>Activity</span>
        </h2>
      </div>

      <div className="collage-wrapper reveal">
        <div className="collage-grid">
          {activitiesData.map((item) => (
            <div key={item.id} className={`collage-item ${item.className} activity-item`}>
              <img 
                src={item.img} 
                alt={item.info.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Bubble popup yang muncul saat hover */}
              <div className="activity-bubble">
                <h4>{item.info.title}</h4>
                <p>{item.info.desc}</p>
                <small>📍 {item.info.tempat}</small>
                <small>📅 {item.info.tanggal}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="collage-caption">
          <div>
            <p>
              <strong>Moments &amp; Memories</strong> Kumpulan momen selama perjalanan
              kuliah, magang, dan eksplorasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;