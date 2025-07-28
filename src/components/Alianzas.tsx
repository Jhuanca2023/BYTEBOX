import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import styles from './Alianzas.module.css';
import Contact from './Contact/Contact';
import productImagesData from '../assets/data/productImages.json';

// Datos de las tarjetas y partners importados desde el archivo JSON
const { cards: cardsData, partners: partnersData, alianzasImages } = productImagesData;

// Combinar los datos de las tarjetas con las imágenes correspondientes
const cards = cardsData.map((card, index) => ({
  ...card,
  img: alianzasImages[index].url
}));

// Mapear los datos de los partners para incluir el JSX del nombre resaltado
const partners = partnersData.map(partner => ({
  ...partner,
  name: <>{partner.name.replace(partner.nameHighlight, '')}<span className={styles.partnerNameHighlight}>{partner.nameHighlight}</span></>
}));

const Alianzas = () => {
  // Handler para scroll suave al formulario de contacto
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto-alianzas');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header />
      <section className={`hero-section ${styles['alianzas-hero-bg']}`}>
        <div className="hero-content">
          <h1>Alianzas<br /><span className="hero-highlight">estratégicas</span></h1>
          <p>Conecta tu empresa con los mejores partners y expande tu alcance global.</p>
          <button className="hero-cta" onClick={scrollToContact}>Sé nuestro partner</button>
        </div>
      </section>
      <main className={styles.alianzasMain}>
        <h2 className={styles.alianzasTitle}>
          ¿Por qué asociarse con <span className={styles.alianzasTitleHighlight}>BYTEBOX</span>?
        </h2>
        <p className={styles.alianzasDesc}>
          Asociarse con Bytebox significa formar parte de una red global que simplifica la adquisición, gestión y reutilización de hardware para empresas de más de 120 países. Como socio, usted puede:
        </p>
        <div className={styles.alianzasCards}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={styles.alianzasCard}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className={styles.alianzasOverlay}>
                <h3 className={styles.alianzasCardTitle}>{card.title}</h3>
                <p className={styles.alianzasCardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.alianzasBtn} onClick={scrollToContact}>
          Crezcamos juntos &rarr;
        </button>
      </main>
      {/* Sección de partners */}
      <section className={styles.partnersSection}>
        <h2 className={styles.partnersTitle}>
          Conozca a nuestros <span className={styles.partnersTitleHighlight}>Partners</span>
        </h2>
        <p className={styles.partnersDesc}>
          Encuentre un Partner Bytebox con la solución o servicios que necesita.<br />
          Trabaje con expertos especializados en resolver los problemas.
        </p>
        <div className={styles.partnersGrid}>
          {partners.map((p, i) => (
            <div className={styles.partnerCard} key={i}>
              <div className={styles.partnerLogoBox}>
                <img src={p.logo} alt={typeof p.name === 'string' ? p.name : 'Logo partner'} className={styles.partnerLogo} />
              </div>
              <div className={styles.partnerContent}>
                <div className={styles.partnerName}>
                {p.name}
              </div>
                <div className={styles.partnerDesc}>{p.desc}</div>
              </div>
              <a
                href={p.url}
                className={styles.partnerBtn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ir a la plataforma de ${typeof p.name === 'string' ? p.name : ''}`}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={styles.partnerBtnIcon}>
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
      <div id="contacto-alianzas">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Alianzas; 