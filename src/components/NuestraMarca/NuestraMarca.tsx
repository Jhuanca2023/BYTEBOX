import Header from '../common/Header';
import Footer from '../common/Footer';
import Products from '../Products/Products';
import './NuestraMarca.css';

const NuestraMarca = () => (
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
              Transformamos ideas en realidades tecnológicas que impulsan el futuro
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card card-1">
              <div className="card-icon">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="card-title">Innovación Constante</h3>
              <p className="card-description">
                Pioneros en tecnología, siempre un paso adelante en soluciones disruptivas
              </p>
              <div className="card-glow"></div>
            </div>
            
            <div className="value-card card-2">
              <div className="card-icon">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="card-title">Compromiso Total</h3>
              <p className="card-description">
                Cada proyecto es único, cada cliente es prioritario, cada solución es perfecta
              </p>
              <div className="card-glow"></div>
            </div>
            
            <div className="value-card card-3">
              <div className="card-icon">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5L21 12V14L15 13.5V11.5M21 16V18L15 17.5V16M9 8.5V7L3 7.5V9L9 8.5M3 11.5L9 12V14L3 13.5V11.5M9 16V17.5L3 18V16L9 16Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="card-title">Alcance Global</h3>
              <p className="card-description">
                Presencia mundial con enfoque local, conectando culturas y mercados
              </p>
              <div className="card-glow"></div>
            </div>
            
            <div className="value-card card-4">
              <div className="card-icon">
                <div className="icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="card-title">Excelencia Garantizada</h3>
              <p className="card-description">
                Calidad premium en cada entrega, superando expectativas constantemente
              </p>
              <div className="card-glow"></div>
            </div>
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
              <div className="central-logo">
                <div className="logo-glow"></div>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)"/>
                  <path d="M2 17L12 22L22 17" stroke="url(#gradient2)" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="url(#gradient3)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1B1B1B"/>
                      <stop offset="100%" stopColor="#00A2C8"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00A2C8"/>
                      <stop offset="100%" stopColor="#FFFFFF"/>
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1B1B1B"/>
                      <stop offset="100%" stopColor="#00A2C8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="mission-text">
              <h2 className="mission-title">
                <span className="title-highlight">Transformamos</span> el futuro digital
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

export default NuestraMarca; 