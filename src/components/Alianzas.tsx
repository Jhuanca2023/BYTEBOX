import React from 'react';
import SeoComponent from './SEO';
import { Header, Footer } from './layout';
import styles from './Alianzas.module.css';
import Contact from './Contact/Contact';
import productImagesData from '../assets/data/productImages.json';
import EnvioGarantia from './EnvioGarantia/EnvioGarantia';

const { cards: cardsData, alianzasImages } = productImagesData;

const cards = cardsData.map((card, index) => ({
  ...card,
  img: alianzasImages[index].url
}));

const Alianzas = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto-alianzas');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SeoComponent 
        title="Alianzas Estratégicas - ByteBOX | Socios y Colaboradores"
        description="Descubre nuestras alianzas estratégicas en ByteBOX. Trabajamos con los mejores socios y colaboradores para ofrecerte soluciones tecnológicas de vanguardia."
        keywords="alianzas estratégicas, socios tecnológicos, colaboradores ByteBOX, partners tecnológicos, soluciones empresariales, tecnología de punta"
        canonicalUrl="https://bytebox.com/alianzas"
      />
      <Header />
      <section className={`${styles.heroSection} ${styles['alianzas-hero-bg']}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 data-aos="fade-up" data-aos-duration="800" className={styles.heroTitle}>
              Alianzas <span className={styles.heroHighlight}>estratégicas globales</span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className={styles.heroDescription}>
              Conecta tu empresa con los mejores partners estratégicos y expande tu alcance global de manera efectiva. Juntos, construiremos relaciones comerciales duraderas que impulsen el crecimiento y la innovación de tu negocio en el mercado internacional.
            </p>
            <div className={styles.ctaWrapper} data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <button 
                className={styles.heroCta}
                onClick={scrollToContact}
              >
                Sé nuestro partner
              </button>
            </div>
          </div>
        </div>
      </section>
 
      
      <main className={styles.alianzasMain}>
        <h2 className={styles.alianzasTitle} data-aos="fade-up" data-aos-duration="800">
          ¿Por qué asociarse con <span 
            className={styles.alianzasTitleHighlight} 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="200"
          >
            BYTEBOX
          </span>?
        </h2>
        <p 
          className={styles.alianzasDesc}
          data-aos="fade-up" 
          data-aos-duration="800" 
          data-aos-delay="300"
        >
          Asociarse con Bytebox significa formar parte de una red global que simplifica la adquisición, gestión y reutilización de hardware para empresas de más de 130 países. Como socio, usted puede:
        </p>
        <div className={styles.alianzasCards}>
          {cards.map((card, i) => (
            <div
              key={`card-${i}-${card.title}`}
              className={styles.alianzasCard}
              style={{ backgroundImage: `url(${card.img})` }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={`${i * 100}`}
              data-aos-once="true"
            >
              <div className={styles.alianzasOverlay}>
                <h3 className={styles.alianzasCardTitle} data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                  {card.title}
                </h3>
                <p className={styles.alianzasCardDesc} data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a 
          href="mailto:alex.c@bytebox.pe" 
          className={`${styles.alianzasBtn} ${styles.alianzasBtnLink}`}
        >
          Crezcamos juntos &rarr;
        </a>
      </main>
      

       
      {/* Technology Showcase Section */}
      <section className={styles.techShowcase}>
        <div className={styles.techContent}>
          <h1 className={styles.techTitle}>
            Tecnología de vanguardia para todos
          </h1>
          <p className={styles.techDescription}>
            En Sistemas & Tecnología, ofrecemos soluciones innovadoras y productos
            de última generación para potenciar tu rendimiento en el hogar y en los
            negocios.
          </p>
          <button 
            className={styles.techButton}
            onClick={scrollToContact}
          >
            Cotiza
          </button>
        </div>

        <div className={styles.techImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5"
            alt="Laptop tecnológica"
            className={styles.techImage}
          />
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>150+</p>
              <p className={styles.statLabel}>Calidad garantizada</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>200+</p>
              <p className={styles.statLabel}>Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>
      

      <div id="contacto-alianzas">
        <EnvioGarantia />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Alianzas;