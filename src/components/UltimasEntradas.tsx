import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './layout';
import LazyImage from './LazyImage/LazyImage';
import { cards, extraCards, type FilterType } from '../interfaces/ultimasEntradas.types';
import productImagesData from '../assets/data/productImages.json';
import './UltimasEntradas.css';
import './UltimasEntradas/Carousel.css';

// Importar imágenes usando URL para compatibilidad con Vite en producción
const getImageUrl = (imageName: string) => new URL(`../assets/images/${imageName}`, import.meta.url).href;

const imageMap: Record<string, string> = {
  'seller.png': getImageUrl('seller.webp'),
  'falabe.png': getImageUrl('falabe.webp'),
  'accesorios.png': getImageUrl('accesorios.webp'),
  'image.png': new URL(`../assets/images/web/image.webp`, import.meta.url).href,
  'image32.png': getImageUrl('image32.webp'),
  'image33.png': getImageUrl('image33.webp'),
  'imagepapel.png': getImageUrl('imagepapel.webp'),
  'platfor1.png': getImageUrl('platfor1.webp'),
  'platfor2.png': getImageUrl('platfor2.webp'),
  'hardware sostenible.jpg': new URL(`../assets/images/ultimasEntradas/hardware sostenible.webp`, import.meta.url).href
};

// Función para obtener la URL de imagen (local o externa)
const getImageSrc = (imageName: string): string => {
  // Si es una URL externa (comienza con http/https)
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    return imageName;
  }
  // Si es una imagen local, usar imageMap
  const localUrl = imageMap[imageName] || '';
  return localUrl;
};

// Mapear las imágenes a los datos
const mappedCards = cards.map(card => ({
  ...card,
  img: getImageSrc(card.img)
}));

const mappedExtraCards = extraCards.map(card => ({
  ...card,
  img: getImageSrc(card.img)
}));

const UltimasEntradas = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // Efecto para desplazarse al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Helper function para obtener el texto del botón
  const getButtonText = (isShowingMore: boolean): string => {
    if (isShowingMore) {
      return 'Ver menos';
    }
    return 'Explorar más';
  };
  
  // Filtrar tarjetas basado en el filtro activo
  const filteredCards = mappedCards.filter(
    card => activeFilter === 'all' || card.category === activeFilter
  );
  
  // Filtrar tarjetas extra si se muestran
  let filteredExtraCards: typeof mappedExtraCards = [];
  if (showMore) {
    filteredExtraCards = mappedExtraCards.filter(
      card => activeFilter === 'all' || card.category === activeFilter
    );
  }

  // Animation is now handled by CSS
  return (
    <>
      <Header />
      <section className="hero-section ultimas-entradas-hero-bg">
        <div className="banner-title-container">
          <h1 className="banner-title">
            TECNOLOGÍA <span className="highlight">QUE</span> INSPIRA <span className="highlight">INNOVA</span> Y <span className="highlight">TRANSFORMA</span>
          </h1>
          <div className="banner-subtitle">
            <p>Descubre nuestra exclusiva selección de tecnología de vanguardia diseñada para transformar tu experiencia digital. En ByteBOX, fusionamos innovación y diseño para ofrecerte lo mejor del mercado.</p>
            <p>Explora nuestras últimas entradas y mantente a la vanguardia con las soluciones tecnológicas más avanzadas del mercado peruano.</p>
          </div>
        </div>
      </section>
      {/* Sección de temas/empresas */}
      <section className="ultimas-entradas-section">
        <h2 
          className="ultimas-entradas-title" 
          data-aos="fade-up" 
          data-aos-duration="800"
        >
          <span>Explora nuestra</span>
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
                     ].map((btn, index) => {
             const isActive = activeFilter === btn.id;
             let buttonClassName = 'ultimas-entradas-btn';
             if (isActive) {
               buttonClassName = 'ultimas-entradas-btn active';
             }
             return (
               <button
                 key={btn.id}
                 className={buttonClassName}
                 onClick={() => setActiveFilter(btn.id as FilterType)}
                 data-aos="fade-up"
                 data-aos-duration="600"
                 data-aos-delay={`${200 + (index * 50)}`}
                 data-aos-once="true"
               >
                 {btn.label}
               </button>
             );
           })}
        </div>
        <div className="ultimas-entradas-grid">
          {[...filteredCards, ...filteredExtraCards].map((card, idx) => {
            const animationDelay = `${(idx % 3) * 100}`;
            
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
                  <LazyImage 
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
                  data-aos-delay={`${parseInt(animationDelay, 10) + 100}`}
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
            const isInternalLink = card.link.startsWith('/');
            
            if (isInternalLink) {
              return (
                <Link
                  to={card.link}
                  className="ultimas-entradas-card"
                  key={`card-${idx}-${card.title}`}
                  aria-label={`Ver ${card.title} ${card.highlight}`}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={animationDelay}
                  data-aos-once="true"
                >
                  {cardContent}
                </Link>
              );
            }
            
            return (
              <a
                href={card.link}
                className="ultimas-entradas-card"
                key={`card-${idx}-${card.title}`}
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
            {getButtonText(showMore)}
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
                key={`entry-${index}-${entry.alt}`} 
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
                  decoding="async"
                  width="560"
                  height="450"
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