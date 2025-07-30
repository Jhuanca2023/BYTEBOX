import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Importar estilos de animaciones
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importar scripts de animación
import AOS from 'aos';
import { initSwipers } from './assets/js/swiper.min';

// Componente wrapper para inicializar animaciones
const AppWithAnimations = () => {
  useEffect(() => {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
    
    // Inicializar Swipers
    initSwipers();
    
    // Agregar clase al body cuando las animaciones estén listas
    document.body.classList.add('aos-enabled');
    
    // Limpieza al desmontar
    return () => {
      AOS.refresh();
      document.body.classList.remove('aosa-enabled');
    };
  }, []);
  
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Renderizar la aplicación
createRoot(document.getElementById('root')!).render(<AppWithAnimations />);
