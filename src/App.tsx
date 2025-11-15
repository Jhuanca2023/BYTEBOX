import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/toastStyles.css';
import HomePage from './components/HomePage';
import ScrollToTop from './components/ScrollToTop';

const SobreNosotros = lazy(() => import('./components/SobreNosotros/SobreNosotros'));
const NuestraMarca = lazy(() => import('./components/NuestraMarca/NuestraMarca'));
const Alianzas = lazy(() => import('./components/Alianzas'));
const UltimasEntradas = lazy(() => import('./components/UltimasEntradas'));
const BuybackPage = lazy(() => import('./components/Buyback/BuybackPage'));
const ServiciosIT = lazy(() => import('./components/ServiciosIT/ServiciosIT'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiesPolicy = lazy(() => import('./pages/CookiesPolicy'));
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/sobre-nosotros" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><SobreNosotros /></Suspense>} />
          <Route path="/nuestra-marca" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><NuestraMarca /></Suspense>} />
          <Route path="/alianzas" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><Alianzas /></Suspense>} />
          <Route path="/ultimas-entradas" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><UltimasEntradas /></Suspense>} />
          <Route path="/buyback" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><BuybackPage /></Suspense>} />
          <Route path="/servicios-it" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><ServiciosIT /></Suspense>} />
          <Route path="/politica-privacidad" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><PrivacyPolicy /></Suspense>} />
          <Route path="/terminos-servicio" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><TermsOfService /></Suspense>} />
          <Route path="/politica-cookies" element={<Suspense fallback={<div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Cargando...</div>}><CookiesPolicy /></Suspense>} />
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
