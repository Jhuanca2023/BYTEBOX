import Header from '../common/Header';
import Footer from '../common/Footer';
import './NuestraMarca.css';

const NuestraMarca = () => (
  <>
    <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Nuestra Marca</h1>
        <p className="hero-description">
          Bytebox es sinónimo de confianza, innovación y tecnología de vanguardia. Nuestra marca representa la pasión por conectar personas y empresas a través de soluciones tecnológicas que marcan la diferencia.
        </p>
        <ul className="hero-features">
          <li>💡 Creatividad</li>
          <li>🌍 Presencia global</li>
          <li>🤝 Cercanía</li>
          <li>🏆 Calidad</li>
        </ul>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80" alt="Marca Bytebox" />
      </div>
    </section>

    {/* SECCIONES PRINCIPALES */}
    <main className="main-content">
      <section className="content-section">
        <div className="content-image">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" alt="Innovación" />
        </div>
        <div className="content-text">
          <h2 className="content-title">Lo que nos distingue</h2>
          <ul className="content-list">
            <li>✔️ Atención personalizada</li>
            <li>✔️ Soluciones a medida</li>
            <li>✔️ Compromiso con la innovación</li>
            <li>✔️ Visión local y global</li>
          </ul>
        </div>
      </section>
      
      <section className="content-section">
        <div className="content-text">
          <h2 className="content-title">Nuestra promesa</h2>
          <p className="content-description">
            En Bytebox, nos comprometemos a acompañar a nuestros clientes en cada paso, brindando soluciones tecnológicas que potencian su crecimiento y éxito.
          </p>
        </div>
        <div className="content-image">
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=900&q=80" alt="Equipo" />
        </div>
      </section>
    </main>
    
    <Footer />
  </>
);

export default NuestraMarca; 