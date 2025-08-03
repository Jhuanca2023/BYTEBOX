import { StrictMode, useEffect } from 'react';
import App from '../App';

// Importar utilidades de animación
import { initAllAnimations } from '../utils/animations';

// Componente wrapper para inicializar animaciones
const AppWithAnimations = () => {
  useEffect(() => {
    // Inicializar todas las animaciones
    initAllAnimations();
    
    // Manejar recarga de animaciones al cambiar de ruta
    const handleRouteChange = () => {
      // Pequeño retraso para asegurar que el DOM esté listo
      setTimeout(initAllAnimations, 100);
    };

    // Escuchar eventos de cambio de ruta (si usas React Router)
    window.addEventListener('popstate', handleRouteChange);

    // Limpiar al desmontar
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

export default AppWithAnimations; 