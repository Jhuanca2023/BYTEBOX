import Header from '../common/Header';
import Footer from '../common/Footer';
import './SobreNosotros.css';

const equipo = [
  { nombre: 'María González', rol: 'CEO & Fundadora', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { nombre: 'Juan Pérez', rol: 'CTO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { nombre: 'Lucía Torres', rol: 'COO', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { nombre: 'Carlos Ruiz', rol: 'CMO', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
];

const scrollToContact = () => {
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const SobreNosotros = () => (
  <>
    <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Sobre Bytebox</h1>
        <p className="hero-description">
          Somos una empresa internacional líder en tecnología, conectando personas y empresas a través de soluciones innovadoras, seguras y eficientes. ¡Impulsamos el futuro digital!
        </p>
        <ul className="hero-features">
          <li>🚀 Innovación</li>
          <li>🌎 Alcance global</li>
          <li>🤝 Atención personalizada</li>
          <li>🔒 Seguridad</li>
        </ul>
        <button className="hero-cta-button" onClick={scrollToContact}>
          Contáctanos
        </button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80" alt="Equipo Bytebox" />
      </div>
    </section>

    {/* LOGOS ANIMADOS */}
   
      <h2 className="logos-title">
        Expansión global <span className="brand">de nuestras marcas</span>
      </h2>
      <div className="logos-container">
        <div className="marquee-logos">
          {["/logos/workana.png","/logos/binance.png","/logos/qubika.png","/logos/pomelo.png","/logos/perficient.png","/logos/globant.png","/logos/infogain.png","/logos/dlocal.png"].map((src, i) => (
            <img key={i} src={src} alt="logo" className="logo-item" />
          ))}
          {/* Duplicar para efecto infinito */}
          {["/logos/workana.png","/logos/binance.png","/logos/qubika.png","/logos/pomelo.png","/logos/perficient.png","/logos/globant.png","/logos/infogain.png","/logos/dlocal.png"].map((src, i) => (
            <img key={i+100} src={src} alt="logo" className="logo-item" />
          ))}
        </div>
      </div>
  

    {/* SECCIONES PRINCIPALES */}
    <main className="main-content">
      {/* Nuestra Historia */}
      <section className="content-section">
        <div className="content-image">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80" alt="Historia Bytebox" />
        </div>
        <div className="content-text">
          <h2 className="content-title">Nuestra Historia</h2>
          <p className="content-description">
            Bytebox nació con la visión de transformar la manera en que las empresas acceden a tecnología de calidad. Desde 2018, hemos crecido hasta operar en más de 120 países, acompañando a empresas y personas en su camino hacia la transformación digital.
          </p>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="content-section">
        <div className="content-text">
          <h2 className="content-title">Nuestra Misión</h2>
          <p className="content-description">
            Nuestra misión es brindar productos tecnológicos de vanguardia que potencien la conectividad, productividad y entretenimiento de nuestros clientes. Nos comprometemos a ofrecer una experiencia de compra excepcional, combinando innovación, calidad y servicio al cliente en todos los mercados en los que operamos, con un enfoque especial en satisfacer las necesidades del mercado peruano.
          </p>
        </div>
        <div className="content-image">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="Misión Bytebox" />
        </div>
      </section>

      {/* Conectividad Global */}
      <section className="content-section">
        <div className="content-image">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" alt="Conectividad Global" />
        </div>
        <div className="content-text">
          <h2 className="content-title">Conectividad Global</h2>
          <p className="content-description">
            El concepto de "Conectividad Global" se basa en la idea de que los accesorios y equipos tecnológicos son los habilitadores de la conectividad global. Proporcionamos productos que permiten la conectividad sin límites, facilitando la comunicación y el intercambio de información a nivel global. Siempre a la vanguardia, trayendo lo último en tecnología a nuestros clientes antes que nadie.
          </p>
        </div>
      </section>
      
      {/* Nuestro Equipo */}
      <section className="team-section">
        <h2 className="team-title">Nuestro Equipo</h2>
        <div className="team-grid">
          {equipo.map((m) => (
            <div key={m.nombre} className="team-member">
              <img src={m.img} alt={m.nombre} className="team-photo" />
              <div className="team-name">{m.nombre}</div>
              <div className="team-role">{m.rol}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
    
    <Footer />
  </>
);

export default SobreNosotros; 