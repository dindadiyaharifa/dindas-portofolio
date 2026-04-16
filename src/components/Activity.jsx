// src/components/Activity.jsx
import React from 'react';
import pklImage from '../assets/pkl-ut.jpeg';
// Import gambar lain jika ada, misalnya:
// import campusImage from '../assets/kampus.jpg';
// import eventImage from '../assets/event.jpg';

// Data aktivitas (ganti dengan data dan gambar asli Anda)
const activitiesData = [
  {
    id: 1,
    img: pklImage,
    info: {
      title: "PKL di PT. Maju Jaya",
      desc: "Magang IT Support - Menangani jaringan dan hardware",
      tempat: "Surabaya",
      tanggal: "Juni - Agustus 2024"
    },
    className: "big"
  },
  {
    id: 2,
    img: pklImage, // ganti dengan gambar lain
    info: {
      title: "Workshop React.js",
      desc: "Belajar fundamental React dan Hooks",
      tempat: "Kampus PENS",
      tanggal: "Januari 2025"
    },
    className: "med"
  },
  {
    id: 3,
    img: pklImage,
    info: {
      title: "Seminar AI",
      desc: "Mengenal Kecerdasan Buatan untuk Mahasiswa",
      tempat: "Online",
      tanggal: "Maret 2025"
    },
    className: "med"
  },
  {
    id: 4,
    img: pklImage,
    info: {
      title: "Himpunan Mahasiswa",
      desc: "Panitia acara Tech Talk",
      tempat: "Kampus",
      tanggal: "2024"
    },
    className: "wide"
  },
  {
    id: 5,
    img: pklImage,
    info: {
      title: "Liburan ke Bromo",
      desc: "Study tour bersama teman-teman",
      tempat: "Probolinggo",
      tanggal: "Desember 2024"
    },
    className: "med"
  },
  {
    id: 6,
    img: pklImage,
    info: {
      title: "Momen Wisuda",
      desc: "Foto bersama keluarga",
      tempat: "Gedung Serbaguna",
      tanggal: "2025"
    },
    className: "med"
  },
    {
    id: 7,
    img: pklImage,
    info: {
      title: "Momen Wisuda",
      desc: "Foto bersama keluarga",
      tempat: "Gedung Serbaguna",
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
              <strong>Moments & Memories</strong> Kumpulan momen selama perjalanan
              kuliah, magang, dan eksplorasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;