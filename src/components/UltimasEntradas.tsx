import { useState } from 'react';
import Header from './common/Header';

import Footer from './common/Footer';
import './UltimasEntradas.css';
import imgLaptop from '../assets/images/imageLap.png';
import imgCaja from '../assets/images/imagecaja.png';
import imgPlataforma from '../assets/images/plataforma.png';
import imgAccesorios from '../assets/images/accesorios.png';
import imgEarth from '../assets/images/image.png';
import imgDesk from '../assets/images/imagepapel.png';


const extraCards = [
  {
    img: imgLaptop,
    alt: 'Innovación Digital',
    title: 'Innovación Digital:',
    highlight: 'Tendencias 2024',
    desc: 'Descubre las tendencias tecnológicas que están transformando el mundo digital este año.'
  },
  {
    img: imgEarth,
    alt: 'Sostenibilidad',
    title: 'Sostenibilidad:',
    highlight: 'Tecnología Verde',
    desc: 'Soluciones tecnológicas que ayudan a reducir el impacto ambiental y promueven la economía circular.'
  },
  {
    img: imgDesk,
    alt: 'Transformación Empresarial',
    title: 'Transformación Empresarial:',
    highlight: 'Casos de Éxito',
    desc: 'Historias de empresas que han logrado el éxito gracias a la transformación digital.'
  }
];

const UltimasEntradas = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Header />
      <section className="hero-section ultimas-entradas-hero-bg">
        <div className="hero-content">
          <h1>Últimas Entradas</h1>
          <p>Explora las novedades, casos de éxito y tendencias de Bytebox.</p>
        </div>
      </section>
      {/* Sección de temas/empresas */}
      <section className="ultimas-entradas-section">
        <h2 className="ultimas-entradas-title">
          Explora nuestra <span className="ultimas-entradas-title-highlight">marca</span>
        </h2>
        <div className="ultimas-entradas-buttons">
          <button className="ultimas-entradas-btn">Servicios</button>
          <button className="ultimas-entradas-btn">Sobre bytebox</button>
          <button className="ultimas-entradas-btn">Casos de éxito</button>
          <button className="ultimas-entradas-btn">Trabajo Remoto</button>
        </div>
        <div className="ultimas-entradas-grid">
          {/* Tarjeta 1 */}
          <div className="ultimas-entradas-card">
            <img src={imgLaptop} alt="Offboarding" className="ultimas-entradas-card-img" />
            <div className="ultimas-entradas-card-content">
              <div className="ultimas-entradas-card-title">Offboarding: <span className="ultimas-entradas-card-title-highlight">El proceso que no debe subestimarse</span></div>
              <div className="ultimas-entradas-card-desc">¿Sabés cómo proteger datos y recuperar equipos al despedir a un colaborador?</div>
            </div>
            <button className="ultimas-entradas-card-arrow">
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 2 */}
          <div className="ultimas-entradas-card">
            <img src={imgEarth} alt="Perú" className="ultimas-entradas-card-img" />
            <div className="ultimas-entradas-card-content">
              <div className="ultimas-entradas-card-title">BYTEBOX llega a Perú: <span className="ultimas-entradas-card-title-highlight">creciendo en Perú</span></div>
              <div className="ultimas-entradas-card-desc">BYTEBOX desembarca en Perú para seguir expandiendo soluciones tecnológicas, impulsando la innovación y generando nuevas oportunidades para empresas peruanas.</div>
            </div>
            <button className="ultimas-entradas-card-arrow">
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 3 - Falabella */}
          <div className="ultimas-entradas-card">
            <img src={imgCaja} alt="Falabella" className="ultimas-entradas-card-img" />
            <div className="ultimas-entradas-card-content">
              <div className="ultimas-entradas-card-title">Falabella: <span className="ultimas-entradas-card-title-highlight">Innovación en Retail</span></div>
              <div className="ultimas-entradas-card-desc">Falabella es una de las principales empresas de retail en Latinoamérica, ofreciendo soluciones innovadoras y una amplia gama de productos y servicios para sus clientes y partners.</div>
            </div>
            <button className="ultimas-entradas-card-arrow">
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 4 - Coolbox */}
          <div className="ultimas-entradas-card">
            <img src={imgAccesorios} alt="Coolbox" className="ultimas-entradas-card-img" />
            <div className="ultimas-entradas-card-content">
              <div className="ultimas-entradas-card-title">Coolbox: <span className="ultimas-entradas-card-title-highlight">Líder en Tecnología y Gadgets</span></div>
              <div className="ultimas-entradas-card-desc">Coolbox es líder en tecnología y gadgets, brindando productos de última generación y experiencias únicas para empresas y consumidores en toda la región.</div>
            </div>
            <button className="ultimas-entradas-card-arrow">
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 5 */}
          <div className="ultimas-entradas-card">
            <img src={imgPlataforma} alt="Hardware sostenible" className="ultimas-entradas-card-img" />
            <div className="ultimas-entradas-card-content">
              <div className="ultimas-entradas-card-title">El futuro del <span className="ultimas-entradas-card-title-highlight">hardware sostenible</span>: Impulsando la economía circular con buyback</div>
              <div className="ultimas-entradas-card-desc">Renová tu tecnología con Buyback: optimizá recursos y promové un futuro sostenible.</div>
            </div>
            <button className="ultimas-entradas-card-arrow">
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 6 */}
          <div className="ultimas-entradas-card">
            <img src={imgDesk} alt="Guía para equipar" className="ultimas-entradas-card-img" />
            <div className="ultimas-entradas-card-content">
              <div className="ultimas-entradas-card-title">Guía para equipar a <span className="ultimas-entradas-card-title-highlight">empleados remotos</span></div>
              <div className="ultimas-entradas-card-desc">Equipar a empleados remotos es clave para el éxito. Aprendé a elegir los dispositivos adecuados, cumplir con las normativas locales y mantener su equipamiento de forma efectiva.</div>
            </div>
            <button className="ultimas-entradas-card-arrow">
              <span>&#8594;</span>
            </button>
          </div>
          {showMore && extraCards.map((card, idx) => (
            <div className="ultimas-entradas-card" key={`extra-card-${idx}`}>
              <img src={card.img} alt={card.alt} className="ultimas-entradas-card-img" />
              <div className="ultimas-entradas-card-content">
                <div className="ultimas-entradas-card-title">{card.title} <span className="ultimas-entradas-card-title-highlight">{card.highlight}</span></div>
                <div className="ultimas-entradas-card-desc">{card.desc}</div>
              </div>
              <button className="ultimas-entradas-card-arrow">
                <span>&#8594;</span>
              </button>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
          <button className="ultimas-entradas-btn" onClick={() => setShowMore(v => !v)}>
            {showMore ? 'Ver menos' : 'Explorar más'}
          </button>
        </div>
      </section>
      <main className="ultimas-entradas-main">
        <div className="ultimas-entradas-main-content">
          <p>Aquí irá el contenido de las últimas entradas. </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UltimasEntradas; 