import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SEO } from '../SEO';
import productsData from '../../assets/data/products.json';
import type { Review, Product } from '../../interfaces';
import './Products.css';

const STARS_COUNT = 5;
const DEFAULT_CARD_WIDTH = 450; // Ancho predeterminado de la tarjeta en píxeles
const TRANSITION_DURATION = 500; // Duración de la transición en ms
const SCROLL_THRESHOLD = 0.5; // Umbral para el scroll del carrusel

const Products: React.FC = () => {
  // Configuración de SEO para la página de Productos
  const [selectedReview, setSelectedReview] = useState<{ [key: number]: number }>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Array<Omit<Product, 'reviews'> & { reviews: Review[] }>>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const totalSlides = products.length;
  const loopProducts = React.useMemo(() => {
    if (products.length === 0) {
      return [];
    }
    return [...products, ...products, ...products];
  }, [products]);
  
  const realStart = products.length; // Índice donde comienzan los productos reales

  // Obtener el ancho del ítem incluyendo el gap
  const getItemWidth = useCallback((): { itemWidth: number; gapPx: number } => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return { itemWidth: DEFAULT_CARD_WIDTH, gapPx: 32 };
    }
    
    const style = window.getComputedStyle(carousel);
    const gap = style.getPropertyValue('gap') || '2rem';
    let gapPx;
    if (gap.includes('rem')) {
      gapPx = parseFloat(gap) * parseFloat(getComputedStyle(document.documentElement).fontSize);
    } else {
      gapPx = parseFloat(gap);
    }
    
    // Usar el primer producto como referencia para el ancho
    const firstCard = carousel.querySelector('.product-card') as HTMLElement;
    let itemWidth;
    if (firstCard) {
      itemWidth = firstCard.offsetWidth;
    } else {
      itemWidth = DEFAULT_CARD_WIDTH;
    }
    
    return { itemWidth, gapPx };
  }, []);

  // Función para ir a un slide específico
  const goToSlide = useCallback((slideIdx: number, behavior: ScrollBehavior = 'smooth') => {
    if (isTransitioning || totalSlides === 0) {
      return;
    }
    
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }
    
    setIsTransitioning(true);
    
    const { itemWidth, gapPx } = getItemWidth();
    const normalizedIndex = ((slideIdx % totalSlides) + totalSlides) % totalSlides;
    const scrollPosition = (realStart + normalizedIndex) * (itemWidth + gapPx);
    
    // Actualizar el estado primero
    setActiveIndex(normalizedIndex);
    
    // Hacer el scroll
    carousel.scrollTo({
      left: scrollPosition,
      behavior
    });
    
    // Restablecer el estado de transición después de la animación
    if (behavior === 'smooth') {
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
    } else {
      setIsTransitioning(false);
    }
  }, [getItemWidth, isTransitioning, realStart, totalSlides]);

  // Manejadores de navegación
  const handlePrev = useCallback(() => {
    if (isTransitioning) {
      return;
    }
    const newIndex = (activeIndex - 1 + totalSlides) % totalSlides;
    goToSlide(newIndex);
  }, [activeIndex, goToSlide, isTransitioning, totalSlides]);
  
  const handleNext = useCallback(() => {
    if (isTransitioning) {
      return;
    }
    const newIndex = (activeIndex + 1) % totalSlides;
    goToSlide(newIndex);
  }, [activeIndex, goToSlide, isTransitioning, totalSlides]);

  // Navegación por dots
  const handleDot = useCallback((idx: number) => {
    if (isTransitioning || idx === activeIndex) {
      return;
    }
    goToSlide(idx);
  }, [activeIndex, goToSlide, isTransitioning]);

  // Efecto para manejar el scroll y el loop infinito del carrusel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !products.length) {
      return;
    }
    
    let rafId: number | null = null;
    const isScrolling = false;
    
    // Función para verificar si necesitamos hacer un salto para el loop infinito
    const checkAndHandleLoop = () => {
      if (isTransitioning || !carousel) {
        return false;
      }
      
      const { itemWidth, gapPx } = getItemWidth();
      const itemWithGap = itemWidth + gapPx;
      const scrollPosition = carousel.scrollLeft;
      
      // Si estamos muy cerca del inicio (primer bloque duplicado)
      if (scrollPosition <= itemWithGap * SCROLL_THRESHOLD) {
        const targetIndex = totalSlides - 1;
        carousel.scrollTo({
          left: (realStart + targetIndex) * itemWithGap,
          behavior: 'auto'
        });
        return true;
      }
      
      // Si estamos muy cerca del final (último bloque duplicado)
      const maxValidScroll = (realStart + totalSlides) * itemWithGap;
      if (scrollPosition >= maxValidScroll - itemWithGap * SCROLL_THRESHOLD) {
        carousel.scrollTo({
          left: realStart * itemWithGap,
          behavior: 'auto'
        });
        return true;
      }
      
      return false;
    };
    
    // Manejador de scroll para actualizar el índice activo
    const handleScroll = () => {
      if (isTransitioning || isScrolling) {
        return;
      }
      
      // Cancelar cualquier animación de scroll pendiente
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Usar requestAnimationFrame para un mejor rendimiento
      rafId = requestAnimationFrame(() => {
        if (!carousel) {
          return;
        }
        
        // Verificar primero si necesitamos hacer un salto de bucle
        if (checkAndHandleLoop()) {
          return;
        }
        
        const { itemWidth, gapPx } = getItemWidth();
        const itemWithGap = itemWidth + gapPx;
        const scrollPosition = carousel.scrollLeft;
        
        // Calcular el índice actual basado en la posición de desplazamiento
        const rawIndex = Math.round((scrollPosition - realStart * itemWithGap) / itemWithGap);
        const newIndex = ((rawIndex % totalSlides) + totalSlides) % totalSlides;
        
        // Actualizar el índice activo si es necesario
        if (newIndex >= 0 && newIndex < totalSlides && newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      });
    };
    
    // Manejador de redimensionamiento
    const handleResize = () => {
      if (!isTransitioning) {
        goToSlide(activeIndex, 'auto');
      }
    };
    
    // Inicializar posición inicial
    const init = () => {
      if (activeIndex === 0) {
        goToSlide(0, 'auto');
      }
    };
    
    // Agregar event listeners
    carousel.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Inicializar
    init();
    
    // Limpieza
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      carousel.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex, getItemWidth, goToSlide, isTransitioning, products.length, realStart, totalSlides]);

  // Función para obtener las reseñas de un producto, asegurando que siempre sea un array
  const getReviews = useCallback((product: Product): Review[] => {
    if (Array.isArray(product.reviews)) {
      return product.reviews;
    }
    return [];
  }, []);

  // Renderizar estrellas de calificación
  const renderStars = useCallback((rating: number) => (
    Array.from({ length: STARS_COUNT }, (_, index) => {
      let starClass = 'star';
      if (index < rating) {
        starClass = 'star filled';
      }
      return (
        <span 
          key={`star-${index}`} 
          className={starClass}
          aria-hidden="true"
        >
          ★
        </span>
      );
    })
  ), []);

  // Abrir enlace del producto en una nueva pestaña
  const handleViewProduct = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Navegación entre reseñas
  const nextReview = useCallback((productId: number, totalReviews: number) => {
    setSelectedReview(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalReviews
    }));
  }, []);

  const previousReview = useCallback((productId: number, totalReviews: number) => {
    setSelectedReview(prev => {
      const currentIndex = prev[productId] || 0;
      let newIndex;
      if (currentIndex === 0) {
        newIndex = totalReviews - 1;
      } else {
        newIndex = currentIndex - 1;
      }
      return {
        ...prev,
        [productId]: newIndex
      };
    });
  }, []);

  // Cargar los productos al montar el componente
  useEffect(() => {
    if (productsData?.topProducts) {
      setProducts(productsData.topProducts);
    }
    
    // Limpiar al desmontar
    return () => {
      setActiveIndex(0);
      setSelectedReview({});
    };
  }, []);

  return (
    <div className="products-section">
      <SEO 
        title="Productos - ByteBOX | Soluciones Tecnológicas Innovadoras"
        description="Descubre nuestra gama de productos tecnológicos en ByteBOX. Ofrecemos las mejores soluciones en accesorios y equipos tecnológicos de última generación."
        keywords="productos tecnológicos, accesorios de tecnología, equipos electrónicos, tecnología de punta, ofertas de tecnología, dispositivos electrónicos"
        canonicalUrl="https://bytebox.com/productos"
      />
      <div className="container">
        <section className="top-products" aria-label="Productos destacados">
          <h2 className="section-title">
            <span>Productos</span> <span className="highlight">destacados</span>
          </h2>
          <div className="carousel-wrapper">
            <button className="carousel-arrow left" aria-label="Anterior" onClick={handlePrev}>
              ‹
            </button>
            <div
              className="carousel-container"
              id="products-carousel"
              ref={carouselRef}
              aria-label="Productos destacados"
            >
              <div className="carousel-spacer" aria-hidden="true"></div>
              {loopProducts.map((product: Product, idx) => {
                const productIndex = ((idx % totalSlides) + 1);
                const isRealProduct = idx >= realStart && idx < realStart + totalSlides;
                let loadingType: 'eager' | 'lazy';
                if (isRealProduct) {
                  loadingType = 'eager';
                } else {
                  loadingType = 'lazy';
                }
                
                return (
                  <div
                    key={`product-${product.id}-${idx}`}
                    className="product-card"
                    aria-label={`Producto ${productIndex} de ${totalSlides}`}
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
                        {getReviews(product).length > 0 && (
                          <div className="product-reviews">
                            <div className="reviews-header">
                              <h4>Reviews ({getReviews(product).length})</h4>
                              {getReviews(product).length > 1 && (
                                <div className="review-navigation">
                                  <button
                                    className="review-nav-btn"
                                    onClick={() => previousReview(product.id, getReviews(product).length)}
                                    aria-label="Review anterior"
                                  >
                                    ‹
                                  </button>
                                  <span className="review-counter">
                                    {((selectedReview[product.id] || 0) + 1)} / {getReviews(product).length}
                                  </span>
                                  <button
                                    className="review-nav-btn"
                                    onClick={() => nextReview(product.id, getReviews(product).length)}
                                    aria-label="Siguiente review"
                                  >
                                    ›
                                  </button>
                                </div>
                              )}
                            </div>
                            <div className="review-carousel">
                              {getReviews(product).map((review: Review, index: number) => {
                                const isActive = index === (selectedReview[product.id] || 0);
                                let reviewItemClass = 'review-item';
                                if (isActive) {
                                  reviewItemClass = 'review-item active';
                                }
                                return (
                                  <div
                                    key={`review-${product.id}-${review.name}-${index}`}
                                    className={reviewItemClass}
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
                        <img src={product.image} alt={product.title} loading={loadingType} />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="carousel-spacer" aria-hidden="true"></div>
            </div>
            <button className="carousel-arrow right" aria-label="Siguiente" onClick={handleNext}>
              ›
            </button>
            <div className="carousel-dots" role="tablist" aria-label="Paginación de productos">
              {products.map((product, idx) => (
                <button
                  key={`dot-${product.id}-${idx}`}
                  className={`carousel-dot${activeIndex === idx ? ' active' : ''}`}
                  aria-label={`Ir al producto ${idx + 1}`}
                  aria-selected={activeIndex === idx}
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
