import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Importación de estilos de Swiper
import 'swiper/swiper-bundle.css'; // Importa todos los estilos de Swiper

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  className?: string;
  slideClassName?: string;
  navigation?: boolean;
  pagination?: boolean | 'bullets' | 'fraction' | 'progressbar' | 'custom';
  autoplay?: boolean | { delay: number; disableOnInteraction: boolean };
  loop?: boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards';
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number | 'auto';
      spaceBetween?: number;
    };
  };
  onSlideChange?: (swiper: SwiperType) => void;
  onSwiper?: (swiper: SwiperType) => void;
}

const ImageSlider = ({
  images,
  className = '',
  slideClassName = '',
  navigation = true,
  pagination = true,
  autoplay = false,
  loop = true,
  effect = 'slide',
  slidesPerView = 1,
  spaceBetween = 30,
  breakpoints,
  onSlideChange,
  onSwiper,
}: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Inicializar navegación personalizada
  useEffect(() => {
    if (!swiper || !isMounted) return;
    
    if (navigation && prevRef.current && nextRef.current) {
      // @ts-ignore - Los tipos de Swiper no incluyen correctamente las propiedades de navegación personalizada
      swiper.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper, isMounted, navigation]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        effect={effect}
        loop={loop}
        navigation={navigation ? {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'opacity-30 cursor-not-allowed',
        } : false}
        pagination={pagination ? {
          clickable: true,
          type: typeof pagination === 'boolean' ? 'bullets' : pagination,
          bulletClass: 'swiper-pagination-bullet bg-gray-400 opacity-100',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
        } : false}
        autoplay={autoplay}
        breakpoints={breakpoints}
        onSwiper={(swiperInstance) => {
          setSwiper(swiperInstance);
          onSwiper?.(swiperInstance);
        }}
        onSlideChange={(swiperInstance) => {
          onSlideChange?.(swiperInstance);
        }}
        a11y={{
          prevSlideMessage: 'Diapositiva anterior',
          nextSlideMessage: 'Siguiente diapositiva',
          firstSlideMessage: 'Esta es la primera diapositiva',
          lastSlideMessage: 'Esta es la última diapositiva',
          paginationBulletMessage: 'Ir a la diapositiva {{index}}',
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={slideClassName}>
            <div className="relative w-full h-full">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
                loading={index > 1 ? 'lazy' : 'eager'}
                width="1200"
                height="675"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-sm sm:text-base">{image.caption}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegación personalizada */}
      {navigation && (
        <>
          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Diapositiva anterior"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Siguiente diapositiva"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
