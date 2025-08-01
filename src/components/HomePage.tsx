import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SEO } from './SEO';
import Header from './common/Header';
import Hero from './common/Hero';
import Onboarding from './Onboarding/Onboarding';
import Offboarding from './Offboarding/Offboarding';
import Storage from './Storage/Storage';
import Platform from './Platform/Platform';
import Buyback from './Buyback/Buyback';
import Hardware from './Hardware/Hardware';
import PlatformSection from './Platform/PlatformSection';
import WorldStats from './Platform/WorldStats';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from './common/Footer';
import SolutionsMobile from './SolutionsMobile/SolutionsMobile';
import './HomePage.css';

type LocationState = {
  scrollTo?: string;
} | null;

const HomePage = () => {
  const location = useLocation();
  
  // Configuración de SEO para la página de inicio

  useEffect(() => {
    const state = location.state as LocationState;
    if (state && state.scrollTo) {
      const el = document.querySelector(state.scrollTo);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <SEO 
        title="ByteBOX - Soluciones Tecnológicas Integrales"
        description="Descubre soluciones tecnológicas innovadoras en ByteBOX. Ofrecemos servicios de almacenamiento, plataformas tecnológicas, recompra de equipos y más para potenciar tu negocio."
        keywords="soluciones tecnológicas, almacenamiento en la nube, recompra de equipos, plataforma tecnológica, hardware sostenible, transformación digital, tecnología empresarial, innovación tecnológica"
        canonicalUrl="https://bytebox.com"
      />
      <Header />
      <main>
        <Hero />
        <section className="solutions-section py-5" data-aos="fade-up">
          <h2 className="mb-4" data-aos="fade-up" data-aos-delay="100">
            Soluciones eficientes<br />para <strong>productividad global</strong>
          </h2>
          
          {/* Mobile Version */}
          <div data-aos="fade-up" data-aos-delay="200">
            <SolutionsMobile />
          </div>
          
          {/* Desktop Version */}
          <div className="solutions-desktop" data-aos="fade-up" data-aos-delay="200">
            <Onboarding />
            <Offboarding />
            <Storage />
            <Platform />
            <Buyback />
          </div>
        </section>
        
        <div data-aos="fade-up">
          <Hardware />
        </div>
        
        <div data-aos="fade-up">
          <PlatformSection />
        </div>
        
        <div data-aos="fade-up">
          <WorldStats />
        </div>
        
        <div data-aos="fade-up">
          <Testimonials />
        </div>
        
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>
      <Footer />
      <a 
        href="https://wa.link/hso7p4" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chatea con nosotros por WhatsApp"
        className="whatsapp-button"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default HomePage;