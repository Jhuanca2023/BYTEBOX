import { useEffect } from 'react';
import { useImageCache } from '../utils/imageCache';

// Solo imágenes de banner/hero de cada página
const bannerImages = {
  home: [
    '/src/assets/images/home1.png',
    '/src/assets/images/home1movil.png'
  ],
  sobreNosotros: [
    '/src/assets/images/image1.png',
    '/src/assets/images/imagemovil.png'
  ],
  nuestraMarca: [
    '/src/assets/images/image1.png',
    '/src/assets/images/image1movil.png'
  ],
  alianzas: [
    '/src/assets/images/alianzas.png',
    '/src/assets/images/alianzasmovil.png'
  ],
  ultimasEntradas: [
    '/src/assets/images/image4.png',
    '/src/assets/images/image4movil.png'
  ],
  buyback: [
    '/src/assets/images/bgservicio.png',
    '/src/assets/images/bgserviciomovil.png'
  ]
};

// Hook para precargar solo banners de la página actual
export const useBannerPreloader = (pageName: keyof typeof bannerImages) => {
  const { preloadImages } = useImageCache();

  useEffect(() => {
    const banners = bannerImages[pageName];
    if (banners && banners.length > 0) {
      // Precargar banners inmediatamente
      preloadImages(banners).catch(error => {
        console.warn('Error preloading banner images:', error);
      });
    }
  }, [pageName, preloadImages]);
};

// Hook para precargar banners de todas las páginas (opcional)
export const useAllBannersPreloader = () => {
  const { preloadImages } = useImageCache();

  useEffect(() => {
    const allBanners = Object.values(bannerImages).flat();
    
    // Precargar todos los banners en background
    setTimeout(() => {
      preloadImages(allBanners).catch(error => {
        console.warn('Error preloading all banners:', error);
      });
    }, 2000); // Esperar 2 segundos después de cargar la página
  }, [preloadImages]);
};
