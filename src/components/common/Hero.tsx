import React from 'react';

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => (
  <section className="hero-section">
    
    <div className="hero-content">
      <h1>Impulsa tu equipo sin fronteras<br />
        <span className="hero-highlight">Equipa tu talento global</span>
      </h1>
      <p>
        Optimiza la adquisición y gestión de hardware para tu equipo global en más de 120 países. Ahorra tiempo y dinero con ByteBox.
      </p>
      <button className="hero-cta" onClick={scrollToContact}>Cotiza</button>
    </div>
    <div className="hero-image">
      <img src="#" alt="Hero Bytebox" />
    </div>
    
  </section>
);

export default Hero; 