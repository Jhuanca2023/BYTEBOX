import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import SeoComponent from './SEO';
import { Header, Hero, Footer } from './layout';
import Onboarding from './Onboarding/Onboarding';
import Offboarding from './Offboarding/Offboarding';
import Storage from './Storage/Storage';
import Hardware from './Hardware/Hardware';
import Servicios from './Servicios/Servicios';
import Buyback from './Buyback/Buyback';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import SolutionsMobile from './SolutionsMobile/SolutionsMobile';
import TechAccessories from './TechAccessories/TechAccessories';
import EnvioGarantia from './EnvioGarantia/EnvioGarantia';
import WorldStats from './WorldStats/WorldStats';
import './HomePage.css';

type LocationState = {
  scrollTo?: string;
} | null;

const HomePage = () => {
  const location = useLocation();
  
  // Configuración de SEO para la página de inicio

  useEffect(() => {
    // Handle scroll to specific section from location state
    const state = location.state as LocationState | { scrollToContact?: boolean };
    
    if (state) {
      if ('scrollToContact' in state && state.scrollToContact) {
        // Function to handle the scroll
        const scrollToContact = () => {
          const contactSection = document.getElementById('contacto');
          if (contactSection) {
            const headerOffset = 100; // Adjust based on your header height
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            // If contact section not found, try again after a short delay
            setTimeout(scrollToContact, 300);
          }
        };
        
        // Initial scroll attempt
        const timer = setTimeout(scrollToContact, 100);
        
        // Cleanup function
        return () => {
          clearTimeout(timer);
          // Clear the state to prevent scrolling again if user navigates back
          window.history.replaceState({ ...location.state, scrollToContact: false }, '');
        };
      } else if ('scrollTo' in state && state.scrollTo) {
        const el = document.querySelector(state.scrollTo);
        if (el) {
          (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return (
    <>
      <SeoComponent 
        title="ByteBOX - Soluciones Tecnológicas Integrales"
        description="Descubre soluciones tecnológicas innovadoras en ByteBOX. Ofrecemos servicios de almacenamiento, plataformas tecnológicas, recompra de equipos y más para potenciar tu negocio."
        keywords="soluciones tecnológicas, almacenamiento en la nube, recompra de equipos, plataforma tecnológica, hardware sostenible, transformación digital, tecnología empresarial, innovación tecnológica"
        canonicalUrl="https://bytebox.com"
      />
      <Header />
      <main>
        <Hero />
        <section className="solutions-section py-5" data-aos="fade-up">
          <h2 className="mb-4 orbitron-regular" data-aos="fade-up" data-aos-delay="100" style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 400}}>
            Soluciones eficientes<br />para <strong style={{fontFamily: 'Orbitron, sans-serif', fontWeight: 600}}>productividad global</strong>
          </h2>
          
          {/* Mobile Version */}
          <div data-aos="fade-up" data-aos-delay="200">
            <SolutionsMobile />
          </div>
          
          {/* Desktop Version */}
          <div className="solutions-desktop" data-aos="fade-up" data-aos-delay="200">
            <Buyback />
            <Offboarding />
            <Storage />
            <Servicios />
            <Onboarding />
          </div>
          
          <div className="hardware-section-container" data-aos="fade-up" data-aos-delay="300">
            <Hardware />
          </div>
        </section>
        
        <TechAccessories />
        
        <EnvioGarantia />
        
        <WorldStats />
        
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