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
        <h2 
          className="ultimas-entradas-title" 
          data-aos="fade-up" 
          data-aos-duration="800"
        >
          Explora nuestra{' '}
          <span 
            className="ultimas-entradas-title-highlight"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="100"
            data-aos-anchor=".ultimas-entradas-title"
          >
            marca
          </span>
        </h2>
        
        <div 
          className="ultimas-entradas-buttons"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {[
            { id: 'all', label: 'Todos' },
            { id: 'servicios', label: 'Servicios' },
            { id: 'casos-exito', label: 'Casos de éxito' },
            { id: 'trabajo-remoto', label: 'Soluciones Digitales' }
          ].map((btn, index) => (
            <button
              key={btn.id}
              className={`ultimas-entradas-btn ${activeFilter === btn.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.id as FilterType)}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={`${200 + (index * 50)}`}
              data-aos-once="true"
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="ultimas-entradas-grid">
          {[...filteredCards, ...filteredExtraCards].map((card, idx) => {
            const animationDelay = `${(idx % 3) * 100}ms`;
            
            // Contenido común de la tarjeta
            const cardContent = (
              <>
                <div 
                  className="ultimas-entradas-card-img-container"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={animationDelay}
                  data-aos-once="true"
                >
                  <img 
                    src={card.img} 
                    alt={card.alt} 
                    className="ultimas-entradas-card-img" 
                    loading="lazy"
                  />
                </div>
                <div 
                  className="ultimas-entradas-card-content"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={`${parseInt(animationDelay) + 100}`}
                  data-aos-once="true"
                >
                  <div className="ultimas-entradas-card-title">
                    {card.title}{' '}
                    <span className="ultimas-entradas-card-title-highlight">
                      {card.highlight}
                    </span>
                  </div>
                  <div className="ultimas-entradas-card-desc">
                    {card.desc}
                  </div>
                </div>
              </>
            );
            
            // Renderizar el enlace apropiado basado en si es una ruta interna o externa
            return card.link.startsWith('/') ? (
              <Link
                to={card.link}
                className="ultimas-entradas-card"
                key={`card-${idx}`}
                aria-label={`Ver ${card.title} ${card.highlight}`}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={animationDelay}
                data-aos-once="true"
              >
                {cardContent}
              </Link>
            ) : (
              <a
                href={card.link}
                className="ultimas-entradas-card"
                key={`card-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${card.title} ${card.highlight}`}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={animationDelay}
                data-aos-once="true"
              >
                {cardContent}
              </a>
            );
          })}
        </div>
        <div 
          style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <button 
            className="ultimas-entradas-btn" 
            onClick={() => setShowMore(v => !v)}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-once="true"
          >
            {showMore ? 'Ver menos' : 'Explorar más'}
          </button>
        </div>
      </section>
      
      <section 
        className="recent-entries"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <h2 
          className="recent-entries-title"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true"
        >
          Ingresos <span className="highlight">recientes</span>
        </h2>
        <div 
          className="carousel-container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="carousel-track">
            {[...productImagesData.recentEntries, ...productImagesData.recentEntries].map((entry, index) => (
              <div 
                key={`entry-${index}`} 
                className="carousel-slide"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay={`${(index % 5) * 100}`}
                data-aos-once="true"
              >
                <img 
                  src={entry.url} 
                  alt={entry.alt} 
                  loading="lazy"
                  className="carousel-image"
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