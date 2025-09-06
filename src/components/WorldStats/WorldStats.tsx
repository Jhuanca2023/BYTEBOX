import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [counts, setCounts] = useState<CountsType>({
    onboardings: 0,
    clients: 0,
    countries: 0
  });

  const stats: StatItem[] = [
    { id: 1, number: 5500, label: 'onboardings', displayLabel: 'Onboardings exitosos', suffix: '+' },
    { id: 2, number: 200, label: 'clients', displayLabel: 'Clientes satisfechos', suffix: '+' },
    { id: 3, number: 130, label: 'countries', displayLabel: 'Países operativos', suffix: '+' },
  ];

  const statsRef = useRef<HTMLDivElement>(null);

  // Función para animar los contadores
  const animateCounters = () => {
    if (animated) return;
    
    setAnimated(true);
    
    const duration = 2000; // Duración de la animación en ms
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      setCounts({
        onboardings: Math.floor(progress * 5500),
        clients: Math.floor(progress * 200),
        countries: Math.floor(progress * 130)
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  // Efecto para animar cuando la sección es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Función para formatear números con separadores de miles
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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

            {/* Estadísticas en la parte inferior */}
            <div className={styles.statsContainer} ref={statsRef}>
              {stats.map((stat) => (
                <div key={stat.id} className={`stat-item ${styles.statItem}`}>
                  <div className="stat-content">
                    <h4 className="stat-number">
                      {formatNumber(counts[stat.label])}
                      {stat.suffix || ''}
                    </h4>
                    <p className="stat-label">{stat.displayLabel}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banderas de países en la parte derecha */}
            <div className={`${styles.flagsContainer} ${isVisible ? styles.animateIn : ''}`} style={getAnimationDelay(3)}>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/0d0a9c902a/chile.png" alt="Chile" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/01cb76790b/spain.png" alt="España" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/2a590ed63b/georgia.png" alt="Georgia" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/3f16fbf022/bolivia.png" alt="Bolivia" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/4c1ed6e906/south-korea.png" alt="Corea del Sur" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/5ca350d1c9/china.png" alt="China" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/85d811946f/peru.png" alt="Perú" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/93d785b50d/belize.png" alt="Belice" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/93f74ae2fa/azerbaijan.png" alt="Azerbaiyán" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/201f1a84fd/estonia.png" alt="Estonia" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/337b9f5241/portugal.png" alt="Portugal" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/0349c9e5b0/iceland.png" alt="Islandia" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/484bb14960/australia.png" alt="Australia" className={styles.flagImg} />
              </div>
              <div className={styles.flag}>
                <img src="https://a-us.storyblok.com/f/1018731/512x512/787c8c679b/egypt.png" alt="Egipto" className={styles.flagImg} />
              </div>
            </div>

            {/* Botón "Países" en la parte inferior derecha */}
            <div className={`${styles.countriesBtn} ${isVisible ? styles.animateIn : ''}`} style={getAnimationDelay(4)}>
              <button className={styles.countriesButton}>
                Países
                <span className={styles.arrowIcon}>↗</span>
              </button>
            </div>

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
    </section>
  );
};

export default WorldStats;