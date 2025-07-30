import { useState } from 'react';
import './SolutionsMobile.css';

type Solution = {
  id: string;
  title: string;
  description: string;
  number: string;
};

const SolutionsMobile = () => {
  const [activeSolution, setActiveSolution] = useState<number>(0);

  const solutions: Solution[] = [
    {
      id: 'onboarding',
      title: 'Onboarding',
      description: 'Equipamos tu talento global sin complicaciones. Incorporar nuevos colaboradores nunca fue tan fácil. Gestionamos la compra y entrega de equipos tecnológicos en más de 120 países, en tiempo récord (solo 3.5 días) y al mejor precio. Con ByteBOX, tu equipo trabaja desde el primer día.',
      number: '01'
    },
    {
      id: 'offboarding',
      title: 'Offboarding',
      description: 'Gestionamos el proceso de salida de colaboradores de manera segura y eficiente. Recuperamos equipos, realizamos borrado seguro de datos y nos aseguramos de que todo el proceso cumpla con las normativas de protección de datos.',
      number: '02'
    },
    {
      id: 'storage',
      title: 'Almacenaje',
      description: 'Almacenamiento seguro y gestión de inventario para tus equipos tecnológicos. Ofrecemos soluciones flexibles de almacenamiento que se adaptan a tus necesidades, con seguimiento en tiempo real y máxima seguridad para tus activos tecnológicos.',
      number: '03'
    },
    {
      id: 'platform',
      title: 'Plataforma',
      description: 'Nuestra plataforma integral te permite gestionar todo el ciclo de vida de tus activos tecnológicos desde un solo lugar. Monitorea, gestiona y optimiza el uso de tus equipos con herramientas avanzadas de análisis y reportes en tiempo real.',
      number: '04'
    },
    {
      id: 'buyback',
      title: 'Recompra',
      description: 'Ofrecemos soluciones de recompra de equipos usados, permitiéndote recuperar valor de tus activos tecnológicos obsoletos. Nos aseguramos de que los dispositivos sean reciclados de manera responsable o reacondicionados para extender su vida útil.',
      number: '05'
    }
  ];

  return (
    <div className="solutions-mobile">
      <div className="solutions-buttons">
        {solutions.map((solution, index) => (
          <button
            key={solution.id}
            className={`solution-tab ${index === activeSolution ? 'active' : ''}`}
            onClick={() => setActiveSolution(index)}
          >
            {solution.title}
          </button>
        ))}
      </div>
      <div className="solution-content">
        <div className="solution-card">
          <h3>{solutions[activeSolution].title}</h3>
          <p>{solutions[activeSolution].description}</p>
          <span className="solution-number">{solutions[activeSolution].number}</span>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMobile;
