import { useEffect } from 'react';
import { useImageCache } from '../utils/imageCache';

// Solo imágenes de banner/hero de cada página
const bannerImages = {
  home: [
    '/src/assets/images/web/home1.webp',
    '/src/assets/images/web/home1movil.webp'
  ],
  sobreNosotros: [
    '/src/assets/images/web/image1.webp',
    '/src/assets/images/web/imagemovil.webp'
  ],
  nuestraMarca: [
    '/src/assets/images/web/image1.webp',
    '/src/assets/images/web/image1movil.webp'
  ],
  alianzas: [
    '/src/assets/images/web/alianzas.webp',
    '/src/assets/images/web/alianzasmovil.webp'
  ],
  ultimasEntradas: [
    '/src/assets/images/web/image4.webp',
    '/src/assets/images/web/image4movil.webp'
  ],
  buyback: [
    '/src/assets/images/web/bgservicio.webp',
    '/src/assets/images/web/bgserviciomovil.webp'
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
