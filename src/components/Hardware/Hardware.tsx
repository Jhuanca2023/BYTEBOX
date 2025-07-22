
import './Hardware.css';

const hardwareItems = [
  {
    title: 'Conectividad Global',
    img: 'https://www.tecspal.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1018731%2F285x348%2Fee9b5d9213%2Ftoolkit1.png&w=640&q=75&dpl=dpl_DpVc2yCtiK8yQ2qiHqPSjcE9YSR4',
  },
  {
    title: 'Experiencia Personalizada',
    img: 'https://www.tecspal.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1018731%2F284x346%2Fd1fb85c58e%2Ftoolkitcard4.png&w=640&q=75&dpl=dpl_DpVc2yCtiK8yQ2qiHqPSjcE9YSR4',
  },
  {
    title: 'Innovación & Creatividad',
    img: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Calidad y Confianza',
    img: 'https://www.tecspal.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1018731%2F1080x1080%2Fee283aaeec%2Fh390-usb-csf_1080x.webp&w=640&q=75&dpl=dpl_DpVc2yCtiK8yQ2qiHqPSjcE9YSR4',
  },
];


const Hardware = () => (
  <section id="hardware" className="hardware-section">
    <h2 className="hardware-title">
    BYTEBOX<span className="light">Tecnología que une</span> <span className="bold">sin límites</span>
    </h2>
    <p className="hardware-subtitle">
    Llevamos accesorios y equipos tecnológicos de alta calidad a más personas. Diseñamos soluciones que potencian conectividad, productividad y entretenimiento — con foco en las necesidades de América Latina
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