import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../ui';
import styles from './WorldStats.module.css';

type CountsType = {
  onboardings: number;
  clients: number;
  countries: number;
};

type StatItem = {
  id: number;
  number: number;
  label: keyof CountsType;
  displayLabel: string;
  suffix?: string;
};

const WorldStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    { id: 1, number: 5500, label: 'onboardings', displayLabel: 'Onboardings exitosos', suffix: '+' },
    { id: 2, number: 200, label: 'clients', displayLabel: 'Clientes satisfechos', suffix: '+' },
    { id: 3, number: 130, label: 'countries', displayLabel: 'Países operativos', suffix: '+' },
  ];

  const flags = [
    { code: 'pe', name: 'Perú' },
    { code: 'cl', name: 'Chile' },
    { code: 'bo', name: 'Bolivia' },
    { code: 'es', name: 'España' },
    { code: 'ar', name: 'Argentina' },
    { code: 'br', name: 'Brasil' },
  ];

  // Efecto para detectar el tamaño de pantalla
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Efecto para detectar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Función para obtener el retraso de animación basado en el índice
  const getAnimationDelay = (index: number) => ({
    '--delay': `${index * 0.1}s`
  } as React.CSSProperties);

  return (
    <section 
      ref={sectionRef}
      className={`container-fluid ${styles.worldStatsSection} py-5 position-relative`}>
      <div className="row justify-content-center align-items-center position-relative">
        <div className={`col-12 col-lg-10 position-relative d-flex justify-content-center align-items-center ${styles.globeCol}`} style={{height: 'auto', maxWidth: '1000px'}}>
          <div className={`w-100 h-100 position-relative ${styles.globeContainer}`} style={{background: 'none', borderRadius: '50%'}}>
            
            {/* Texto "3.5 días" en la parte superior derecha */}
            <div className={`${styles.deliveryTime} ${isVisible ? styles.animateIn : ''}`} style={getAnimationDelay(0)}>
              <h2 className={styles.deliveryNumber}>3.5 días</h2>
              <p className={styles.deliveryText}>Tiempo de entrega promedio</p>
            </div>

            {/* Sección de talentos con avatares en el centro-izquierda */}
            <div className={`${styles.talentsSection} ${isVisible ? styles.animateIn : ''}`} style={getAnimationDelay(1)}>
              <p className={styles.talentsText}>4500+ Talentos creciendo con Bytebox</p>
              <div className={styles.avatarsContainer}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Person 1" className={styles.avatar} />
                <img src="https://www.tecspal.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1018731%2F300x300%2Fc12bc7f13d%2Felipse1.png&w=64&q=75&dpl=dpl_2rkxqqjFrF1P8s1bVgNTCmJ2saRV" alt="Person 2" className={styles.avatar} />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Person 3" className={styles.avatar} />
                <img src="https://a-us.storyblok.com/f/1018731/300x300/65a91e228a/elipse3.png" alt="Person 4" className={styles.avatar} />
                <span className={styles.moreCount}>+</span>
              </div>
              <Link to="/sobre-nosotros" className={styles.experienceBtn}>
                Conoce su experiencia
                <span className={styles.arrow}>→</span>
              </Link>
            </div>

            {/* Texto "Elevando equipos" en la parte inferior izquierda */}
            <div className={`${styles.elevatingText} ${isVisible ? styles.animateIn : ''}`} style={getAnimationDelay(2)}>
              <h3>Elevando <span className={styles.equiposText}>equipos</span></h3>
              <h3>en todo el <span className={styles.mundoText}>mundo</span></h3>
            </div>

            {/* Estadísticas - Solo en desktop */}
            {!isMobile && (
              <div className={styles.statsContainer}>
                {stats.map((stat, index) => (
                  <div key={stat.id} className={`stat-item ${styles.statItem}`}>
                    <div className="stat-content">
                      <AnimatedCounter
                        end={stat.number}
                        suffix={stat.suffix || ''}
                        className="stat-number"
                        duration={2.5}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={`${400 + (index * 200)}`}
                        data-aos-once="true"
                      />
                      <p className="stat-label">{stat.displayLabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

             {/* Banderas de países en la parte derecha - Solo desktop */}
             {!isMobile && (
               <div className={`${styles.flagsContainer} ${isVisible ? styles.animateIn : ''}`} style={getAnimationDelay(3)}>
                 {flags.map((flag) => (
                   <div key={flag.code} className={styles.flag}>
                     <img 
                       src={`https://flagcdn.com/w40/${flag.code}.png`} 
                       alt={flag.name} 
                       className={styles.flagImg} 
                     />
                   </div>
                 ))}
               </div>
             )}

            {/* Líneas decorativas como imágenes */}
            <img
              src="https://www.tecspal.com/_next/static/media/Vector1.647ae1b9.png"
              alt="Línea decorativa 1"
              style={{position: 'absolute', top: '8%', width: '38%', height: 'auto', zIndex: 2, pointerEvents: 'none'}}
            />
            <img
              src="https://www.tecspal.com/_next/static/media/Vector2.585479f7.png"
              alt="Línea decorativa 2"
              style={{position: 'absolute', left: '1%', top: '22%', width: '38%', height: 'auto', zIndex: 2, pointerEvents: 'none'}}
            />
            <img
              src="https://www.tecspal.com/_next/static/media/Vector3.d9f62d6c.png"
              alt="Línea decorativa 3"
              style={{position: 'absolute', right: '30%', bottom: '27%', width: '11%', height: 'auto', zIndex: 2, pointerEvents: 'none'}}
            />
            
            {/* Globo terráqueo */}
            <img
              src="https://a-us.storyblok.com/f/1018731/4096x2559/f58615e7c8/world-full.png"
              alt="Globo terráqueo"
              className={styles.globeImg}
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}
            />
          </div>
        </div>

      </div>

      {/* Contenido móvil - FUERA del row del globo */}
      {isMobile && (
        <div className={styles.mobileContent}>
          {/* Texto "Elevando equipos" */}
          <div 
            className={`${styles.elevatingTextMobile} ${isVisible ? styles.animateIn : ''}`} 
            style={getAnimationDelay(0)}
          >
            <h3>Elevando <span className={styles.equiposText}>equipos</span></h3>
            <h3>en todo el <span className={styles.mundoText}>mundo</span></h3>
          </div>

          {/* Estadísticas */}
          <div className={styles.statsContainerMobile}>
            {stats.map((stat, index) => (
              <div key={stat.id} className={styles.statItemMobile}>
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix || ''}
                  className={styles.statNumberMobile}
                  duration={2.5}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${600 + (index * 200)}`}
                  data-aos-once="true"
                />
                <p className={styles.statLabelMobile}>{stat.displayLabel}</p>
              </div>
            ))}
          </div>

           {/* Carrusel de banderas móvil */}
           <div className={styles.flagsContainerMobile}>
             {flags.map((flag) => (
               <div key={flag.code} className={styles.flagMobile}>
                 <img 
                   src={`https://flagcdn.com/w40/${flag.code}.png`} 
                   alt={flag.name} 
                   className={styles.flagImgMobile} 
                 />
               </div>
             ))}
           </div>
        </div>
      )}
    </section>
  );
};

export default WorldStats;