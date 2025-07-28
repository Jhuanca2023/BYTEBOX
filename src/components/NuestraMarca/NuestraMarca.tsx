import { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Products from '../Products/Products';
import productImagesData from '../../assets/data/productImages.json';
import valueIconsData from '../../assets/data/valueIcons.json';
import './NuestraMarca.css';

const NuestraMarca = () => {
  const { images: productImages } = productImagesData;
  const { icons: valueIcons } = valueIconsData;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [productImages]);

  return (
  <>
    <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section nuestra-marca-hero-bg">
      <div className="hero-content">
        <h1>Descubre <span className="hero-highlight">nuestra esencia</span></h1>
        <p>Innovación, confianza y tecnología para potenciar tu crecimiento.</p>
      </div>
    </section>

    {/* SECCIÓN MODERNA Y LLAMATIVA */}
    <main className="main-content">
      {/* Sección de Valores con diseño moderno */}
      <section className="modern-values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="modern-title">
              <span className="title-gradient">Nuestra Esencia</span>
            </h2>
            <p className="modern-subtitle">
              <span className="text-black">Transformamos</span>{' '}
              <span className="text-gray">el futuro</span>{' '}
              <span className="text-blue">digital</span>
            </p>
          </div>
          
          <div className="values-grid">
            {valueIcons.map((icon, index) => (
              <div 
                key={icon.id}
                className={`value-card card-${index + 1}`}
              >
                <div className="card-icon">
                  <div className="icon-circle">
                    <img 
                      src={icon.imageUrl} 
                      alt={icon.title}
                      className="product-image"
                    />
                  </div>
                </div>
                <h3 className="card-title">{icon.title}</h3>
                <p className="card-description">
                  {icon.title === 'Innovación Constante' && 'Pioneros en tecnología, siempre un paso adelante en soluciones disruptivas'}
                  {icon.title === 'Compromiso Total' && 'Cada proyecto es único, cada cliente es prioritario, cada solución es perfecta'}
                  {icon.title === 'Alcance Global' && 'Presencia mundial con enfoque local, conectando culturas y mercados'}
                  {icon.title === 'Calidad Garantizada' && 'Excelencia en cada detalle, calidad que se ve y se siente en cada producto'}
                </p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Misión con diseño futurista */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-visual">
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
              </div>
              <div className="headphone-container">
                {productImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className={`floating-headphone ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mission-text">
              <h2 className="mission-title">
                <span className="text-black">Transformamos</span>{' '}
                <span className="text-gray">el futuro</span>{' '}
                <span className="text-blue">digital</span>
              </h2>
              <p className="mission-description">
                En ByteBox, somos líderes en la distribución de productos tecnológicos y accesorios 
                de vanguardia. Cada producto que ofrecemos está cuidadosamente seleccionado para 
                brindar la mejor calidad, innovación y rendimiento que impulse el éxito de 
                nuestros clientes.
              </p>
              
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Productos Vendidos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Satisfacción Cliente</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Soporte Premium</span>
                </div>
              </div>
              
              <button className="cta-button">
                <span>Explora Nuestros Productos</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* PRODUCTOS DESTACADOS */}
    <Products />
    
    <Footer />
  </>
  );
};

export default NuestraMarca; 