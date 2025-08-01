import { useState } from 'react';
import { SEO } from '../SEO';
import './Testimonials.css';
import testimonials from '../../assets/data/testimonials.json';

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
      <SEO 
        title="Testimonios - ByteBOX | Opiniones de Nuestros Clientes"
        description="Descubre lo que dicen nuestros clientes sobre ByteBOX. Lee testimonios reales de personas que han confiado en nuestros productos y servicios tecnológicos."
        keywords="testimonios de clientes, opiniones de usuarios, reseñas de productos, experiencias con ByteBOX, clientes satisfechos, valoraciones"
        canonicalUrl="https://bytebox.com/testimonios"
      />
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