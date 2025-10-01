import React, { useState, useEffect } from 'react';
import SEO from '../SEO';
import { Header, Footer } from '../layout';
import './SobreNosotros.css';
import { FaChartLine, FaBolt, FaUsers } from 'react-icons/fa';
import nosotrosData from '../../assets/data/nosotros.json';

interface NosotrosData {
  heroImages: string[];
  valoresImages: string[];
  compromisoImages: string[];
}

const SobreNosotros: React.FC = () => {
  // Estados para controlar los índices de los carruseles
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentCommitmentImageIndex, setCurrentCommitmentImageIndex] = useState<number>(0);
  const [currentCompromisoImageIndex, setCurrentCompromisoImageIndex] = useState<number>(0);

  // Extraer las imágenes del JSON
  const { heroImages, valoresImages, compromisoImages } = nosotrosData as NosotrosData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommitmentImageIndex(prev => (prev + 1) % valoresImages.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [valoresImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompromisoImageIndex(prev => (prev + 1) % compromisoImages.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [compromisoImages.length]);
  return (
    <>
      <SEO 
        title="Sobre Nosotros - ByteBOX | Conoce Nuestra Historia"
        description="Conoce la historia, misión y valores de ByteBOX. Descubre cómo conectamos empresas y personas a través de soluciones tecnológicas innovadoras."
        keywords="historia de ByteBOX, misión y valores, sobre nosotros, empresa tecnológica, innovación, tecnología, equipo de ByteBOX"
        canonicalUrl="https://bytebox.com/sobre-nosotros"
      />
      <Header />
      
      {/* HERO SECTION */}
      <section className="sobre-nosotros-hero-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <h1 className="fw-bold text-white mb-4 mt-4" data-aos="fade-up" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem' }}>
                CONOCE MÁS <span style={{ color: '#46d1f0', fontFamily: 'Orbitron, sans-serif' }}>SOBRE NUESTRA HISTORIA Y VALORES</span>
              </h1>
              <br />
              <p className="lead text-white mb-0" data-aos="fade-up" data-aos-delay="100">
                Líder internacional en accesorios y equipos tecnológicos de alta calidad. Con presencia global, ofrecemos dispositivos móviles, periféricos y soluciones de conectividad innovadoras. Nuestro compromiso es impulsar la transformación digital con productos que mejoran la productividad y conectividad en el mundo actual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS ANIMADOS - CARRUSEL MODERNO */}
      <section className="logos-section">
        <div className="logos-content">
          <h2 className="logos-title" data-aos="fade-up" data-aos-duration="800">
            Marcas que <span className="brand" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">confían en nosotros</span>
          </h2>
          <p className="logos-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Ofrecemos las mejores marcas tecnológicas del mundo
          </p>
          
          <div className="logos-carousel">
            <div className="logos-track">
              {[...Array(3)].map((_, index) => (
                <React.Fragment key={index}>
                  <div className="logo-card">
                    <img src="https://cdn.worldvectorlogo.com/logos/apple-11.svg" alt="Apple" className="logo-img" style={{ height: '30px' }} />
                  </div>
                  <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
                    <span style={{ color: '#E2231A', fontWeight: '700', fontSize: '20px', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>Lenovo</span>
                  </div>
                  <div className="logo-card">
                    <img src="https://cdn.worldvectorlogo.com/logos/dell-2.svg" alt="Dell" className="logo-img" style={{ height: '30px' }} />
                  </div>
                  <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://www.logo.wine/a/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.svg" alt="HP" className="logo-img" style={{ height: '30px' }} />
                  </div>
                  <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
                    <span style={{ color: '#000000', fontWeight: '900', fontSize: '22px', letterSpacing: '1px', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>ASUS</span>
                  </div>
                  <div className="logo-card">
                    <img src="https://cdn.worldvectorlogo.com/logos/msi-5.svg" alt="MSI" className="logo-img" style={{ height: '30px' }} />
                  </div>
                  <div className="logo-card">
                    <img src="https://cdn.worldvectorlogo.com/logos/logitech-2.svg" alt="Logitech" className="logo-img" style={{ height: '30px' }} />
                  </div>
                  <div className="logo-card">
                    <img src="https://cdn.worldvectorlogo.com/logos/jbl-1.svg" alt="JBL" className="logo-img" style={{ height: '30px' }} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* MAIN CONTENT */}
      <main className="main-content">
        <div className="container">
          {/* Nuestra Marca */}
          <section className="feature-card" data-aos="fade-up" data-aos-delay="50">
            <div className="card-content-wrapper">
              <div className="card-image" data-aos="fade-up" data-aos-delay="100" style={{ position: 'relative', height: '700px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <img 
                  src={heroImages[currentImageIndex]} 
                  alt="Nuestro equipo" 
                  className="person-img" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: '10px'
                  }}
                />
                <div className="card-badge" data-aos="fade-up" data-aos-delay="150">
                  <FaChartLine className="badge-icon" />
                  <span className="badge-text">WELCOMING</span>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px'
                }}>
                  {heroImages.map((_: string, index: number) => (
                    <div 
                      key={index}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: currentImageIndex === index ? '#46d1f0' : '#ffffff80',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        border: 'none',
                        padding: 0
                      }}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="card-text" data-aos="fade-up" data-aos-delay="200">
                <div className="card-header">
                  <h3 className="card-subtitle" data-aos="fade-up" data-aos-delay="250">NUESTRA</h3>
                  <h2 className="card-title" data-aos="fade-up" data-aos-delay="300">MARCA</h2>
                </div>
                <p className="card-description" data-aos="fade-up" data-aos-delay="350">
                  ByteBOX es una empresa internacional líder en la comercialización de accesorios y equipos tecnológicos de alta calidad. Con una fuerte presencia global y un compromiso con la innovación, ByteBOX se dedica a proporcionar soluciones tecnológicas avanzadas que mejoran la vida de las personas y las empresas. Nuestra oferta incluye desde dispositivos móviles y periféricos de computadora hasta soluciones de conectividad y accesorios inteligentes, todos diseñados para satisfacer las demandas del mundo moderno.
                </p>
                <div className="card-quote" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="mt-4" data-aos="fade-up" data-aos-delay="450">MISIÓN</h3>
                  <p className="card-description" data-aos="fade-up" data-aos-delay="500">
                    Nuestra misión es brindar productos tecnológicos de vanguardia que potencien la conectividad, productividad y entretenimiento de nuestros clientes. Nos comprometemos a ofrecer una experiencia de compra excepcional, combinando innovación, calidad y servicio al cliente en todos los mercados en los que operamos, con un enfoque especial en satisfacer las necesidades del mercado peruano.
                  </p>
                  <h3 className="mt-4" data-aos="fade-up" data-aos-delay="550">VISIÓN</h3>
                  <p className="card-description" data-aos="fade-up" data-aos-delay="600">
                    Ser la empresa líder en la distribución de accesorios y equipos tecnológicos en Perú y América Latina, reconocida por nuestra capacidad para anticipar y satisfacer las necesidades tecnológicas cambiantes de nuestros clientes. Aspiramos a construir un futuro donde la tecnología esté al alcance de todos, impulsando el progreso y mejorando la calidad de vida.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Nuestros Valores */}
          <section className="feature-card reverse" data-aos="fade-up" data-aos-delay="50">
            <div className="card-content-wrapper">
              <div className="card-text" data-aos="fade-up" data-aos-delay="100">
                <div className="card-header">
                  <h3 className="card-subtitle" data-aos="fade-up" data-aos-delay="150">NUESTROS</h3>
                  <h2 className="card-title" data-aos="fade-up" data-aos-delay="200">VALORES</h2>
                </div>
                <div className="values-list" data-aos="fade-up" data-aos-delay="250">
                  <div className="value-item">
                    <FaBolt className="value-icon" />
                    <div>
                      <h4>Tecnología de Vanguardia</h4>
                      <p>Ofrecemos los últimos dispositivos y accesorios tecnológicos, manteniéndonos a la vanguardia de las tendencias globales en electrónica de consumo.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <FaChartLine className="value-icon" />
                    <div>
                      <h4>Garantía y Confianza</h4>
                      <p>Productos 100% originales con garantía oficial. En BYTEBOX respaldamos cada venta con soporte técnico especializado.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <FaUsers className="value-icon" />
                    <div>
                      <h4>Asesoría Personalizada</h4>
                      <p>Nuestro equipo experto te guiará para encontrar la mejor solución tecnológica adaptada a tus necesidades específicas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-image" data-aos="fade-up" data-aos-delay="100" style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <img 
                  src={valoresImages[currentCommitmentImageIndex]} 
                  alt="Nuestro Compromiso" 
                  className="person-img" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: '10px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 2
                }}>
                  {valoresImages.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCommitmentImageIndex(index)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: currentCommitmentImageIndex === index ? '#fff' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'background-color 0.3s'
                      }}
                      aria-label={`Ir a la imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Nuestro Compromiso */}
          <section className="feature-card" data-aos="fade-up" data-aos-delay="50">
            <div className="card-content-wrapper">
              <div className="card-image" data-aos="fade-up" data-aos-delay="100" style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <img 
                  src={compromisoImages[currentCompromisoImageIndex]} 
                  alt="Nuestro Compromiso" 
                  className="person-img" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: '10px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 2
                }}>
                  {compromisoImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCompromisoImageIndex(index)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: currentCompromisoImageIndex === index ? '#fff' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'background-color 0.3s'
                      }}
                      aria-label={`Ir a la imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="card-text" data-aos="fade-up" data-aos-delay="200">
                <div className="card-header">
                  <h3 className="card-subtitle" data-aos="fade-up" data-aos-delay="250">NUESTRO</h3>
                  <h2 className="card-title" data-aos="fade-up" data-aos-delay="300">COMPROMISO</h2>
                </div>
                <div className="commitment-content" data-aos="fade-up" data-aos-delay="350">
                  <p>En ByteBOX, nos comprometemos a:</p>
                  <ul>
                    <li>Ofrecer productos tecnológicos de última generación</li>
                    <li>Brindar un servicio al cliente excepcional</li>
                    <li>Mantener los más altos estándares de calidad</li>
                    <li>Innovar constantemente para satisfacer las necesidades del mercado</li>
                    <li>Contribuir al desarrollo tecnológico de la región</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SobreNosotros;
