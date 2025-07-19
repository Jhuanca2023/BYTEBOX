import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: '“En Bytebox encontramos un aliado estratégico para la gestión de hardware global. Su servicio es rápido, seguro y confiable.”',
    name: 'Andrés Aguilar',
    role: 'IT Manager en Zemoga',
    logo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: '“Nuestro proyecto de renovación de computadoras fue un éxito gracias a Bytebox, que optimizó logística y costos. ¡Excelente servicio!”',
    name: 'Marcelo Bevegni',
    role: 'Gerente de Tecnología en Tarmac',
    logo: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    text: '“Bytebox es un socio confiable y eficiente para las necesidades de hardware de equipos remotos. Altamente recomendados.”',
    name: 'Rebecca Salazar',
    role: 'Recursos Humanos en Stateside',
    logo: 'https://randomuser.me/api/portraits/women/65.jpg',
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
        <span className="bold">Testi</span><span className="light">monios</span> <span className="brand">de Bytebox</span>
      </h2>
      <p className="testimonials-subtitle">
        En Bytebox, nuestro enfoque siempre está en el cliente. Queremos ser un socio de confianza en el proceso de expansión global de tu empresa.
      </p>
      <div className="testimonials-slider">
        <button className="slider-arrow left" onClick={prev} aria-label="Anterior">
          <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#f5f7f9"/><path d="M22.5 27l-6-8 6-8" stroke="#b0bec5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </button>
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
        <button className="slider-arrow right" onClick={next} aria-label="Siguiente">
          <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#f5f7f9"/><path d="M15.5 11l6 8-6 8" stroke="#b0bec5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;