import SEO from '../SEO';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './SobreNosotros.css';
import nosotros3Img from '../../assets/images/nosotros3.png';
import { FaChartLine, FaBolt, FaSearch, FaUsers } from 'react-icons/fa';

const SobreNosotros = () => (
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
          Distribuidores oficiales de las mejores marcas tecnológicas del mundo
        </p>
        
        <div className="logos-carousel">
          <div className="logos-track">
            {/* Primera ronda de logos */}
            <div className="logo-card">
              <img src="https://cdn.worldvectorlogo.com/logos/apple-11.svg" alt="Apple" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
              <span style={{ 
                color: '#E2231A', 
                fontWeight: '700', 
                fontSize: '20px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif'
              }}>Lenovo</span>
            </div>
            <div className="logo-card">
              <img src="https://cdn.worldvectorlogo.com/logos/dell-2.svg" alt="Dell" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://www.logo.wine/a/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.svg" alt="HP" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
              <span style={{ 
                color: '#000000', 
                fontWeight: '900', 
                fontSize: '22px',
                letterSpacing: '1px',
                fontFamily: 'Arial, sans-serif',
                textTransform: 'uppercase'
              }}>ASUS</span>
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
            
            {/* Segunda ronda (duplicado para efecto continuo) */}
            <div className="logo-card">
              <img src="https://cdn.worldvectorlogo.com/logos/apple-11.svg" alt="Apple" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
              <span style={{ 
                color: '#E2231A', 
                fontWeight: '700', 
                fontSize: '20px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif'
              }}>Lenovo</span>
            </div>
            <div className="logo-card">
              <img src="https://cdn.worldvectorlogo.com/logos/dell-2.svg" alt="Dell" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://www.logo.wine/a/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.svg" alt="HP" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
              <span style={{ 
                color: '#000000', 
                fontWeight: '900', 
                fontSize: '22px',
                letterSpacing: '1px',
                fontFamily: 'Arial, sans-serif',
                textTransform: 'uppercase'
              }}>ASUS</span>
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
            
            {/* Tercera ronda (para efecto continuo) */}
            <div className="logo-card">
              <img src="https://cdn.worldvectorlogo.com/logos/apple-11.svg" alt="Apple" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
              <span style={{ 
                color: '#E2231A', 
                fontWeight: '700', 
                fontSize: '20px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: 'Arial, sans-serif'
              }}>Lenovo</span>
            </div>
            <div className="logo-card">
              <img src="https://cdn.worldvectorlogo.com/logos/dell-2.svg" alt="Dell" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="https://www.logo.wine/a/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.svg" alt="HP" className="logo-img" style={{ height: '30px' }} />
            </div>
            <div className="logo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px 15px' }}>
              <span style={{ 
                color: '#000000', 
                fontWeight: '900', 
                fontSize: '22px',
                letterSpacing: '1px',
                fontFamily: 'Arial, sans-serif',
                textTransform: 'uppercase'
              }}>ASUS</span>
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
          </div>
        </div>
      </div>
    </section>
  
    {/* SECCIONES PRINCIPALES - DISEÑO ALTERNADO MODERNO */}
    <main className="main-content">
      <div className="container">
        {/* Nuestra Historia */}
        <section className="feature-card" data-aos="fade-up" data-aos-delay="50">
          <div className="card-content-wrapper">
            <div className="card-image" data-aos="fade-up" data-aos-delay="100">
              <img src="https://imgs.search.brave.com/LEunqW-oXi2Pcsy-l0KlF3JbVkJTh0lfUpsS_bJFQ4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTI5ODIz/NzgvNjcxNDEvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NzE0MTQ4/Mjgtc3RvY2stcGhv/dG8tYW1hemVkLWlu/dGVycmFjaWFsLWNv/dXBsZS1vcGVuLW1v/dXRoLmpwZw" alt="Personas" className="person-img" />
              <div className="card-badge" data-aos="fade-up" data-aos-delay="150">
                <FaChartLine className="badge-icon" />
                <span className="badge-text">WELCOMING</span>
              </div>
            </div>
            <div className="card-text" data-aos="fade-up" data-aos-delay="200">
              <div className="card-header">
                <h3 className="card-subtitle" data-aos="fade-up" data-aos-delay="250">El día que...</h3>
                <h2 className="card-title" data-aos="fade-up" data-aos-delay="300">encontraste tu lugar en nuestro equipo.</h2>
              </div>
              <p className="card-description" data-aos="fade-up" data-aos-delay="350">
                Bytebox nació con la visión de transformar la manera en que las empresas acceden a tecnología de calidad. Desde 2018, hemos crecido hasta operar en más de 120 países, construyendo relaciones sólidas y duraderas.
              </p>
              <div className="card-quote" data-aos="fade-up" data-aos-delay="400">
                <blockquote>
                  "El viernes de mi primera semana, le dije a mi esposa que en mis 20+ años de carrera, nunca me sentí tan bienvenido en un nuevo trabajo."
                </blockquote>
                <div className="quote-author">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Team" className="author-img" />
                  <div className="author-info">
                    <FaUsers className="author-icon" />
                    <span className="author-name">Carlos M.</span>
                    <span className="author-role">Cliente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Misión */}
        <section className="feature-card reverse" data-aos="fade-up" data-aos-delay="50">
          <div className="card-content-wrapper">
            <div className="card-text" data-aos="fade-up" data-aos-delay="100">
              <div className="card-header">
                <h3 className="card-subtitle" data-aos="fade-up" data-aos-delay="150">El día que...</h3>
                <h2 className="card-title" data-aos="fade-up" data-aos-delay="200">sales de tu zona de confort.</h2>
              </div>
              <p className="card-description" data-aos="fade-up" data-aos-delay="250">
                Nuestra misión es brindar productos tecnológicos de vanguardia que potencien la conectividad y productividad. No podemos construir algo excepcional jugando a lo seguro. Desafiamos nuestras suposiciones.
              </p>
              <div className="card-quote" data-aos="fade-up" data-aos-delay="300">
                <blockquote>
                  "La mayoría de las empresas hablan sobre cómo resuelven problemas interesantes. Escribo un blog sobre las soluciones que usamos para resolver esos problemas."
                </blockquote>
                <div className="quote-author">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Team" className="author-img" />
                  <div className="author-info">
                    <span className="author-name">Ana L.</span>
                    <span className="author-role">Patrocinadora</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-image" data-aos="fade-up" data-aos-delay="100">
              <img src="https://cdn.create.vista.com/api/media/medium/687613252/stock-photo-cheerful-young-multicultural-women-using-smartphones-standing-orange-background?token=" alt="Personas" className="person-img" />
              <div className="card-badge empowering" data-aos="fade-up" data-aos-delay="150">
                <FaBolt className="badge-icon" />
                <span className="badge-text">EMPOWERING</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conectividad Global */}
        <section className="feature-card" data-aos="fade-up" data-aos-delay="50">
          <div className="card-content-wrapper">
            <div className="card-image" data-aos="fade-up" data-aos-delay="100">
              <img src={nosotros3Img} alt="Conectividad" className="feature-img" />
              <div className="card-badge curious" data-aos="fade-up" data-aos-delay="150">
                <FaSearch className="badge-icon" />
                <span className="badge-text">CURIOUS</span>
              </div>
            </div>
            <div className="card-text" data-aos="fade-up" data-aos-delay="200">
              <div className="card-header">
                <h3 className="card-subtitle" data-aos="fade-up" data-aos-delay="250">El día que...</h3>
                <h2 className="card-title" data-aos="fade-up" data-aos-delay="300">alcanzas el siguiente nivel.</h2>
              </div>
              <p className="card-description" data-aos="fade-up" data-aos-delay="350">
                Conectividad Global significa que los equipos tecnológicos son habilitadores de la conectividad mundial. No solo vendemos productos; creamos oportunidades. Estamos listos para llevarte al siguiente nivel.
              </p>
              <div className="card-quote" data-aos="fade-up" data-aos-delay="400">
                <blockquote>
                  "ByteBox ha sido fundamental para apoyar mis objetivos profesionales y cultivar las habilidades que traje. Ser un stakeholder me permite abogar por el futuro aquí."
                </blockquote>
                <div className="quote-author">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Team" className="author-img" />
                  <div className="author-info">
                    <span className="author-name">Miguel R.</span>
                    <span className="author-role">Socio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    
    <Footer />
  </>
);

export default SobreNosotros; 