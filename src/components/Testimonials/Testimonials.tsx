import { useState, useEffect, useRef } from 'react';
import SeoComponent from '../SEO';
import './Testimonials.css';
import testimonials from '../../assets/data/testimonials.json';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Detectar si es móvil/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll infinito para móviles/tablets
  useEffect(() => {
    if (!isMobile || !sliderRef.current) return;

    const slider = sliderRef.current;
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;
      
      const { scrollLeft, scrollWidth } = slider;
      const singleSetWidth = scrollWidth / 5; // Cada set de testimonios (ahora son 5)
      const tolerance = 20; // Tolerancia para evitar loops
      
      // Si llegó muy cerca del final (quinto set)
      if (scrollLeft >= singleSetWidth * 4 - tolerance) {
        isScrolling = true;
        slider.scrollLeft = singleSetWidth * 2; // Saltar al tercer set
        setTimeout(() => { isScrolling = false; }, 50);
      }
      // Si llegó muy cerca del inicio (primer set)
      else if (scrollLeft <= singleSetWidth + tolerance) {
        isScrolling = true;
        slider.scrollLeft = singleSetWidth * 3; // Saltar al cuarto set
        setTimeout(() => { isScrolling = false; }, 50);
      }
    };

    slider.addEventListener('scroll', handleScroll);
    
    // Inicializar en el tercer set (medio) para permitir scroll en ambas direcciones
    setTimeout(() => {
      const singleSetWidth = slider.scrollWidth / 5;
      slider.scrollLeft = singleSetWidth * 2; // Empezar en el tercer set
    }, 100);

    return () => slider.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Crear carrusel infinito para ambos casos
  const visible = isMobile ? 
    [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials] : // Quintuplicar para móvil
    [
      testimonials[(index + 0) % testimonials.length],
      testimonials[(index + 1) % testimonials.length], 
      testimonials[(index + 2) % testimonials.length],
    ]; // En desktop mostrar 3 con flechas

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonios" className="testimonials-section">
      <SeoComponent 
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
      <div className="testimonials-slider" ref={sliderRef}>
        {!isMobile && (
          <button className="slider-arrow left" onClick={prev} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        {visible.map((t, i) => (
          <div className="testimonial-card" key={`testimonial-${i}-${t.name}`}>
            <p className="testimonial-text"><em>{t.text}</em></p>
            <div className="testimonial-user">
              <img 
                src={t.logo.startsWith('http') ? t.logo : `/src/assets/images/testimonials/${t.logo}`} 
                alt={t.name} 
                className="testimonial-logo" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/100';
                }}
              />
              <div>
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
        {!isMobile && (
          <button className="slider-arrow right" onClick={next} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default Testimonials;