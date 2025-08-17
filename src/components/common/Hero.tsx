import React, { useEffect, useRef } from 'react';
import womanImage from '../../assets/images/mujer.png';

const Bubbles = () => {
  return (
    <>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </>
  );
};

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    // Desplazamiento suave al hacer clic en el botón Cotiza
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Función para animar elementos al hacer scroll
    const animateOnScroll = () => {
      const elements = [
        titleRef.current,
        highlightRef.current,
        paragraphRef.current,
        ctaRef.current
      ].filter(Boolean) as HTMLElement[];

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Configurar estilos iniciales para la animación
    const elements = [
      { ref: titleRef, delay: 0.2 },
      { ref: highlightRef, delay: 0.4 },
      { ref: paragraphRef, delay: 0.6 },
      { ref: ctaRef, delay: 0.8 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(20px)';
        ref.current.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;
      }
    });

   
    window.addEventListener('scroll', animateOnScroll);
   
    animateOnScroll();

    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section className="hero-section home-hero">
      <Bubbles />
      <div className="hero-content">
        <div className="hero-text">
          <h1 ref={titleRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Impulsa tu Frontera'<br />
            <span 
              ref={highlightRef}
              className="hero-highlight"
              style={{
                display: 'inline-block',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              Equipa tu talento global
            </span>
          </h1>
          <p 
            ref={paragraphRef}
            style={{
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            Gestiona y equipa tu talento global de forma simple y eficiente en más de 120 países.
          </p>
          <button 
            ref={ctaRef}
            className="hero-cta" 
            onClick={scrollToContact}
            style={{
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            Cotiza
          </button>
        </div>
        <div className="hero-image-container">
          <img 
            src={womanImage} 
            alt="Mujer" 
            className="hero-woman"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;