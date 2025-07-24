import './Buyback.css';


const Buyback = () => (
  <section id="recompra" className="solution-card" style={{ position: 'relative' }}>
    <h3>Recompra</h3>
    <p>Recompramos tus equipos antiguos, ayudándote a recuperar parte de tu inversión y manteniendo tu infraestructura siempre al día.</p>
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

export default Buyback; 