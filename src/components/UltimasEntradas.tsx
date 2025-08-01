import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import { cards, extraCards, type FilterType } from '../interfaces/ultimasEntradas.types';
import productImagesData from '../assets/data/productImages.json';
import './UltimasEntradas.css';
import './UltimasEntradas/Carousel.css';

// Importar imágenes usando URL para compatibilidad con Vite en producción
const getImageUrl = (imageName: string) => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};

const imageMap: Record<string, string> = {
  'seller.png': getImageUrl('seller.png'),
  'falabe.png': getImageUrl('falabe.png'),
  'plataforma.png': getImageUrl('plataforma.png'),
  'accesorios.png': getImageUrl('accesorios.png'),
  'image.png': getImageUrl('image.png'),
  'imagepapel.png': getImageUrl('imagepapel.png')
};

// Mapear las imágenes a los datos
const mappedCards = cards.map(card => ({
  ...card,
  img: imageMap[card.img] || ''
}));

const mappedExtraCards = extraCards.map(card => ({
  ...card,
  img: imageMap[card.img] || ''
}));

const UltimasEntradas = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Filtrar tarjetas basado en el filtro activo
  const filteredCards = mappedCards.filter(
    card => activeFilter === 'all' || card.category === activeFilter
  );
  
  // Filtrar tarjetas extra si se muestran
  const filteredExtraCards = showMore 
    ? mappedExtraCards.filter(
        card => activeFilter === 'all' || card.category === activeFilter
      )
    : [];

  // Animation is now handled by CSS
  return (
    <>
      <Header />
      <section className="hero-section ultimas-entradas-hero-bg">
        <div className="hero-content">
          <h1 data-aos="fade-up" data-aos-duration="800">
            Explora <span 
              className="hero-highlight" 
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="200"
            >
              nuestra marca
            </span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Explora las novedades, casos de éxito y tendencias de Bytebox.
          </p>
        </div>
      </section>
      {/* Sección de temas/empresas */}
      <section className="ultimas-entradas-section">
        <h2 className="ultimas-entradas-title" data-aos="fade-up" data-aos-duration="800">
          Explora nuestra <span 
            className="ultimas-entradas-title-highlight"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="200"
          >
            marca
          </span>
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
          {[...filteredCards, ...filteredExtraCards].map((card, idx) => (
            card.link.startsWith('/') ? (
              <Link 
                to={card.link} 
                className="ultimas-entradas-card" 
                key={`card-${idx}`}
                aria-label={`Ver ${card.title} ${card.highlight}`}
              >
                <img 
                  src={card.img} 
                  alt={card.alt} 
                  className="ultimas-entradas-card-img" 
                  loading="lazy"
                />
                <div className="ultimas-entradas-card-content">
                  <div className="ultimas-entradas-card-title">
                    {card.title} <span className="ultimas-entradas-card-title-highlight">{card.highlight}</span>
                  </div>
                  <div className="ultimas-entradas-card-desc">{card.desc}</div>
                </div>
              </Link>
            ) : (
              <a 
                href={card.link} 
                className="ultimas-entradas-card"
                key={`card-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${card.title} ${card.highlight}`}
              >
                <img 
                  src={card.img} 
                  alt={card.alt} 
                  className="ultimas-entradas-card-img" 
                  loading="lazy"
                />
                <div className="ultimas-entradas-card-content">
                  <div className="ultimas-entradas-card-title">
                    {card.title} <span className="ultimas-entradas-card-title-highlight">{card.highlight}</span>
                  </div>
                  <div className="ultimas-entradas-card-desc">{card.desc}</div>
                </div>
              </a>
            )
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
          <button className="ultimas-entradas-btn" onClick={() => setShowMore(v => !v)}>
            {showMore ? 'Ver menos' : 'Explorar más'}
          </button>
        </div>
      </section>
      <section className="recent-entries">
        <h2>Ingresos recientes</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {[...productImagesData.recentEntries, ...productImagesData.recentEntries].map((entry, index) => (
              <div key={`entry-${index}`} className="carousel-slide">
                <img 
                  src={entry.url} 
                  alt={entry.alt} 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UltimasEntradas; 