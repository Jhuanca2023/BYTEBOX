import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import { cards, extraCards, type FilterType } from '../interfaces/ultimasEntradas.types';
import productImagesData from '../assets/data/productImages.json';
import './UltimasEntradas.css';
import './UltimasEntradas/Carousel.css';

// Importar imágenes usando URL para compatibilidad con Vite en producción
const getImageUrl = (imageName: string) => new URL(`../assets/images/${imageName}`, import.meta.url).href;

const imageMap: Record<string, string> = {
  'seller.png': getImageUrl('seller.png'),
  'falabe.png': getImageUrl('falabe.png'),
  'plataforma.png': getImageUrl('plataforma.png'),
  'accesorios.png': getImageUrl('accesorios.png'),
  'image.png': getImageUrl('image.png'),
  'imagepapel.png': getImageUrl('imagepapel.png'),
  'imageLap.png': getImageUrl('imageLap.png'),
  'hardware sostenible.jpg': new URL(`../assets/images/ultimasEntradas/hardware sostenible.jpg`, import.meta.url).href
};

// Función para obtener la URL de imagen (local o externa)
const getImageSrc = (imageName: string): string => {
  // Si es una URL externa (comienza con http/https)
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    console.log('🔗 URL externa detectada:', imageName);
    return imageName;
  }
  // Si es una imagen local, usar imageMap
  const localUrl = imageMap[imageName] || '';
  console.log('📁 Imagen local:', imageName, '→', localUrl);
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