// Configuración centralizada de animaciones
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from 'countup.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { initSmoothScroll as initSmoothScrollUtil } from './smoothScroll';

// Inicializar AOS (Animate On Scroll)
export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
};

// Inicializar contadores animados
export const initCounters = () => {
  const counters = document.querySelectorAll('[data-counter]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target') || '0', 10);
    const countUp = new CountUp(counter as HTMLElement, target, {
      duration: 2.5,
      separator: ',',
      enableScrollSpy: true,
      scrollSpyOnce: true,
    });
    
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  });
};

// Inicializar sliders con Swiper
export const initSliders = () => {
  // Configuración para sliders de testimonios
  const testimonialSliders = document.querySelectorAll('.testimonial-slider');
  
  testimonialSliders.forEach(slider => {
    new Swiper(slider as HTMLElement, {
      modules: [Navigation, Pagination],
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  });
};

// Inicializar tabs/accordion
export const initTabs = () => {
  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.getAttribute('data-tab-target') || '');
      
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      tab.classList.add('active');
      target?.classList.add('active');
    });
  });
};

// Inicializar scroll suave mejorado
export const initSmoothScroll = () => {
  // Usar la implementación mejorada del archivo smoothScroll.ts
  if (typeof window !== 'undefined') {
    initSmoothScrollUtil();
  }
};

// Inicializar todos los efectos
export const initAllAnimations = () => {
  initAOS();
  initCounters();
  initSliders();
  initTabs();
  
  // Inicializar scroll suave solo en el cliente
  if (typeof window !== 'undefined') {
    initSmoothScroll();
  }
};
