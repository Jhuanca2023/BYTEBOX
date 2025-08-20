import SEO from '../SEO';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './SobreNosotros.css';
import nosotros3Img from '../../assets/images/nosotros3.png';
import { FaChartLine, FaBolt, FaSearch, FaUsers, FaQuoteLeft } from 'react-icons/fa';

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
            {/* Marcas específicas de ByteBox con logos reales */}
            <div className="logo-card">
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" alt="Apple" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt77c24f32eba61d8c/65e85341504e0303f4f1bb2c/falabella.com_green_icon_mobile.svg" alt="Falabella" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="https://coolboxpe.vtexassets.com/assets/vtex/assets-builder/coolboxpe.store-theme/0.0.84/logo___6539742abaf840cb31bc3e646607adf5.svg" alt="Coolbox" className="logo-img coolbox-logo" />
            </div>
            <div className="logo-card oem-card">
              <span className="logo-text oem-text">OEM</span>
            </div>
            <div className="logo-card generic-card">
              <span className="logo-text generic-text">GENERICO</span>
            </div>
            
            {/* Duplicar para efecto infinito */}
            <div className="logo-card">
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" alt="Apple" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt77c24f32eba61d8c/65e85341504e0303f4f1bb2c/falabella.com_green_icon_mobile.svg" alt="Falabella" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="https://coolboxpe.vtexassets.com/assets/vtex/assets-builder/coolboxpe.store-theme/0.0.84/logo___6539742abaf840cb31bc3e646607adf5.svg" alt="Coolbox" className="logo-img coolbox-logo" />
            </div>
            <div className="logo-card oem-card">
              <span className="logo-text oem-text">OEM</span>
            </div>
            <div className="logo-card generic-card">
              <span className="logo-text generic-text">GENERICO</span>
            </div>
            
            {/* Tercera repetición para carrusel más fluido */}
            <div className="logo-card">
              <img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" alt="Apple" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt77c24f32eba61d8c/65e85341504e0303f4f1bb2c/falabella.com_green_icon_mobile.svg" alt="Falabella" className="logo-img" />
            </div>
            <div className="logo-card">
              <img src="https://coolboxpe.vtexassets.com/assets/vtex/assets-builder/coolboxpe.store-theme/0.0.84/logo___6539742abaf840cb31bc3e646607adf5.svg" alt="Coolbox" className="logo-img coolbox-logo" />
            </div>
            <div className="logo-card oem-card">
              <span className="logo-text oem-text">OEM</span>
            </div>
            <div className="logo-card generic-card">
              <span className="logo-text generic-text">GENERICO</span>
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
                  <FaQuoteLeft className="quote-icon" />
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
                  <FaQuoteLeft className="quote-icon" />
                  "La mayoría de las empresas hablan sobre cómo resuelven problemas interesantes. Escribo un blog sobre las soluciones que usamos para resolver esos problemas."
                </blockquote>
                <div className="quote-author">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Team" className="author-img" />
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
                  <FaQuoteLeft className="quote-icon" />
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