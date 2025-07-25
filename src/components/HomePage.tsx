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
import styled from 'styled-components';

const WhatsAppButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #128C7E;
    transform: scale(1.1);
    color: #FFF;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 25px;
    bottom: 20px;
    right: 20px;
  }
`;

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
          <div className="solutions-grid">
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
      <WhatsAppButton 
        href="https://wa.link/hso7p4" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chatea con nosotros por WhatsApp"
      >
        <FaWhatsapp />
      </WhatsAppButton>
    </>
  );
};

export default HomePage;