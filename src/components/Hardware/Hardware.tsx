import React from 'react';
import './Hardware.css';

const hardwareItems = [
  {
    title: 'Laptops',
    img: 'https://www.tecspal.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1018731%2F285x348%2Fee9b5d9213%2Ftoolkit1.png&w=640&q=75&dpl=dpl_ARampRW6Uj1ptwEUDBzwHYM7tdVw',
  },
  {
    title: 'Auriculares',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Monitores',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Accesorios',
    img: 'https://www.tecspal.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1018731%2F284x346%2Fd1fb85c58e%2Ftoolkitcard4.png&w=640&q=75&dpl=dpl_ARampRW6Uj1ptwEUDBzwHYM7tdVw',
  },
];

const Hardware = () => (
  <section id="hardware" className="hardware-section">
    <h2 className="hardware-title">
      Hardware <span className="light">universal</span> <span className="bold">a medida</span>
    </h2>
    <p className="hardware-subtitle">
      A diferencia de los catálogos tradicionales, no nos limitamos a opciones predefinidas. Nuestro enfoque se trata de flexibilidad, asegurando que obtengas exactamente lo que imaginas para tu fuerza laboral global.
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