
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


document.addEventListener('DOMContentLoaded', () => {
  
  const carruseles = document.querySelectorAll('.swiper-container');
  
  carruseles.forEach(carrusel => {
    new Swiper(carrusel, {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });

 l
  const animarAlScroll = () => {
    const elementos = document.querySelectorAll('[data-aos]');
    
    elementos.forEach(elemento => {
      const posicion = elemento.getBoundingClientRect().top;
      const alturaVentana = window.innerHeight / 1.2;
      
      if (posicion < alturaVentana) {
        elemento.style.opacity = '1';
        elemento.style.transform = 'translateY(0)';
      }
    });
  };

  
  window.addEventListener('scroll', animarAlScroll);
  

  animarAlScroll();
});