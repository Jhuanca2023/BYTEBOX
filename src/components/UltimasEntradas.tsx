import React from 'react';
import Header from './common/Header';
import Hero from './common/Hero';
import Footer from './common/Footer';
import imgLaptop from '../assets/images/imageLap.png';
import imgCaja from '../assets/images/imagecaja.png';
import imgPlataforma from '../assets/images/plataforma.png';
import imgAccesorios from '../assets/images/accesorios.png';
import imgEarth from '../assets/images/image.png';
import imgDesk from '../assets/images/imagepapel.png';

const UltimasEntradas = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* Sección de temas/empresas */}
      <section style={{ margin: '48px 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 400, textAlign: 'center', marginBottom: 8 }}>
          Explora nuestra <span style={{ color: '#7a8fa6', fontWeight: 700 }}>marca</span>
        </h2>
        <div style={{ display: 'flex', gap: 32, margin: '32px 0 32px 0', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ border: '1.5px solid #232323', borderRadius: 32, padding: '16px 48px', fontSize: '1.15rem', fontWeight: 500, background: '#fff', color: '#232323', cursor: 'pointer', minWidth: 180 }}>Servicios</button>
          <button style={{ border: '1.5px solid #232323', borderRadius: 32, padding: '16px 48px', fontSize: '1.15rem', fontWeight: 500, background: '#fff', color: '#232323', cursor: 'pointer', minWidth: 180 }}>Sobre Tecspal</button>
          <button style={{ border: '1.5px solid #232323', borderRadius: 32, padding: '16px 48px', fontSize: '1.15rem', fontWeight: 500, background: '#fff', color: '#232323', cursor: 'pointer', minWidth: 180 }}>Casos de éxito</button>
          <button style={{ border: '1.5px solid #232323', borderRadius: 32, padding: '16px 48px', fontSize: '1.15rem', fontWeight: 500, background: '#fff', color: '#232323', cursor: 'pointer', minWidth: 180 }}>Trabajo Remoto</button>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          margin: '32px 0 32px 0',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 1100
        }}>
          {/* Tarjeta 1 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0001', padding: 0, display: 'flex', flexDirection: 'column', minHeight: 370, position: 'relative' }}>
            <img src={imgLaptop} alt="Offboarding" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Offboarding: <span style={{ color: '#7a8fa6', fontWeight: 400 }}>El proceso que no debe subestimarse</span></div>
              <div style={{ fontSize: '0.98rem', color: '#7D7D7D', marginBottom: 12 }}>¿Sabés cómo proteger datos y recuperar equipos al despedir a un colaborador?</div>
            </div>
            <button style={{ position: 'absolute', bottom: 18, right: 24, width: 44, height: 44, borderRadius: '50%', background: '#263040', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px #0002', cursor: 'pointer' }}>
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 2 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0001', padding: 0, display: 'flex', flexDirection: 'column', minHeight: 370, position: 'relative' }}>
            <img src={imgEarth} alt="Asia" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Tecspal llega a China: <span style={{ color: '#7a8fa6', fontWeight: 400 }}>creciendo en Asia</span></div>
              <div style={{ fontSize: '0.98rem', color: '#7D7D7D', marginBottom: 12 }}>Tecspal desembarca en China para seguir creciendo y generando nuevas oportunidades.</div>
            </div>
            <button style={{ position: 'absolute', bottom: 18, right: 24, width: 44, height: 44, borderRadius: '50%', background: '#263040', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px #0002', cursor: 'pointer' }}>
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 3 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0001', padding: 0, display: 'flex', flexDirection: 'column', minHeight: 370, position: 'relative' }}>
            <img src={imgCaja} alt="Qubika" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Qubika & Tecspal: <span style={{ color: '#7a8fa6', fontWeight: 400 }}>Optimizando el ciclo de vida del hardware</span></div>
              <div style={{ fontSize: '0.98rem', color: '#7D7D7D', marginBottom: 12 }}>Qubika renovó su tecnología con Buyback, optimizando costos y reduciendo desperdicios.</div>
            </div>
            <button style={{ position: 'absolute', bottom: 18, right: 24, width: 44, height: 44, borderRadius: '50%', background: '#263040', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px #0002', cursor: 'pointer' }}>
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 4 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0001', padding: 0, display: 'flex', flexDirection: 'column', minHeight: 370, position: 'relative' }}>
            <img src={imgPlataforma} alt="Hardware sostenible" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>El futuro del <span style={{ color: '#7a8fa6', fontWeight: 400 }}>hardware sostenible</span>: Impulsando la economía circular con buyback</div>
              <div style={{ fontSize: '0.98rem', color: '#7D7D7D', marginBottom: 12 }}>Renová tu tecnología con Buyback: optimizá recursos y promové un futuro sostenible.</div>
            </div>
            <button style={{ position: 'absolute', bottom: 18, right: 24, width: 44, height: 44, borderRadius: '50%', background: '#263040', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px #0002', cursor: 'pointer' }}>
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 5 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0001', padding: 0, display: 'flex', flexDirection: 'column', minHeight: 370, position: 'relative' }}>
            <img src={imgAccesorios} alt="Onboarding remoto" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Onboarding remoto: <span style={{ color: '#7a8fa6', fontWeight: 400 }}>7 tips para incorporar empleados</span></div>
              <div style={{ fontSize: '0.98rem', color: '#7D7D7D', marginBottom: 12 }}>El onboarding remoto es crucial para el compromiso y la productividad. Descubrí 7 consejos prácticos para integrar a nuevos colaboradores desde el primer día.</div>
            </div>
            <button style={{ position: 'absolute', bottom: 18, right: 24, width: 44, height: 44, borderRadius: '50%', background: '#263040', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px #0002', cursor: 'pointer' }}>
              <span>&#8594;</span>
            </button>
          </div>
          {/* Tarjeta 6 */}
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 2px 16px #0001', padding: 0, display: 'flex', flexDirection: 'column', minHeight: 370, position: 'relative' }}>
            <img src={imgDesk} alt="Guía para equipar" style={{ width: '100%', height: 140, objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
            <div style={{ padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>Guía para equipar a <span style={{ color: '#7a8fa6', fontWeight: 400 }}>empleados remotos</span></div>
              <div style={{ fontSize: '0.98rem', color: '#7D7D7D', marginBottom: 12 }}>Equipar a empleados remotos es clave para el éxito. Aprendé a elegir los dispositivos adecuados, cumplir con las normativas locales y mantener su equipamiento de forma efectiva.</div>
            </div>
            <button style={{ position: 'absolute', bottom: 18, right: 24, width: 44, height: 44, borderRadius: '50%', background: '#263040', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px #0002', cursor: 'pointer' }}>
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      </section>
      <main style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          
          <p>Aquí irá el contenido de las últimas entradas. Puedes personalizar este contenido.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UltimasEntradas; 