import './EnvioGarantia.css';

import { useEffect, useRef, useState } from 'react';

const EnvioGarantia = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desconecta el observer después de que se haya activado una vez
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
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

  return (
    <div 
      ref={sectionRef}
      className={`elementor-element ct-frosted-glass e-con-full e-flex e-con e-child ${isVisible ? 'visible' : ''}`}
    >
      {/* Envíos Gratis */}
      <div className="elementor-element elementor-widget-icon-box">
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="28" height="28">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5-8.5H6V9h5v1zm5 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-9.5h-2.12l-1.09-1.09c-.32-.32-.74-.49-1.16-.49H12V6h4v3z"/>
                </svg>
              </span>
            </div>
            <div className="elementor-icon-box-content">
              <p className="elementor-icon-box-title">
                <span>ENVIOS A NIVEL GLOBAL</span>
              </p>
              <p className="elementor-icon-box-description">ENTREGAMOS EN +130 PAÍSES</p>
            </div>
          </div>
        </div>
      </div>

      {/* Garantía */}
      <div className="elementor-element elementor-widget-icon-box">
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="28" height="28">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </span>
            </div>
            <div className="elementor-icon-box-content">
              <p className="elementor-icon-box-title">
                <span>GARANTÍA EN TUS EQUIPOS</span>
              </p>
              <p className="elementor-icon-box-description">HASTA 5 AÑOS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Entregas Express */}
      <div className="elementor-element elementor-widget-icon-box">
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="40" height="40">
                  <path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5S10.5 2.67 10.5 3.5V9L2 14v2l8.5-2.5V19l-2 1.5V23l3.5-1 3.5 1v-2.5L13.5 19v-5.5L22 16z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </span>
            </div>
            <div className="elementor-icon-box-content">
              <p className="elementor-icon-box-title">
                <span>ENTREGAS EXPRESS</span>
              </p>
              <p className="elementor-icon-box-description">PRIORIZAMOS EL TIEMPO DE ENTREGA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvioGarantia;