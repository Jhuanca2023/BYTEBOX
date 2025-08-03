import { SEO } from '../SEO';
import Header from '../common/Header';
import Footer from '../common/Footer';
import './SobreNosotros.css';
import nosotros3Img from '../../assets/images/nosotros3.png';


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
    <section className="hero-section sobre-nosotros-hero-bg">
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-duration="800">
          Conoce <span className="hero-highlight" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">nuestra historia</span>
        </h1>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          Descubre la historia, misión y valores que nos impulsan a conectar empresas y personas a través de la tecnología.
        </p>
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
        <section className="feature-card">
          <div className="card-content-wrapper">
            <div className="card-image">

              <img src="https://imgs.search.brave.com/LEunqW-oXi2Pcsy-l0KlF3JbVkJTh0lfUpsS_bJFQ4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTI5ODIz/NzgvNjcxNDEvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NzE0MTQ4/Mjgtc3RvY2stcGhv/dG8tYW1hemVkLWlu/dGVycmFjaWFsLWNv/dXBsZS1vcGVuLW1v/dXRoLmpwZw" alt="Personas" className="person-img" />
              <div className="card-badge">
                <span className="badge-icon">📈</span>
                <span className="badge-text">WELCOMING</span>
              </div>
            </div>
            <div className="card-text">
              <div className="card-header">
                <h3 className="card-subtitle">El día que...</h3>
                <h2 className="card-title">encontraste tu lugar en nuestro equipo.</h2>
              </div>
              <p className="card-description">
                Bytebox nació con la visión de transformar la manera en que las empresas acceden a tecnología de calidad. Desde 2018, hemos crecido hasta operar en más de 120 países, construyendo relaciones sólidas y duraderas.
              </p>
              <div className="card-quote">
                <blockquote>
                  "El viernes de mi primera semana, le dije a mi esposa que en mis 20+ años de carrera, nunca me sentí tan bienvenido en un nuevo trabajo."
                </blockquote>
                <div className="quote-author">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Team" className="author-img" />
                  <div className="author-info">
                    <span className="author-name">Carlos M.</span>
                    <span className="author-role">Cliente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Misión */}
        <section className="feature-card reverse">
          <div className="card-content-wrapper">
            <div className="card-text">
              <div className="card-header">
                <h3 className="card-subtitle">El día que...</h3>
                <h2 className="card-title">sales de tu zona de confort.</h2>
              </div>
              <p className="card-description">
                Nuestra misión es brindar productos tecnológicos de vanguardia que potencien la conectividad y productividad. No podemos construir algo excepcional jugando a lo seguro. Desafiamos nuestras suposiciones.
              </p>
              <div className="card-quote">
                <blockquote>
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
            <div className="card-image">

              <img src="https://cdn.create.vista.com/api/media/medium/687613252/stock-photo-cheerful-young-multicultural-women-using-smartphones-standing-orange-background?token=" alt="Personas" className="person-img" />
              <div className="card-badge empowering">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">EMPOWERING</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conectividad Global */}
        <section className="feature-card">
          <div className="card-content-wrapper">
            <div className="card-image">
              <img src={nosotros3Img} alt="Conectividad" className="feature-img" />

              <div className="card-badge curious">
                <span className="badge-icon">🔍</span>
                <span className="badge-text">CURIOUS</span>
              </div>
            </div>
            <div className="card-text">
              <div className="card-header">
                <h3 className="card-subtitle">El día que...</h3>
                <h2 className="card-title">alcanzas el siguiente nivel.</h2>
              </div>
              <p className="card-description">
                Conectividad Global significa que los equipos tecnológicos son habilitadores de la conectividad mundial. No solo vendemos productos; creamos oportunidades. Estamos listos para llevarte al siguiente nivel.
              </p>
              <div className="card-quote">
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