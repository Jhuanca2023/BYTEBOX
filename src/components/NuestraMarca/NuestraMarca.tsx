import Header from '../common/Header';
import Footer from '../common/Footer';
import './NuestraMarca.css';

const NuestraMarca = () => (
  <>
    <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>Nuestra <span className="hero-highlight">esencia</span></h1>
        <p>
          Innovación, confianza y tecnología para potenciar tu <br />crecimiento.
        </p>
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