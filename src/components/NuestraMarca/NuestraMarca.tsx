import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SeoComponent from '../SEO';
import { Header, Footer } from '../layout';
import productImagesData from '../../assets/data/productImages.json';
import valueIconsData from '../../assets/data/valueIcons.json';
import './NuestraMarca.css';
import { smoothScrollTo } from '../../utils/smoothScroll';

interface ValueIcon {
  id: string;
  title: string;
  imageUrl: string;
}

interface ValueIconsData {
  icons: ValueIcon[];
}

interface EsenciaCard extends ValueIcon {
  description: string;
  color: string;
}

const NuestraMarca = () => {
  // Estado para controlar la visibilidad de las estadísticas
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Estado para el conteo de los números
  const [counts, setCounts] = useState({
    products: 0,
    satisfaction: 0,
    support: 0
  });
  
  // Valores finales para la animación
  const targetCounts = {
    products: 5000,
    satisfaction: 98,
    support: 24
  };
  
  // Duración de la animación en milisegundos
  const animationDuration = 2000;

  // Efecto para activar la animación cuando las estadísticas son visibles
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          startCounting();
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  // Función para iniciar la animación de conteo
  const startCounting = () => {
    const startTime = Date.now();
    
    const updateCounts = () => {
      const currentTime = Date.now();
      const progress = Math.min(1, (currentTime - startTime) / animationDuration);
      
      setCounts({
        products: Math.floor(progress * targetCounts.products),
        satisfaction: Math.floor(progress * targetCounts.satisfaction),
        support: Math.floor(progress * targetCounts.support)
      });
      
      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        // Asegurarse de que los valores finales sean exactos
        setCounts({
          products: targetCounts.products,
          satisfaction: targetCounts.satisfaction,
          support: targetCounts.support
        });
      }
    };
    
    requestAnimationFrame(updateCounts);
  };

  const { images: productImages } = productImagesData;
  const { icons: valueIcons } = valueIconsData as ValueIconsData;


  const esenciaCards: EsenciaCard[] = valueIcons.map((icon: ValueIcon, index: number) => {
    const descriptions = {
      "Innovación Constante": "Pioneros en tecnología, siempre un paso adelante en soluciones disruptivas",
      "Compromiso Total": "Cada proyecto es único, cada cliente es prioritario, cada solución es perfecta",
      "Alcance Global": "Presencia mundial con enfoque local, conectando culturas y mercados",
      "Calidad Garantizada": "Excelencia en cada detalle, calidad que se ve y se siente en cada producto"
    };

    const colors = ["#6C63FF", "#4ECDC4", "#FF6B6B", "#FFD166"];
    
    return {
      id: icon.id,
      title: icon.title,
      description: descriptions[icon.title as keyof typeof descriptions] || "",
      imageUrl: icon.imageUrl,
      color: colors[index % colors.length]
    };
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  const IMAGE_CHANGE_INTERVAL = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % productImages.length);
    }, IMAGE_CHANGE_INTERVAL);
    
    return () => clearInterval(interval);
  }, [productImages]);
  const getDarkerColor = (color: string, percent: number) => {

    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    
 
    const darken = (c: number) => Math.max(0, Math.floor(c * (100 - percent) / 100));
    
  
    const toHex = (c: number) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `#${toHex(darken(r))}${toHex(darken(g))}${toHex(darken(b))}`;
  };

  const location = useLocation();
  const navigate = useNavigate();
  

  const handleCotizaClick = (e: React.MouseEvent) => {
    e.preventDefault();
   
    navigate('/', { state: { scrollToContact: true } });
  };
  useEffect(() => {
    if (location.hash) {
     
      setTimeout(() => {
        smoothScrollTo(location.hash, {
          offset: (document.querySelector('.header') as HTMLElement)?.clientHeight || 0,
          duration: 600,
        });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="nuestra-marca-container">
      <SeoComponent 
        title="Nuestra Marca - ByteBOX | Innovación y Calidad en Tecnología"
        description="Descubre la esencia de ByteBOX: innovación, calidad y compromiso. Conoce nuestra misión, visión y valores que nos impulsan a ofrecerte la mejor tecnología."
        keywords="marca ByteBOX, innovación tecnológica, calidad en tecnología, misión y visión, valores corporativos, historia de la empresa"
        canonicalUrl="https://bytebox.com.pe/nuestra-marca"
      />
      <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section nuestra-marca-hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h1 className="display-4 fw-bold text-white mb-4" data-aos="fade-up">
              Descubre <span style={{ color: '#46d1f0' }}>nuestra esencia</span>
            </h1>
            <br />
            <p className="lead text-white mb-0" data-aos="fade-up" data-aos-delay="100">
              Innovación, confianza y tecnología de vanguardia para potenciar tu crecimiento, éxito y futuro. En ByteBOX, combinamos lo último en avances tecnológicos con un compromiso inquebrantable de calidad, ofreciendo soluciones que transforman la manera en que las empresas y personas se conectan con el futuro digital.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SECCIÓN MODERNA Y LLAMATIVA */}
    <main className="main-content">
      {/* Sección de Valores con diseño moderno */}
      <section className="modern-values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="modern-title" data-aos="fade-up" data-aos-duration="800">
              <span className="title-gradient">Nuestra Esencia</span>
            </h2>
            <p className="modern-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <span className="text-black" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300">Transformamos</span>{' '}
              <span className="text-gray" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">el futuro</span>{' '}
              <span className="text-blue" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">digital</span>
            </p>
          </div>
          
          <div className="essence-cards-container">
            {esenciaCards.map((card: EsenciaCard, index: number) => (
              <div 
                key={card.id} 
                className={`essence-card card-${index + 1}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div 
                  className="card-image"
                  style={{ 
                    background: `linear-gradient(135deg, ${card.color}, ${getDarkerColor(card.color, 20)})`,
                    backgroundImage: `url(${card.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                >
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Misión con diseño futurista */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-visual">
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
              </div>
              <div className="headphone-container">
                {productImages.map((image, index) => {
                  const isActive = index === currentImageIndex;
                  let className = 'floating-headphone';
                  if (isActive) {
                    className = 'floating-headphone active';
                  }
                  return (
                    <img
                      key={`headphone-${index}-${image.alt}`}
                      src={image.url}
                      alt={image.alt}
                      className={className}
                    />
                  );
                })}
              </div>
            </div>
            
            <div 
              className="mission-text"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h2 
                className="mission-title"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span 
                  className="text-black"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Transformamos
                </span>{' '}
                <span 
                  className="text-gray"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  el futuro
                </span>{' '}
                <span 
                  className="text-blue"
                  data-aos="fade-left"
                  data-aos-duration="600"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  digital
                </span>
              </h2>
              
              <p 
                className="mission-description"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-once="true"
              >
                En ByteBox, somos líderes en la distribución de equipos tecnológicos 
                y accesorios de vanguardia. Cada producto que ofrecemos está cuidadosamente 
                seleccionado para brindar la mejor calidad, innovación y rendimiento que
                 impulse el éxito de nuestros clientes.
              </p>
              
              <div 
                className="stats-row"
                ref={statsRef}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-once="true"
              >
                {[
                  { number: `${counts.products}+`, label: 'Productos Vendidos' },
                  { number: `${counts.satisfaction}%`, label: 'Satisfacción Cliente' },
                  { number: `${counts.support}/7`, label: 'Soporte Premium' }
                ].map((stat, index) => (
                  <div 
                    key={`stat-${index}-${stat.label}`}
                    className={`stat-item ${statsVisible ? 'visible' : ''}`}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay={`${300 + (index * 100)}`}
                    data-aos-once="true"
                  >
                    <span 
                      className={`stat-number ${statsVisible ? 'animate' : ''}`}
                      style={{ 
                        transitionDelay: `${index * 0.2}s`
                      }}
                    >
                      {stat.number}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleCotizaClick}
                className="cta-button"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-once="true"
              >
                <span>Cotiza tus Productos</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <Footer />
    </div>
  );
};

export default NuestraMarca; 