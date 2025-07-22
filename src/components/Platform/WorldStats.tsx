
import styles from './WorldStats.module.css';

const WorldStats = () => {
  return (
    <section className={`container-fluid ${styles.worldStatsSection} py-0 position-relative`}>
      <div className="row justify-content-center align-items-center position-relative">
        <div className={`col-12 col-lg-10 position-relative d-flex justify-content-center align-items-center ${styles.globeCol}`} style={{height: 'auto', maxWidth: '1000px'}}>
          <div className={`w-100 h-100 position-relative ${styles.globeContainer}`} style={{background: 'none', borderRadius: '50%'}}>
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
              style={{position: 'absolute', right: '0%', bottom: '10%', width: '38%', height: 'auto', zIndex: 2, pointerEvents: 'none'}}
            />
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