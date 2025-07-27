import { useState, useEffect, useRef } from 'react';
import styles from './PlatformSection.module.css';
import MacbookMockup from './MacbookMockup';
import PlatformCircleSteps from './PlatformCircleSteps';

const steps = [
  {
    title: 'Centraliza tu gestión',
    desc: 'Controla todo tu hardware desde un solo lugar.'
  },
  {
    title: 'Solicita en segundos',
    desc: 'Pide equipos y servicios de forma instantánea.'
  },
  {
    title: 'Entrega global rápida',
    desc: 'Recibe y gestiona envíos en más de 120 países.'
  },
  {
    title: 'Optimiza y renueva',
    desc: 'Recupera valor y mantén tu tecnología actualizada.'
  }
];

const PlatformSection = () => {

  const [rotationIdx, setRotationIdx] = useState(2); 
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para animar la sección al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getActiveStep = () => ((rotationIdx % steps.length) + steps.length) % steps.length;

  const handleArrow = (dir: 'up' | 'down') => {
    if (dir === 'up') {
      setRotationIdx((prev) => prev - 1);
    } else {
      setRotationIdx((prev) => prev + 1);
    }
  };

  const handleSetStep = (idx: number) => {
    
    const diff = idx - getActiveStep();
    setRotationIdx((prev) => prev + diff);
  };

  const activeStep = getActiveStep();

  return (
    <section 
      ref={sectionRef}
      className={`${styles.platformSection} ${isVisible ? styles.visible : ''}`} 
      id="platform"
    >
      <h2 className={styles.bgTitle}>OUR PLATFORM</h2>
      <div className={styles.contentWrapper} style={{alignItems: 'center'}}> {/* Centrado vertical */}
        <div className={styles.circleCol} style={{ position: 'relative', minWidth: 320, maxWidth: 340, display: 'flex', alignItems: 'center', height: 400, justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', height: 220 }}>
            <PlatformCircleSteps
              rotationIdx={rotationIdx}
              setRotationIdx={setRotationIdx}
              steps={steps}
              onSelectStep={handleSetStep}
            />
            <div
              className={styles.stepTextClean}
              style={{
                position: 'absolute',
                left: 280,
                top: 55,
                minWidth: 220,
                maxWidth: 260,
                textAlign: 'left',
                background: 'none',
                boxShadow: 'none',
                padding: 0
              }}
            >
              <button className={styles.arrowBtn} onClick={() => handleArrow('up')} aria-label="Anterior" style={{background:'none',border:'none',cursor:'pointer',display:'block',margin:'0 auto'}}>
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6h12z" fill="#222"/></svg>
              </button>
              <h3 className={styles.stepTitleClean}>{steps[activeStep].title}</h3>
              <p className={styles.stepDescClean}>{steps[activeStep].desc}</p>
              <button className={styles.arrowBtn} onClick={() => handleArrow('down')} aria-label="Siguiente" style={{background:'none',border:'none',cursor:'pointer',display:'block',margin:'8px auto 0 auto'}}>
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 16l6-6H6z" fill="#222"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.laptopCol}>
          <MacbookMockup>
            {/* imagen  dentro de la laptop */}
            <img src="/src/assets/images/plataforma.png" alt="Demo plataforma" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px'}} />
          </MacbookMockup>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.ctaButton} onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}>
          Cotiza <span className={styles.arrow}>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default PlatformSection; 