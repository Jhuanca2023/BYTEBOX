import { useState, useEffect } from 'react';
import './SolutionsMobile.css';

type Solution = {
  id: string;
  title: string;
  description: string;
  number: string;
  hasButton?: boolean;
};

const SolutionsMobile = () => {
  const [activeSolution, setActiveSolution] = useState<number>(0);

  const solutions: Solution[] = [
    {
      id: 'buyback',
      title: 'Recompra',
      description: 'Recompramos tus equipos antiguos, ayudándote a recuperar parte de tu inversión y manteniendo tu infraestructura siempre al día.',
      number: '01'
    },
    {
      id: 'offboarding',
      title: 'Offboarding',
      description: 'Desvinculación sin fricciones. Cuando un miembro del equipo se va, nos aseguramos de que el hardware no sea un problema. Recuperamos, actualizamos y gestionamos el retiro de equipos de forma segura y ordenada, reduciendo riesgos y costos.',
      number: '02'
    },
    {
      id: 'storage',
      title: 'Almacenaje',
      description: 'Ofrecemos almacenamiento seguro y optimizado, protegiendo tus dispositivos y garantizando su disponibilidad para reutilización o actualización, reduciendo gastos innecesarios.',
      number: '03'
    },
    {
      id: 'servicios',
      title: 'Servicios',
      description: 'Ofrecemos una gama completa de servicios tecnológicos para optimizar tu operación. Incluye soporte técnico especializado, mantenimiento preventivo, gestión de activos TI y soluciones personalizadas para garantizar el máximo rendimiento de tu infraestructura tecnológica.',
      number: '04'
    },
    {
      id: 'onboarding',
      title: 'Onboarding',
      description: 'Equipamos tu talento global sin complicaciones. Incorporar nuevos colaboradores nunca fue tan fácil. Gestionamos la compra y entrega de equipos tecnológicos en más de 130 países y al mejor precio. Con ByteBOX, tu equipo trabaja desde el primer día.',
      number: '05',
      hasButton: true
    }
  ];

  useEffect(() => {
    const handleActivateSolution = (event: Event) => {
      const customEvent = event as CustomEvent<{ solutionId: string }>;
      const solutionId = customEvent.detail?.solutionId;
      
      if (solutionId) {
        const solutionIndex = solutions.findIndex(s => s.id === solutionId);
        if (solutionIndex !== -1) {
          setActiveSolution(solutionIndex);
        }
      }
    };

    window.addEventListener('activateSolution', handleActivateSolution as EventListener);
    
    return () => {
      window.removeEventListener('activateSolution', handleActivateSolution as EventListener);
    };
  }, []);

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
          {solutions[activeSolution].id === 'onboarding' ? (
            <p>
              Equipamos tu talento global sin complicaciones.
              Incorporar nuevos colaboradores nunca fue tan fácil. Gestionamos la compra y entrega de equipos tecnológicos en más de <strong style={{ color: 'black' }}>130 países</strong> y al mejor precio. Con ByteBOX, tu equipo trabaja desde el primer día.
            </p>
          ) : (
            <p>{solutions[activeSolution].description}</p>
          )}
          <span className="solution-number">{solutions[activeSolution].number}</span>
          {solutions[activeSolution].hasButton && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionsMobile;
