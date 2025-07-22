import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import NuestraMarca from './components/NuestraMarca/NuestraMarca';
import Header from './components/common/Header';
import Hero from './components/common/Hero';
import Onboarding from './components/Onboarding/Onboarding';
import Offboarding from './components/Offboarding/Offboarding';
import Storage from './components/Storage/Storage';
import Platform from './components/Platform/Platform';
import Buyback from './components/Buyback/Buyback';
import Hardware from './components/Hardware/Hardware';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/common/Footer';
import PlatformSection from './components/Platform/PlatformSection';
import Alianzas from './components/Alianzas';
import UltimasEntradas from './components/UltimasEntradas';
import WorldStats from './components/Platform/WorldStats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/nuestra-marca" element={<NuestraMarca />} />
        <Route path="/alianzas" element={<Alianzas />} />
        <Route path="/ultimas-entradas" element={<UltimasEntradas />} />
        <Route path="/" element={
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
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
