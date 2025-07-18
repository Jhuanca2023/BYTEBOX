import React from 'react';
import './Hardware.css';

const hardwareItems = [
  {
    title: 'Conectividad Global',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Experiencia Personalizada',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Innovación & Creatividad',
    img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Calidad y Confianza',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  },
];

const Hardware = () => (
  <section id="hardware" className="hardware-section">
    <h2 className="hardware-title">
    BYTEBOX<span className="light">Tecnología que une</span> <span className="bold">sin límites</span>
    </h2>
    <p className="hardware-subtitle">
    Llevamos accesorios y equipos tecnológicos de alta calidad a más personas. Diseñamos soluciones que potencian conectividad, productividad y entretenimiento — con foco en las necesidades de América Latina
    </p>
    <div className="hardware-grid">
      {hardwareItems.map((item) => (
        <div className="hardware-card" key={item.title} style={{ backgroundImage: `url(${item.img})` }}>
          <span className="hardware-card-title">{item.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Hardware; 