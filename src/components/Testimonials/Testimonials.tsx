import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: '“Trabajar con Tecspal ha sido un placer. Su comunicación fluida, rápida respuesta y actitud empática nos han facilitado la gestión de equipos globales y offboardings. Gracias a su apoyo, podemos trabajar cómodamente con colaboradores de todo el mundo”.',
    name: 'Valentina Ribas',
    role: 'Office Manager en Blend',
    logo: 'https://www.tecspal.com/_next/image?url=%2Fassets%2Flogos%2Fblend.png&w=64&q=75',
  },
  {
    text: '“Trabajamos con Tecspal en dos ocasiones y la experiencia fue excelente. Valoramos la rapidez, eficiencia en las entregas y precios razonables. Como empresa de IT que contrata internacionalmente, confiamos en Tecspal por su compromiso y confiabilidad. Esperamos seguir colaborando”.',
    name: 'Sabrina Ustinelli',
    role: 'Office Assistant en Tryolabs',
    logo: 'https://www.tecspal.com/_next/image?url=%2Fassets%2Flogos%2Ftryolabs.png&w=64&q=75',
  },
  {
    text: '“Fuimos uno de sus primeros clientes y desde entonces han demostrado ser un gran aliado, ayudándonos a optimizar nuestros procesos y brindando una experiencia impecable a nuestro equipo.”',
    name: 'Florencia Da Rosa',
    role: 'HR Manager en Prometeo',
    logo: 'https://www.tecspal.com/_next/image?url=%2Fassets%2Flogos%2Fprometeo.png&w=64&q=75',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visible = [
    testimonials[(index + 0) % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonios" className="testimonials-section">
      <h2 className="testimonials-title">
        <span className="bold">Testi</span><span className="light">monios</span> de <span className="brand">Bytebox</span>
      </h2>
      <p className="testimonials-subtitle">
        En Bytebox, nuestro enfoque siempre está en el cliente. Queremos ser un socio de confianza en el proceso de expansión global de tu empresa.
      </p>
      <div className="testimonials-slider">
        <button className="slider-arrow left" onClick={prev} aria-label="Anterior">&#8592;</button>
        {visible.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-text"><em>{t.text}</em></p>
            <div className="testimonial-user">
              <img src={t.logo} alt={t.name} className="testimonial-logo" />
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
        <button className="slider-arrow right" onClick={next} aria-label="Siguiente">&#8594;</button>
      </div>
    </section>
  );
};

export default Testimonials; 