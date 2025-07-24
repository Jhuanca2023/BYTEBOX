import styles from './WorldStats.module.css';

const WorldStats = () => {
  return (
    <section className={`container-fluid ${styles.worldStatsSection} py-5 position-relative`}>
      <div className="row justify-content-center align-items-center position-relative">
        <div className={`col-12 col-lg-10 position-relative d-flex justify-content-center align-items-center ${styles.globeCol}`} style={{height: 'auto', maxWidth: '1000px'}}>
          <div className={`w-100 h-100 position-relative ${styles.globeContainer}`} style={{background: 'none', borderRadius: '50%'}}>
            
            {/* Texto "3.5 días" en la parte superior derecha */}
            <div className={styles.deliveryTime}>
              <h2 className={styles.deliveryNumber}>3.5 días</h2>
              <p className={styles.deliveryText}>Tiempo de entrega promedio</p>
            </div>

            {/* Sección de talentos con avatares en el centro-izquierda */}
            <div className={styles.talentsSection}>
              <p className={styles.talentsText}>4500+ Talentos creciendo con Tecspal</p>
              <div className={styles.avatarsContainer}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Person 1" className={styles.avatar} />
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Person 2" className={styles.avatar} />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Person 3" className={styles.avatar} />
                <span className={styles.moreCount}>+</span>
              </div>
              <button className={styles.experienceBtn}>
                Conoce su experiencia
                <span className={styles.arrow}>→</span>
              </button>
            </div>

            {/* Texto "Elevando equipos" en la parte inferior izquierda */}
            <div className={styles.elevatingText}>
              <h3>Elevando <span className={styles.equiposText}>equipos</span></h3>
              <h3>en todo el <span className={styles.mundoText}>mundo</span></h3>
            </div>

            {/* Estadísticas en la parte inferior */}
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <h4 className={styles.statNumber}>4500+</h4>
                <p className={styles.statLabel}>Onboardings exitosos</p>
              </div>
              <div className={styles.statItem}>
                <h4 className={styles.statNumber}>200+</h4>
                <p className={styles.statLabel}>Clientes satisfechos</p>
              </div>
              <div className={styles.statItem}>
                <h4 className={styles.statNumber}>130+</h4>
                <p className={styles.statLabel}>Países operativos</p>
              </div>
            </div>

            {/* Banderas de países en la parte derecha */}
            <div className={styles.flagsContainer}>
              <div className={styles.flag}>🇦🇷</div>
              <div className={styles.flag}>🇺🇦</div>
              <div className={styles.flag}>🇦🇲</div>
            </div>

            {/* Botón "Países" en la parte inferior derecha */}
            <div className={styles.countriesBtn}>
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