import './Hardware.css';
import hardwareItems from '../../assets/data/hardwareItems.json';

const Hardware = () => (
  <section id="hardware" className="hardware-section">
    <h2 className="hardware-title">
    BYTEBOX<span className="light">Tecnología que une</span> <span className="bold">sin límites</span>
    </h2>
    <p className="hardware-subtitle">
      Llevamos equipos y accesorios tecnológicos de alta calidad a más personas. Diseñamos soluciones que potencian conectividad, productividad y calidad con foco en las necesidades de cada país.
    </p>
    <div className="hardware-grid">
      {hardwareItems.map((item) => (
        <div className="hardware-card" key={item.title} style={{ backgroundImage: `url(${item.img})` }}>
          <span className="hardware-card-title">{item.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Hardware;