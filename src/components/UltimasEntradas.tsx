import { useState } from 'react';
import Header from './common/Header';

import Footer from './common/Footer';
import './UltimasEntradas.css';
import imgLaptop from '../assets/images/imageLap.png';
import imgFalabella from '../assets/images/falabe.png';
import imgPlataforma from '../assets/images/plataforma.png';
import imgAccesorios from '../assets/images/accesorios.png';
import imgEarth from '../assets/images/image.png';
import imgDesk from '../assets/images/imagepapel.png';


// Agregar categorías a las tarjetas existentes
const cards = [
  {
    img: imgLaptop,
    alt: 'Offboarding',
    title: 'Offboarding:',
    highlight: 'El proceso que no debe subestimarse',
    desc: '¿Sabés cómo proteger datos y recuperar equipos al despedir a un colaborador?',
    category: 'servicios'
  },
  {
    img: imgEarth,
    alt: 'Perú',
    title: 'BYTEBOX llega a Perú:',
    highlight: 'creciendo en Perú',
    desc: 'BYTEBOX desembarca en Perú para seguir expandiendo soluciones tecnológicas, impulsando la innovación y generando nuevas oportunidades para empresas peruanas.',
    category: 'sobre-nosotros'
  },
  {
    img: imgFalabella,
    alt: 'Falabella',
    title: 'Falabella:',
    highlight: 'Innovación en Retail',
    desc: 'Falabella es una de las principales empresas de retail en Latinoamérica, ofreciendo soluciones innovadoras y una amplia gama de productos y servicios para sus clientes y partners.',
    category: 'casos-exito'
  },
  {
    img: imgAccesorios,
    alt: 'Coolbox',
    title: 'Coolbox:',
    highlight: 'Líder en Tecnología y Gadgets',
    desc: 'Coolbox es líder en tecnología y gadgets, brindando productos de última generación y experiencias únicas para empresas y consumidores en toda la región.',
    category: 'casos-exito'
  },
  {
    img: imgPlataforma,
    alt: 'Hardware sostenible',
    title: 'El futuro del',
    highlight: 'hardware sostenible',
    desc: 'Renová tu tecnología con Buyback: optimizá recursos y promové un futuro sostenible.',
    category: 'trabajo-remoto'
  },
  {
    img: imgDesk,
    alt: 'Guía para equipar',
    title: 'Guía para equipar a',
    highlight: 'empleados remotos',
    desc: 'Equipar a empleados remotos es clave para el éxito. Aprendé a elegir los dispositivos adecuados, cumplir con las normativas locales y mantener su equipamiento de forma efectiva.',
    category: 'trabajo-remoto'
  }
];

interface CardProps {
  img: string;
  alt: string;
  title: string;
  highlight: string;
  desc: string;
  category: 'servicios' | 'sobre-nosotros' | 'casos-exito' | 'trabajo-remoto';
}

const extraCards: CardProps[] = [
  {
    img: imgLaptop,
    alt: 'Innovación Digital',
    title: 'Innovación Digital:',
    highlight: 'Tendencias 2025',
    desc: 'Descubre las tendencias tecnológicas que están transformando el mundo digital este año.',
    category: 'servicios'
  },
  {
    img: imgEarth,
    alt: 'Sostenibilidad',
    title: 'Sostenibilidad:',
    highlight: 'Tecnología Verde',
    desc: 'Soluciones tecnológicas que ayudan a reducir el impacto ambiental y promueven la economía circular.',
    category: 'sobre-nosotros'
  },
  {
    img: imgDesk,
    alt: 'Transformación Empresarial',
    title: 'Transformación Empresarial:',
    highlight: 'Casos de Éxito',
    desc: 'Historias de empresas que han logrado el éxito gracias a la transformación digital.',
    category: 'casos-exito'
  }
];

type FilterType = 'all' | 'servicios' | 'sobre-nosotros' | 'casos-exito' | 'trabajo-remoto';

const UltimasEntradas = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  return (
    <>
      <Header />
      <section className="hero-section ultimas-entradas-hero-bg">
        <div className="hero-content">
          <h1>Explora <span className="hero-highlight">nuestra marca</span></h1>
          <p>Explora las novedades, casos de éxito y tendencias de Bytebox.</p>
        </div>
      </section>
      {/* Sección de temas/empresas */}
      <section className="ultimas-entradas-section">
        <h2 className="ultimas-entradas-title">
          Explora nuestra <span className="ultimas-entradas-title-highlight">marca</span>
        </h2>
        <div className="ultimas-entradas-buttons">
          <button 
            className={`ultimas-entradas-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`ultimas-entradas-btn ${activeFilter === 'servicios' ? 'active' : ''}`}
            onClick={() => setActiveFilter('servicios')}
          >
            Servicios
          </button>
          <button 
            className={`ultimas-entradas-btn ${activeFilter === 'casos-exito' ? 'active' : ''}`}
            onClick={() => setActiveFilter('casos-exito')}
          >
            Casos de éxito
          </button>
          <button 
            className={`ultimas-entradas-btn ${activeFilter === 'trabajo-remoto' ? 'active' : ''}`}
            onClick={() => setActiveFilter('trabajo-remoto')}
          >
            Soluciones Digitales
          </button>
        </div>
        <div className="ultimas-entradas-grid">
          {cards
            .filter(card => activeFilter === 'all' || card.category === activeFilter)
            .map((card, idx) => (
              <div className="ultimas-entradas-card" key={`card-${idx}`}>
                <img src={card.img} alt={card.alt} className="ultimas-entradas-card-img" />
                <div className="ultimas-entradas-card-content">
                  <div className="ultimas-entradas-card-title">
                    {card.title} <span className="ultimas-entradas-card-title-highlight">{card.highlight}</span>
                  </div>
                  <div className="ultimas-entradas-card-desc">{card.desc}</div>
                </div>
                <button className="ultimas-entradas-card-arrow">
                  <span>&#8594;</span>
                </button>
              </div>
            ))}
          
          {showMore && 
            extraCards
              .filter(card => activeFilter === 'all' || card.category === activeFilter)
              .map((card, idx) => (
                <div className="ultimas-entradas-card" key={`extra-card-${idx}`}>
                  <img src={card.img} alt={card.alt} className="ultimas-entradas-card-img" />
                  <div className="ultimas-entradas-card-content">
                    <div className="ultimas-entradas-card-title">
                      {card.title} <span className="ultimas-entradas-card-title-highlight">{card.highlight}</span>
                    </div>
                    <div className="ultimas-entradas-card-desc">{card.desc}</div>
                  </div>
                  <button className="ultimas-entradas-card-arrow">
                    <span>&#8594;</span>
                  </button>
                </div>
              ))
          }
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