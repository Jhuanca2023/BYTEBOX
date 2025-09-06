import './Onboarding.css';

const Onboarding = () => (
  <section id="onboarding" className="solution-card" style={{ position: 'relative' }}>
    <h3>Onboarding</h3>
    <p>
      Equipamos tu talento global sin complicaciones.
      Incorporar nuevos colaboradores nunca fue tan fácil. Gestionamos la compra y entrega de equipos tecnológicos en más de <strong style={{ color: 'black' }}>130 países</strong> y al mejor precio. Con ByteBOX, tu equipo trabaja desde el primer día.
    </p>
    <span className="solution-number">05</span>
    <button
      className="buyback-cta-btn"
      onClick={() => {
        const contacto = document.getElementById('contacto');
        if (contacto) {
          contacto.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Cotiza
    </button>
  </section>
);

export default Onboarding;