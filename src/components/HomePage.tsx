import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
    </>
  );
};

export default HomePage; 