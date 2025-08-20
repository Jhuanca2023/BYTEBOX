import Header from '../common/Header';
import Footer from '../common/Footer';
import SeoComponent from '../SEO';
import { useEffect, useState } from 'react';
import './BuybackPage.css';

const BuybackPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    // Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos con clase 'animate-on-scroll'
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleFAQClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const answer = item.querySelector('.faq-answer') as HTMLElement;
    const icon = item.querySelector('.faq-icon') as HTMLElement;
    const section = item.closest('section');
    const imageElement = section?.querySelector('img') as HTMLImageElement;
    
    if (!answer || !icon) return;
    
    // Close all other FAQ items in the same section
    const allFAQItems = section?.querySelectorAll('.faq-item');
    allFAQItems?.forEach(faqItem => {
      if (faqItem !== item) {
        faqItem.classList.remove('active');
        const otherAnswer = faqItem.querySelector('.faq-answer') as HTMLElement;
        const otherIcon = faqItem.querySelector('.faq-icon') as HTMLElement;
        if (otherAnswer) otherAnswer.style.maxHeight = '0';
        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
      }
    });
    
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 20 + 'px';
      icon.style.transform = 'rotate(45deg)';
      
      // Change image based on the question
      const questionText = item.querySelector('h4')?.textContent;
      if (imageElement && questionText) {
        updateSectionImage(section, questionText, imageElement);
      }
    } else {
      answer.style.maxHeight = '0';
      icon.style.transform = 'rotate(0deg)';
    }
  };

  const updateSectionImage = (section: Element | null, questionText: string, imageElement: HTMLImageElement) => {
    if (!section) return;
    
    const sectionClass = section.className;
    
    // Add fade effect
    imageElement.style.opacity = '0.5';
    
    setTimeout(() => {
      if (sectionClass.includes('resale-section')) {
        if (questionText.includes('¿Qué hacemos?')) {
          imageElement.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center';
          imageElement.alt = 'Evaluación de equipos tecnológicos';
        } else if (questionText.includes('¿Cómo funciona?')) {
          imageElement.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center';
          imageElement.alt = 'Proceso de evaluación tecnológica';
        } else if (questionText.includes('mejor momento')) {
          imageElement.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center';
          imageElement.alt = 'Momento ideal para actualizar tecnología';
        }
      } else if (sectionClass.includes('data-wiping-section')) {
        if (questionText.includes('¿Qué hacemos?')) {
          imageElement.src = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center';
          imageElement.alt = 'Proceso de borrado seguro de disco duro';
        } else if (questionText.includes('¿Cómo funciona?')) {
          imageElement.src = 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=400&fit=crop&crop=center';
          imageElement.alt = 'Proceso de borrado seguro de disco duro';
        }
      } else if (sectionClass.includes('recycling-section')) {
        if (questionText.includes('¿Qué hacemos?')) {
          imageElement.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center';
          imageElement.alt = 'Procesamiento de equipos tecnológicos con responsabilidad ambiental';
        } else if (questionText.includes('¿Cómo funciona?')) {
          imageElement.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=center';
          imageElement.alt = 'Proceso de gestión de residuos electrónicos';
        }
      }
      
      // Restore opacity after image loads
      imageElement.onload = () => {
        imageElement.style.opacity = '1';
      };
    }, 150);
  };

  const handleServiceCardClick = (section: string) => {
    setActiveCard(activeCard === section ? null : section);
    
    // Desplazamiento suave a la sección correspondiente
    const sectionElement = document.querySelector(`.${section}-section`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Actualizar la imagen de la sección
      const imageElement = sectionElement.querySelector('img') as HTMLImageElement;
      if (imageElement) {
        // Add fade effect
        imageElement.style.opacity = '0.5';
        
        setTimeout(() => {
          if (section === 'recompra') {
            imageElement.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center';
            imageElement.alt = 'Recompra de activos TI';
          } else if (section === 'borrado') {
            imageElement.src = 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=400&fit=crop&crop=center';
            imageElement.alt = 'Borrado seguro de datos';
          } else if (section === 'reciclaje') {
            imageElement.src = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&crop=center';
            imageElement.alt = 'Reciclaje de residuos electrónicos';
          }
          
          // Restore opacity after image loads
          imageElement.onload = () => {
            imageElement.style.opacity = '1';
          };
        }, 150);
      }
    }
  };


  return (
    <>
      <SeoComponent 
        title="Programa de Recompra de Equipos - ByteBOX"
        description="Vende tus equipos tecnológicos usados a ByteBOX. Obtén el mejor valor por tu tecnología y únete a nuestro compromiso con la sostenibilidad ambiental."
        keywords="recompra de equipos, vender tecnología usada, compra de dispositivos usados, reciclaje tecnológico, sostenibilidad, renovación de equipos, valor de reventa"
        canonicalUrl="https://bytebox.com/buyback"
      />
      <Header />
      <main className="buyback-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Recupera valor, libera espacio<br/>y reduce tu huella<br/>de carbono</h1>
                <br/>
                <p className="hero-description">Optimiza todo el ciclo de vida de tus equipos y dispositivos TI, ahorrando tiempo, dinero y espacio.</p>
                <a href="#evaluar" className="hero-cta-button">Solicita una cotización</a>
              </div>
            </div>
          </div>
        </section>

        <section className="services-cards">
          <div className="container">
            <div className="services-grid">
              <div 
                className={`service-card animate-on-scroll ${activeCard === 'recompra' ? 'active' : ''}`} 
                onClick={() => handleServiceCardClick('recompra')}
              >
                <div className="service-icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3>Recompra de activos TI</h3>
                <p>Adquirimos tus equipos tecnológicos usados a precios competitivos, ofreciendo la mejor valoración del mercado.</p>
              </div>
              <div 
                className={`service-card animate-on-scroll ${activeCard === 'borrado' ? 'active' : ''}`} 
                onClick={() => handleServiceCardClick('borrado')}
              >
                <div className="service-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Borrado de disco duro</h3>
                <p>Ofrecemos un borrado seguro de datos sensibles, con la opción de entregar certificación.</p>
              </div>
              <div 
                className={`service-card animate-on-scroll ${activeCard === 'reciclaje' ? 'active' : ''}`} 
                onClick={() => handleServiceCardClick('reciclaje')}
              >
                <div className="service-icon">
                  <i className="bi bi-recycle"></i>
                </div>
                <h3>Reciclaje de residuos electrónicos</h3>
                <p>Gestión ambiental responsable de residuos electrónicos, garantizando el cumplimiento de normativas ambientales.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="resale-section">
          <div className="container">
            <div className="resale-content">
              <div className="resale-text">
                <div className="section-badge">
                  <span>Revende y gana</span>
                </div>
                <h2>Reventa de activos de TI</h2>
                <p className="section-description">
                  Nuestro servicio de re-compra de hardware te permite transformar tu 
                  equipo tecnológico en desuso en ahorro, eficiencia y sostenibilidad.
                </p>
                
                <div className="faq-items">
                  <div className="faq-item" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Qué hacemos?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>Evaluamos y compramos tu equipo tecnológico usado, ofreciendo precios justos basados en el valor actual del mercado.</p>
                    </div>
                  </div>
                  
                  <div className="faq-item" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Cómo funciona?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>Nuestro proceso es simple: evalúas tu inventario, nosotros lo valoramos, realizamos el borrado seguro de datos y te pagamos por tu equipo.</p>
                    </div>
                  </div>
                  
                  <div className="faq-item active" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Cuál es el mejor momento para reemplazar equipos?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>En promedio, antes de los 3 años es el momento ideal para actualizar tu tecnología. El equipo aún conserva un buen valor en el mercado secundario y te permite maximizar el retorno de tu inversión.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="resale-image">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=center" alt="Profesional trabajando con tecnología" className="main-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="data-wiping-section">
          <div className="container">
            <div className="data-wiping-content">
              <div className="data-wiping-image">
                <img src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=400&fit=crop&crop=center" alt="Borrado seguro de disco duro" className="wiping-image" />
              </div>
              
              <div className="data-wiping-text">
                <div className="section-badge">
                  <span>Mantén tus datos seguros</span>
                </div>
                <h2>Borrado de disco duro</h2>
                <p className="section-description">
                  Ya sea para reventa o reciclaje, puedes contar con nosotros para un 
                  borrado de datos sensibles seguro y en cumplimiento con las normas.
                </p>
                
                <div className="faq-items">
                  <div className="faq-item active" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Qué hacemos?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>El disco duro de tus equipos se limpia de forma segura con software reconocido a nivel global, y puedes recibir un certificado que lo avale.</p>
                    </div>
                  </div>
                  
                  <div className="faq-item" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Cómo funciona?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>Utilizamos software especializado que sobrescribe múltiples veces los datos, garantizando que la información sea irrecuperable y cumpliendo con estándares internacionales de seguridad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recycling-section">
          <div className="container">
            <div className="recycling-content">
              <div className="recycling-text">
                <div className="section-badge">
                  <span>Reutiliza y reduce</span>
                </div>
                <h2>Reciclaje de residuos electrónicos</h2>
                <p className="section-description">
                  Cuando se trata de equipos obsoletos que ya no pueden usarse o 
                  repararse, ofrecemos soluciones de reciclaje responsables con el 
                  medio ambiente.
                </p>
                
                <div className="faq-items">
                  <div className="faq-item" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Qué hacemos?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>Procesamos de manera responsable todos los equipos que no pueden ser reutilizados, siguiendo protocolos ambientales estrictos para minimizar el impacto ecológico.</p>
                    </div>
                  </div>
                  
                  <div className="faq-item active" onClick={handleFAQClick}>
                    <div className="faq-question">
                      <h4>¿Cómo funciona?</h4>
                      <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>1: Retiramos sus equipos y evaluamos su estado. 2: Le ofrecemos distintas opciones de gestión de residuos electrónicos para que elija. 3: Una vez reciclados o destruidos los equipos, podemos emitir los certificados correspondientes por prácticas sostenibles en su región.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="recycling-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center" alt="Mujer trabajando en oficina sostenible" className="main-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-0 text-start">¿Por qué elegir<br />nuestro programa<br />de recompra?</h2>
              </div>
              <div className="col-lg-7">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '1.5rem'}}>
                          <i className="fas fa-hand-holding-usd"></i>
                        </div>
                        <h4 className="mb-0 ms-3">Valoración justa</h4>
                      </div>
                      <p className="mb-0 text-muted">Precios competitivos basados en el valor real de mercado de tu equipo.</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '1.5rem'}}>
                          <i className="fas fa-bolt"></i>
                        </div>
                        <h4 className="mb-0 ms-3">Proceso rápido</h4>
                      </div>
                      <p className="mb-0 text-muted">Desde la cotización hasta el pago en tiempo récord.</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '1.5rem'}}>
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <h4 className="mb-0 ms-3">Seguridad garantizada</h4>
                      </div>
                      <p className="mb-0 text-muted">Eliminación segura de todos tus datos personales.</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', fontSize: '1.5rem'}}>
                          <i className="fas fa-recycle"></i>
                        </div>
                        <h4 className="mb-0 ms-3">Impacto positivo</h4>
                      </div>
                      <p className="mb-0 text-muted">Contribuye a reducir los desechos electrónicos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="equipment-types py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">¿Qué equipos aceptamos?</h2>
              <p className="lead text-muted">En BYTEBOX recompramos una amplia variedad de dispositivos electrónicos en excelente estado</p>
            </div>
            
            <div className="row g-4">
              {/* Tarjeta de Dispositivos Móviles */}
              <div className="col-md-4">
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0 position-relative overflow-hidden">
                  <div className="text-center mb-4 pt-4">
                    <div className="icon-wrapper bg-soft-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-mobile-alt fa-2x text-primary"></i>
                    </div>
                    <h3 className="h4 mb-4">Dispositivos Móviles</h3>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Smartphones</li>
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Tablets</li>
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Relojes inteligentes</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>Accesorios originales</li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta de Computación */}
              <div className="col-md-4">
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0 position-relative overflow-hidden">
                  <div className="text-center mb-4 pt-4">
                    <div className="icon-wrapper bg-soft-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-laptop fa-2x text-warning"></i>
                    </div>
                    <h3 className="h4 mb-4">Computación</h3>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Laptops y Notebooks</li>
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Computadoras de escritorio</li>
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Monitores</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>Impresoras</li>
                  </ul>
                </div>
              </div>

              {/* Tarjeta de Electrónica */}
              <div className="col-md-4">
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0 position-relative overflow-hidden">
                  <div className="text-center mb-4 pt-4">
                    <div className="icon-wrapper bg-soft-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="fas fa-gamepad fa-2x text-danger"></i>
                    </div>
                    <h3 className="h4 mb-4">Electrónica</h3>
                  </div>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Consolas de videojuegos</li>
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Cámaras digitales</li>
                    <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Auriculares y parlantes</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>Dispositivos de streaming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="evaluar">
          <div className="container">
            <h2>¿Listo para vender tu equipo?</h2>
            <p>Obtén una valoración instantánea en menos de 2 minutos.</p>
            <div className="cta-buttons">
              <a 
                href="/#contacto" 
                className="btn btn-primary"
              >
                Evaluar mi equipo ahora
              </a>
              <a 
                href="https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fhso7p4%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaeMR85t0GiJtTnV-ysst1arzgw6eODtKKGcLmg67R9c95xXv_cIvTDaVfHTrg_aem_0uboe3y38-yvUzFqvYXy5w&e=AT1vOYynzH8LOwdv1kPixdKR6cs9Tr0mD1LENvickxMY3iiiZakhNqwZwneJ9us7TFX18_eNq6XGk2JnDDljZ5Uo_2QPpdsCdM0xYbnglAoiOYxym8xX6Sg" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar con un asesor
              </a>
            </div>
            <div className="trust-badges">
              <div className="badge">✔ Pago garantizado</div>
              <div className="badge">✔ Sin compromiso</div>
              <div className="badge">✔ Proceso seguro</div>
            </div>
          </div>
        </section>
        
        <section className="faq-section">
          <div className="container">
            <h2>Preguntas frecuentes</h2>
            <div className="faq-grid">
              <div className="faq-item" onClick={handleFAQClick}>
                <div className="faq-question">
                  <h3>¿En qué condiciones aceptan los equipos?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>Aceptamos equipos en cualquier estado: nuevos, usados, con daños leves o incluso que no enciendan. Cada condición afectará el valor final de la oferta.</p>
                </div>
              </div>
              <div className="faq-item" onClick={handleFAQClick}>
                <div className="faq-question">
                  <h3>¿Cómo se realiza el pago?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>Ofrecemos múltiples métodos de pago: transferencia bancaria, depósito o efectivo al momento de la recolección, según tu preferencia.</p>
                </div>
              </div>
              <div className="faq-item" onClick={handleFAQClick}>
                <div className="faq-question">
                  <h3>¿Qué hago con mis datos personales?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>Realizamos un borrado seguro de datos siguiendo estándares de la industria para proteger tu información personal.</p>
                </div>
              </div>
              <div className="faq-item" onClick={handleFAQClick}>
                <div className="faq-question">
                  <h3>¿Cuánto tiempo tarda el proceso completo?</h3>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>Desde la cotización hasta el pago, el proceso suele completarse en 24-48 horas hábiles, dependiendo de tu ubicación.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BuybackPage;
