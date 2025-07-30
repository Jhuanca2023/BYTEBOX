import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
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
      <Header />
      <main>
        <Hero />
        <section className="solutions-section">
          <h2>Soluciones eficientes<br />para <strong>productividad global</strong></h2>
          
          {/* Mobile Version */}
          <SolutionsMobile />
          
          {/* Desktop Version */}
          <div className="solutions-desktop">
            <Onboarding />
            <Offboarding />
            <Storage />
            <Platform />
            <Buyback />
          </div>
        </section>
        <Hardware />
        <PlatformSection />
        <WorldStats />
        <Testimonials />
        <Contact />
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