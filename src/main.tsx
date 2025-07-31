import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Importar estilos de AOS
import 'aos/dist/aos.css';
// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importar scripts de animación
import AOS from 'aos';
// Importar Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Inicializar Swiper
declare global {
  interface Window { mySwiper: any; }
}

const initSwipers = () => {
  // Inicializar cualquier swiper que necesites
  if (document.querySelector('.mySwiper')) {
    window.mySwiper = new Swiper('.mySwiper', {
      modules: [Navigation, Pagination],
      // Opciones del swiper
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

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
