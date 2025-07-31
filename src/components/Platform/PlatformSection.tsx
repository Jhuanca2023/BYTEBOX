import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './PlatformSection.module.css';
import MacbookMockup from './MacbookMockup';
import PlatformCircleSteps from './PlatformCircleSteps';
import platformSteps from '../../assets/data/platformSteps.json';
import type { StepData } from '../../interfaces/StepData';

const { steps } = platformSteps as { steps: StepData[] };

const PlatformSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Verificar si se puede navegar hacia arriba o abajo
  const canGoUp = currentStep > 0;
  const canGoDown = currentStep < steps.length - 1;

  // Función para cambiar al siguiente paso
  const goToNextStep = useCallback(() => {
    if (canGoDown) {
      setCurrentStep(prev => prev + 1);
    }
  }, [canGoDown]);

  // Función para cambiar al paso anterior
  const goToPrevStep = useCallback(() => {
    if (canGoUp) {
      setCurrentStep(prev => prev - 1);
    }
  }, [canGoUp]);

  // Efecto para manejar el teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        goToPrevStep();
      } else if (e.key === 'ArrowDown') {
        goToNextStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextStep, goToPrevStep]);

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

  return (
    <section 
      ref={sectionRef} 
      id="OUR_PLATFORM" 
      className={`${styles.platformSection} ${isVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.bgTitle}>OUR PLATFORM</h2>
      
      <div className={styles.contentWrapper}>
        {/* Columna del círculo de pasos */}
        <div className={styles.circleCol}>
          <PlatformCircleSteps 
            currentStep={currentStep}
            totalSteps={steps.length}
            onStepUp={goToPrevStep}
            onStepDown={goToNextStep}
            canGoUp={canGoUp}
            canGoDown={canGoDown}
          />
          
          <div className={styles.stepText}>
            <span className={styles.stepNumber}>0{currentStep + 1}</span>
            <h3 className={styles.stepTitle}>{steps[currentStep].title}</h3>
            <p className={styles.stepDesc}>{steps[currentStep].desc}</p>
            
            <div className={styles.arrowButtons}>
              <button 
                className={styles.arrowBtn} 
                onClick={goToPrevStep}
                disabled={!canGoUp}
                aria-label="Paso anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className={styles.arrowBtn} 
                onClick={goToNextStep}
                disabled={!canGoDown}
                aria-label="Siguiente paso"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Columna de la laptop */}
        <div className={styles.laptopCol}>
          <MacbookMockup>
            <img 
              src={steps[currentStep].image} 
              alt={steps[currentStep].title}
              className={styles.laptopImage}
            />
          </MacbookMockup>
        </div>
      </div>
      
      <div className={styles.buttonWrapper}>
        <button 
          className={styles.ctaButton} 
          onClick={() => document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'})}
        >
          Cotiza <span className={styles.arrow}>&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default PlatformSection; 