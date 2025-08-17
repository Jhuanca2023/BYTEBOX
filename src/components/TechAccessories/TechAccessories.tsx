import AnimatedSection from '../AnimatedSection/AnimatedSection';
import './TechAccessories.css';
import techImage from '../../assets/images/lapto-.png';

const TechAccessories = () => {
  return (
    <AnimatedSection className="tech-accessories-section" animationType="fadeInUp">
      <h2 className="tech-accessories-title">
        <span style={{ color: '#000' }}>TECH</span>{' '}
        <span style={{ color: '#46d1f0' }}>ACCESSORIES</span>
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
              Accesorios de alta calidad para todos tus dispositivos
            </h2>
          </div>
          <div className="staggered-item">
            <p className="tech-accessories-description">
              Explora nuestra amplia selección de accesorios tecnológicos de última generación diseñados para potenciar tu experiencia digital. Desde auriculares inalámbricos hasta cargadores portátiles, encuentra todo lo que necesitas en un solo lugar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default TechAccessories;
