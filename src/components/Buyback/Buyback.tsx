import './Buyback.css';

const Buyback = () => (
  <section id="recompra" className="solution-card" style={{ position: 'relative' }}>
    <h3>Recompra</h3>
    <p>Recompramos tus equipos antiguos, ayudándote a recuperar parte de tu inversión y manteniendo tu infraestructura siempre al día.</p>
    <span 
      className="solution-number" 
      style={{ 
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.3)',
        filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15))'
      }}
    >
      05
    </span>
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