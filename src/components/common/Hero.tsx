import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleInternalNavigation = (path: string) => {
    try {
      if (navigate) {
        navigate(path);
      } else {
        window.location.href = path;
      }
    } catch (error) {
      console.error('Error al navegar:', error);
      window.location.href = path;
    }
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
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
      <div className="hero-content">
        <div className="hero-text">
          <h1 ref={titleRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
            Gestión de hardware empresarial
            <span 
              ref={highlightRef}
              className="hero-highlight"
            >
              alrededor del mundo
            </span>
          </h1>
          <br />
          <p ref={paragraphRef}>
            Optimiza la adquisición y gestión de PC para empresas en más de 130 países. Realice onboarding, offboarding, gestión y recompra con Bytebox.
          </p>
          <button
            ref={ctaRef}
            className="cta-button"
            onClick={() => handleInternalNavigation('/contacto')}
          >
            Solicitar cotización
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;