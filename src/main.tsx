import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Importar estilos globales
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importar utilidades de animación
import { initAllAnimations } from './utils/animations';

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

// Renderizar la aplicación
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<AppWithAnimations />);
} else {
  console.error('No se encontró el elemento con id "root"');
}
