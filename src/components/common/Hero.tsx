import React from 'react';

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section className="hero-section home-hero">
      <div className="hero-content">
        <h1>Impulsa tu Frontera'<br />
          <span className="hero-highlight">Equipa tu talento global</span>
        </h1>
        <p>
        Gestiona y equipa tu talento global de forma simple y eficiente en más de 120 países.
        </p>
        <button className="hero-cta" onClick={scrollToContact}>Cotiza</button>
      </div>
    </section>
  );
};

export default Hero; 