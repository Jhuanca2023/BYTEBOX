import React, { useState, useEffect, useRef } from 'react';
import productsData from '../../assets/data/products.json';
import './Products.css';

interface Review {
  name: string;
  time: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  reviews?: Review[];
  url: string;
}

const STARS_COUNT = 5;
const SNAP_DELAY = 300;
const RESTART_DELAY = 3000;
const DEFAULT_CARD_WIDTH = 450;
const JUMP_TIMEOUT = 30; // Tiempo en ms para el salto invisible del carrusel

const Products: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<{ [key: number]: number }>({});
  const [activeIndex, setActiveIndex] = useState(0); // índice visible
  const carouselRef = useRef<HTMLDivElement>(null);
  const products = productsData.topProducts;
  const totalSlides = products.length;
  // Loop visual: duplicar productos
  const loopProducts = [...products, ...products, ...products];
  const realStart = totalSlides;

  // Accesibilidad: ir a slide
  const goToSlide = (slideIdx: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const style = window.getComputedStyle(carousel);
    const gap = style.getPropertyValue('gap');
    const gapPx = gap.includes('rem')
      ? parseFloat(gap) * parseFloat(getComputedStyle(document.documentElement).fontSize)
      : parseFloat(gap);
    const productCard = carousel.querySelector('.product-card') as HTMLElement;
    const itemWidth = productCard ? productCard.offsetWidth : DEFAULT_CARD_WIDTH;
    // Normalizar el índice al rango válido de productos
    const normalizedIndex = ((slideIdx % totalSlides) + totalSlides) % totalSlides;
    carousel.scrollTo({ left: (realStart + normalizedIndex) * (itemWidth + gapPx), behavior: 'smooth' });
    setActiveIndex(normalizedIndex);
  };

  // Flechas
  const handlePrev = () => {
    const newIndex = ((activeIndex - 1) + totalSlides) % totalSlides;
    goToSlide(newIndex);
  };
  const handleNext = () => {
    const newIndex = (activeIndex + 1) % totalSlides;
    goToSlide(newIndex);
  };

  // Dots
  const handleDot = (idx: number) => {
    const normalizedIndex = ((idx % totalSlides) + totalSlides) % totalSlides;
    goToSlide(normalizedIndex);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let scrollInterval: number | null = null;
    let userInteracted = false;
    let isJumping = false;

    // Helpers
    const getGap = () => {
      const style = window.getComputedStyle(carousel);
      const gap = style.getPropertyValue('gap');
      return gap.includes('rem')
        ? parseFloat(gap) * parseFloat(getComputedStyle(document.documentElement).fontSize)
        : parseFloat(gap);
    };
    const getItemWidth = () => {
      const productCard = carousel.querySelector('.product-card') as HTMLElement;
      return productCard ? productCard.offsetWidth : DEFAULT_CARD_WIDTH;
    };
    const getCurrentIndex = () => {
      const itemWidth = getItemWidth();
      const gap = getGap();
      const scrollPosition = carousel.scrollLeft;
      const itemWithGap = itemWidth + gap;
      
      // Calcular el índice basado en la posición actual del scroll
      const rawIndex = Math.round(scrollPosition / itemWithGap);
      
      // Convertir a índice real del producto (sin contar duplicados)
      if (rawIndex < realStart) {
        // Estamos en el primer bloque duplicado
        return totalSlides - (realStart - rawIndex);
      } else if (rawIndex >= realStart + totalSlides) {
        // Estamos en el último bloque duplicado
        return rawIndex - (realStart + totalSlides);
      } else {
        // Estamos en el bloque central (productos reales)
        return rawIndex - realStart;
      }
    };
    const scrollToIndex = (index: number, behavior: ScrollBehavior = 'smooth') => {
      const itemWidth = getItemWidth();
      const gap = getGap();
      const normalizedIndex = ((index % totalSlides) + totalSlides) % totalSlides;
      carousel.scrollTo({ left: (realStart + normalizedIndex) * (itemWidth + gap), behavior });
    };
    
    // Loop infinito: salto invisible
    const checkLoop = () => {
      const itemWidth = getItemWidth();
      const gap = getGap();
      const scrollPosition = carousel.scrollLeft;
      const itemWithGap = itemWidth + gap;
      
      // Si estamos muy cerca del inicio (primer bloque duplicado)
      if (scrollPosition <= itemWithGap * 0.5) {
        isJumping = true;
        const targetIndex = totalSlides - 1;
        carousel.scrollTo({ left: (realStart + targetIndex) * itemWithGap, behavior: 'auto' });
        setTimeout(() => {
          setActiveIndex(targetIndex);
          isJumping = false;
        }, JUMP_TIMEOUT);
        return true;
      }
      
      // Si estamos muy cerca del final (último bloque duplicado)
      const maxValidScroll = (realStart + totalSlides - 1) * itemWithGap;
      if (scrollPosition >= maxValidScroll + itemWithGap * 0.5) {
        isJumping = true;
        carousel.scrollTo({ left: realStart * itemWithGap, behavior: 'auto' });
        setTimeout(() => {
          setActiveIndex(0);
          isJumping = false;
        }, JUMP_TIMEOUT);
        return true;
      }
      
      return false;
    };
    
    // Auto-scroll
    const startAutoScroll = () => {
      if (scrollInterval) clearInterval(scrollInterval);
      scrollInterval = window.setInterval(() => {
        if (carousel && !userInteracted && !isJumping) {
          if (checkLoop()) return;
          
          const currentIndex = getCurrentIndex();
          const nextIndex = (currentIndex + 1) % totalSlides;
          scrollToIndex(nextIndex);
          setActiveIndex(nextIndex);
        }
      }, 4000);
    };
    
    // Scroll manual y snap
    const handleScroll = () => {
      if (isJumping) return;
      userInteracted = true;
      if (scrollInterval) clearInterval(scrollInterval);
      
      setTimeout(() => {
        if (!checkLoop()) {
          const index = getCurrentIndex();
          const normalizedIndex = ((index % totalSlides) + totalSlides) % totalSlides;
          setActiveIndex(normalizedIndex);
        }
        setTimeout(() => {
          userInteracted = false;
          startAutoScroll();
        }, RESTART_DELAY);
      }, SNAP_DELAY);
    };
    
    // Mouse enter/leave handlers nombrados para poder limpiar
    const handleMouseEnter = () => { userInteracted = true; if (scrollInterval) clearInterval(scrollInterval); };
    const handleMouseLeave = () => { userInteracted = false; startAutoScroll(); };
    
    // Resize handler para realinear el scroll
    const handleResize = () => {
      // Recalcula la posición del slide activo
      scrollToIndex(activeIndex, 'auto');
    };
    
    // Listeners
    carousel.addEventListener('scroll', handleScroll);
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    
    // Inicializar
    setTimeout(() => {
      scrollToIndex(activeIndex, 'auto');
    }, 50);
    startAutoScroll();
    
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [loopProducts.length, realStart, products.length, activeIndex, totalSlides]);

  const renderStars = (rating: number) => (
    Array.from({ length: STARS_COUNT }, (_, index) => (
      <span key={`star-${index}`} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ))
  );

  const handleViewProduct = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const nextReview = (productId: number, totalReviews: number) => {
    setSelectedReview(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalReviews
    }));
  };

  const previousReview = (productId: number, totalReviews: number) => {
    setSelectedReview(prev => {
      const currentIndex = prev[productId] || 0;
      const newIndex = currentIndex === 0 ? totalReviews - 1 : currentIndex - 1;
      return {
        ...prev,
        [productId]: newIndex
      };
    });
  };

  return (
    <div className="products-section">
      <div className="container">
        <section className="top-products" aria-label="Productos destacados">
          <h2 className="section-title">Productos destacados</h2>
          <div className="carousel-wrapper">
            <button className="carousel-arrow left" aria-label="Anterior" onClick={handlePrev} tabIndex={0}>
              ‹
            </button>
            <div
              className="carousel-container"
              id="products-carousel"
              ref={carouselRef}
              role="region"
              aria-roledescription="Carrusel"
              aria-label="Productos destacados"
            >
              <div className="carousel-spacer" aria-hidden="true"></div>
              {loopProducts.map((product: Product, idx) => (
                <div
                  key={`${product.id}-${idx}`}
                  className="product-card"
                  tabIndex={0}
                  aria-label={`Producto ${((idx % totalSlides) + 1)} de ${totalSlides}`}
                >
                  <div className="product-content">
                    <div className="product-info">
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-description">{product.description}</p>
                      <button
                        className="btn-view-product"
                        onClick={() => handleViewProduct(product.url)}
                        aria-label={`Ver producto ${product.title}`}
                      >
                        Ver Producto
                      </button>
                      {product.reviews && product.reviews.length > 0 && (
                        <div className="product-reviews">
                          <div className="reviews-header">
                            <h4>Reviews ({product.reviews.length})</h4>
                            {product.reviews.length > 1 && (
                              <div className="review-navigation">
                                <button
                                  className="review-nav-btn"
                                  onClick={() => product.reviews && previousReview(product.id, product.reviews.length)}
                                  aria-label="Review anterior"
                                >
                                  ‹
                                </button>
                                <span className="review-counter">
                                  {((selectedReview[product.id] || 0) + 1)} / {product.reviews.length}
                                </span>
                                <button
                                  className="review-nav-btn"
                                  onClick={() => product.reviews && nextReview(product.id, product.reviews.length)}
                                  aria-label="Siguiente review"
                                >
                                  ›
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="review-carousel">
                            {product.reviews.map((review, index) => {
                              const isActive = index === (selectedReview[product.id] || 0);
                              return (
                                <div
                                  key={`review-${product.id}-${index}`}
                                  className={`review-item ${isActive ? 'active' : ''}`}
                                >
                                  <div className="review-header">
                                    <span className="reviewer-name">{review.name}</span>
                                    <span className="review-time">{review.time}</span>
                                  </div>
                                  <div className="review-rating">
                                    {renderStars(review.rating)}
                                  </div>
                                  <p className="review-comment">{review.comment}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="product-image">
                      <img src={product.image} alt={product.title} loading={idx < realStart || idx >= realStart + totalSlides ? 'lazy' : 'eager'} />
                    </div>
                  </div>
                </div>
              ))}
              <div className="carousel-spacer" aria-hidden="true"></div>
            </div>
            <button className="carousel-arrow right" aria-label="Siguiente" onClick={handleNext} tabIndex={0}>
              ›
            </button>
            <div className="carousel-dots" role="tablist" aria-label="Paginación de productos">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot${activeIndex === idx ? ' active' : ''}`}
                  aria-label={`Ir al producto ${idx + 1}`}
                  aria-selected={activeIndex === idx}
                  tabIndex={0}
                  onClick={() => handleDot(idx)}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
