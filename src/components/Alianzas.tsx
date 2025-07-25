import React from 'react';
import Header from './common/Header';

import Footer from './common/Footer';
import imgbannertarg from '../assets/images/bannertarg.png';
import imgstiker from '../assets/images/stiker.png';
import imgCaja from '../assets/images/imagecaja.png';
import imgLap from '../assets/images/imageLap.png';
import styles from './Alianzas.module.css';

import Contact from './Contact/Contact';

const cards = [
  {
    title: 'Amplíe su alcance',
    desc: 'Acceda a clientes de todo el mundo sin barreras logísticas',
    img: imgbannertarg,
    dark: true,
  },
  {
    title: 'Aumente sus ingresos',
    desc: 'Intégrese en nuestra plataforma y añada valor con sus servicios',
    img: imgstiker,
    dark: false,
  },
  {
    title: 'Amplíe su empresa',
    desc: 'Crezca con una solución de confianza que agiliza la gestión del hardware para empresas de todos los tamaños',
    img: imgCaja,
    dark: true,
  },
  {
    title: 'Conectar con empresas líderes',
    desc: 'Trabaja con empresas tecnológicas, fintechs y organizaciones multinacionales que buscan soluciones eficientes y sostenibles',
    img: imgLap,
    dark: false,
  },
];

const partners = [
  {
    logo: 'https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt77c24f32eba61d8c/65e85341504e0303f4f1bb2c/falabella.com_green_icon_mobile.svg', // Puedes cambiar el logo por el de Falabella si lo tienes
    name: <>Fala<span className={styles.partnerNameHighlight}>bella</span></>,
    desc: 'Falabella es una de las principales empresas de retail en Latinoamérica, ofreciendo soluciones innovadoras y una amplia gama de productos y servicios para sus clientes y partners.',
    url: 'https://www.falabella.com.pe/falabella-pe/seller/Bytebox',
  },
  {
    logo: 'https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/d9ae27f0-f2b8-458f-b527-38489a24308e___b42588992c82b8e11076b72bf89bf427.svg',
    name: <>Cool<span className={styles.partnerNameHighlight}>box</span></>,
    desc: 'Coolbox es líder en tecnología y gadgets, brindando productos de última generación y experiencias únicas para empresas y consumidores en toda la región.',
    url: 'https://www.coolbox.pe/bytebox?map=sellerName',
  },
];

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
      <h1>Alianzas estratégicas</h1>
      <p>Conecta tu empresa con los mejores partners y expande tu alcance global.</p>
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
                <div className={styles.partnerName}>{p.name}</div>
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