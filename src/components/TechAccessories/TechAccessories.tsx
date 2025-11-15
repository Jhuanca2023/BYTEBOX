import { useEffect } from 'react';
import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './TechAccessories.css';
 import techImage from '../../assets/images/lapto-.webp';
//const techImage = 'https://pngimg.com/uploads/laptop/laptop_PNG101774.png';

const TechAccessories = () => {
  // Efecto para manejar el scroll cuando se carga desde otra ruta
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#accesorios') {
      const element = document.getElementById('accesorios');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div id="accesorios">
      <AnimatedSection className="tech-accessories-section" animationType="fadeInUp">
      <h2 className="tech-accessories-title">
        <span style={{ color: '#000' }}>TECH</span>{' '}
        <span style={{ color: '#46d1f0' }}>HARDWARE</span>
      </h2>
      <div className="tech-accessories-container">
        <AnimatedSection 
          className="tech-accessories-image" 
          animationType="fadeInLeft"
          delay={200}
        >
          <div className="hover-scale">
            <img 
              src={techImage} 
              alt="Laptop con accesorios tecnológicos" 
              className="tech-accessories-img"
            />
          </div>
        </AnimatedSection>
        
        <AnimatedSection 
          className="tech-accessories-content" 
          animationType="fadeInRight"
          delay={400}
        >
          <div className="staggered-item">
            <h2 className="tech-accessories-subtitle">
              Equipos tecnológicos de alto rendimiento
            </h2>
          </div>
          <div className="staggered-item">
            <p className="tech-accessories-description">
              Descubre nuestra selección de equipos tecnológicos diseñados para potenciar la productividad de tu negocio. Ofrecemos soluciones integrales que se adaptan a las necesidades específicas de cada empresa.
            </p>
            <button 
              className="falabella-button"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Cotiza con nosotros
            </button>
          </div>
        </AnimatedSection>
      </div>
      </AnimatedSection>
    </div>
  );
};

export default TechAccessories;
