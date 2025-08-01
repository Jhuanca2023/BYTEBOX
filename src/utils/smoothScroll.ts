/**
 * Utilidad para manejar el scroll suave en la aplicación
 */

/**
 * Desplaza la ventana a un elemento con una transición suave
 * @param target - Selector CSS o elemento HTML al que se desplazará
 * @param options - Opciones de configuración
 */
export const smoothScrollTo = (
  target: string | HTMLElement | Element,
  options: {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
    onComplete?: () => void;
  } = {}
) => {
  const {
    offset = 0,
    duration = 800,
    easing = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    onComplete,
  } = options;

  // Obtener el elemento objetivo
  let element: HTMLElement | null = null;
  
  if (typeof target === 'string') {
    const foundElement = document.querySelector(target);
    if (foundElement instanceof HTMLElement) {
      element = foundElement;
    }
  } else if (target instanceof HTMLElement) {
    element = target;
  } else if (target instanceof Element) {
    // Si es un Element pero no un HTMLElement, intentamos hacer el cast
    element = target as HTMLElement;
  }
  
  if (!element) {
    console.warn(`Elemento no encontrado o no es un HTMLElement: ${target}`);
    return;
  }

  // Calcular la posición de destino
  const startPosition = window.pageYOffset;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const distance = elementPosition - startPosition - offset;
  let startTime: number | null = null;

  // Función de animación
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Aplicar la función de easing
    const easeProgress = easing(progress);
    
    // Desplazar la ventana
    window.scrollTo(0, startPosition + distance * easeProgress);
    
    // Continuar la animación si no ha terminado
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    } else if (onComplete) {
      onComplete();
    }
  };

  // Iniciar la animación
  window.requestAnimationFrame(animation);
};

/**
 * Inicializa el scroll suave para todos los enlaces internos
 */
export const initSmoothScroll = () => {
  // Manejar clics en enlaces internos
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (link) {
      const href = link.getAttribute('href');
      
      // Solo manejar enlaces internos que no sean para pestañas o acordeones
      if (href && href !== '#' && !link.closest('.tab-list') && !link.closest('.accordion')) {
        e.preventDefault();
        smoothScrollTo(href, {
          offset: document.querySelector('.header')?.clientHeight || 0,
          duration: 800,
        });
        
        // Actualizar la URL sin recargar la página
        if (history.pushState) {
          history.pushState(null, '', href);
        } else {
          location.hash = href;
        }
      }
    }
  };

  // Agregar el manejador de eventos
  document.addEventListener('click', handleClick);
  
  // Manejar el scroll al cargar la página si hay un hash en la URL
  const handleInitialScroll = () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        // Pequeño retraso para asegurar que el DOM esté listo
        setTimeout(() => {
          smoothScrollTo(target, {
            offset: document.querySelector('.header')?.clientHeight || 0,
          });
        }, 100);
      }
    }
  };
  
  // Esperar a que se cargue el contenido dinámico si es necesario
  if (document.readyState === 'complete') {
    handleInitialScroll();
  } else {
    window.addEventListener('load', handleInitialScroll);
  }
  
  // Limpieza
  return () => {
    document.removeEventListener('click', handleClick);
    window.removeEventListener('load', handleInitialScroll);
  };
};

/**
 * Inicializa el scroll suave para un enlace específico
 * @param element - Elemento que activará el scroll suave
 * @param options - Opciones de configuración
 */
export const initSmoothScrollForElement = (
  element: HTMLElement,
  options: {
    target: string;
    offset?: number;
    duration?: number;
    onComplete?: () => void;
  }
) => {
  const { target, offset = 0, duration = 800, onComplete } = options;
  
  const handleClick = (e: Event) => {
    e.preventDefault();
    smoothScrollTo(target, { offset, duration, onComplete });
    
    // Actualizar la URL sin recargar la página
    if (history.pushState) {
      history.pushState(null, '', target);
    } else {
      location.hash = target;
    }
  };
  
  element.addEventListener('click', handleClick);
  
  // Devolver función de limpieza
  return () => {
    element.removeEventListener('click', handleClick);
  };
};
