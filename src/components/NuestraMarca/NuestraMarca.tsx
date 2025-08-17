import { useState, useEffect } from 'react';
import SeoComponent from '../SEO';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Products from '../Products/Products';
import productImagesData from '../../assets/data/productImages.json';
import valueIconsData from '../../assets/data/valueIcons.json';
import './NuestraMarca.css';

const NuestraMarca = () => {
  // Configuración de SEO para la página Nuestra Marca
  const { images: productImages } = productImagesData;
  const { icons: valueIcons } = valueIconsData;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Constante para el intervalo de cambio de imagen
  const IMAGE_CHANGE_INTERVAL = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % productImages.length);
    }, IMAGE_CHANGE_INTERVAL);
    
    return () => clearInterval(interval);
  }, [productImages]);

  return (
    <>
      <SeoComponent 
        title="Nuestra Marca - ByteBOX | Innovación y Calidad en Tecnología"
        description="Descubre la esencia de ByteBOX: innovación, calidad y compromiso. Conoce nuestra misión, visión y valores que nos impulsan a ofrecerte la mejor tecnología."
        keywords="marca ByteBOX, innovación tecnológica, calidad en tecnología, misión y visión, valores corporativos, historia de la empresa"
        canonicalUrl="https://bytebox.com/nuestra-marca"
      />
      <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section nuestra-marca-hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h1 className="display-4 fw-bold text-white mb-4" data-aos="fade-up">
              Descubre <span style={{ color: '#46d1f0' }}>nuestra esencia</span>
            </h1>
            <p className="lead text-white mb-0" data-aos="fade-up" data-aos-delay="100">
              Innovación, confianza y tecnología para potenciar tu crecimiento, éxito y futuro.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SECCIÓN MODERNA Y LLAMATIVA */}
    <main className="main-content">
      {/* Sección de Valores con diseño moderno */}
      <section className="modern-values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="modern-title" data-aos="fade-up" data-aos-duration="800">
              <span className="title-gradient">Nuestra Esencia</span>
            </h2>
            <p className="modern-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <span className="text-black" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">Transformamos</span>{' '}
              <span className="text-gray" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">el futuro</span>{' '}
              <span className="text-blue" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">digital</span>
            </p>
          </div>
          
          <div className="values-grid">
            {valueIcons.map((icon, index) => (
              <div 
                key={icon.id}
                className={`value-card card-${index + 1}`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={`${index * 100}`}
                data-aos-once="true"
              >
                <div 
                  className="card-icon"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={`${index * 100 + 200}`}
                  data-aos-once="true"
                >
                  <div className="icon-circle">
                    <img 
                      src={icon.imageUrl} 
                      alt={icon.title}
                      className="product-image"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={`${index * 100 + 300}`}
                      data-aos-once="true"
                    />
                  </div>
                </div>
                <h3 
                  className="card-title"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={`${index * 100 + 100}`}
                  data-aos-once="true"
                >
                  {icon.title}
                </h3>
                <p 
                  className="card-description"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={`${index * 100 + 150}`}
                  data-aos-once="true"
                >
                  {icon.title === 'Innovación Constante' && 'Pioneros en tecnología, siempre un paso adelante en soluciones disruptivas'}
                  {icon.title === 'Compromiso Total' && 'Cada proyecto es único, cada cliente es prioritario, cada solución es perfecta'}
                  {icon.title === 'Alcance Global' && 'Presencia mundial con enfoque local, conectando culturas y mercados'}
                  {icon.title === 'Calidad Garantizada' && 'Excelencia en cada detalle, calidad que se ve y se siente en cada producto'}
                </p>
                <div 
                  className="card-glow"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay={`${index * 100 + 200}`}
                  data-aos-once="true"
                ></div>
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
                {productImages.map((image, index) => {
                  const isActive = index === currentImageIndex;
                  let className = 'floating-headphone';
                  if (isActive) {
                    className = 'floating-headphone active';
                  }
                  return (
                    <img
                      key={`headphone-${index}-${image.alt}`}
                      src={image.url}
                      alt={image.alt}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
            
            <div 
              className="mission-text"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h2 
                className="mission-title"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span 
                  className="text-black"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Transformamos
                </span>{' '}
                <span 
                  className="text-gray"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  el futuro
                </span>{' '}
                <span 
                  className="text-blue"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  digital
                </span>
              </h2>
              
              <p 
                className="mission-description"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-once="true"
              >
                En ByteBox, somos líderes en la distribución de productos tecnológicos y accesorios 
                de vanguardia. Cada producto que ofrecemos está cuidadosamente seleccionado para 
                brindar la mejor calidad, innovación y rendimiento que impulse el éxito de 
                nuestros clientes.
              </p>
              
              <div 
                className="stats-row"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-once="true"
              >
                {[
                  { number: '5000+', label: 'Productos Vendidos' },
                  { number: '98%', label: 'Satisfacción Cliente' },
                  { number: '24/7', label: 'Soporte Premium' }
                ].map((stat, index) => (
                  <div 
                    key={`stat-${index}-${stat.label}`}
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={`${300 + (index * 100)}`}
                    data-aos-once="true"
                  >
                    <span 
                      className="stat-number"
                      data-aos="count-up"
                      data-aos-duration="1000"
                      data-aos-delay={`${400 + (index * 100)}`}
                      data-aos-once="true"
                    >
                      {stat.number}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className="cta-button"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-once="true"
              >
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