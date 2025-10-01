import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastStyles.css';
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import NuestraMarca from './components/NuestraMarca/NuestraMarca';
import Alianzas from './components/Alianzas';
import UltimasEntradas from './components/UltimasEntradas';
import HomePage from './components/HomePage';
import BuybackPage from './components/Buyback/BuybackPage';
import ServiciosIT from './components/ServiciosIT/ServiciosIT';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/nuestra-marca" element={<NuestraMarca />} />
          <Route path="/alianzas" element={<Alianzas />} />
          <Route path="/ultimas-entradas" element={<UltimasEntradas />} />
          <Route path="/buyback" element={<BuybackPage />} />
          <Route path="/servicios-it" element={<ServiciosIT />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-servicio" element={<TermsOfService />} />
          <Route path="/politica-cookies" element={<CookiesPolicy />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px',
        zIndex: 9999,
        width: 'auto',
        maxWidth: '350px',
        pointerEvents: 'none'
      }}>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{
            position: 'relative',
            width: '100%',
            padding: 0,
            margin: 0,
            top: 0,
            right: 0,
            transform: 'none'
          }}
          toastStyle={{
            pointerEvents: 'auto',
            marginBottom: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
          className="toast-container"
        />
      </div>
    </>
  );
}

export default App;
