import React from 'react';
import Header from './common/Header';
import Hero from './common/Hero';
import Footer from './common/Footer';

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
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginTop: 0 }}>
          {/* Tarjeta Falabella */}
          <div style={{ background: '#f7f7f7', borderRadius: 28, border: '8px solid #ededed', width: 370, minHeight: 370, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)', marginBottom: 32, position: 'relative', padding: 0 }}>
            <div style={{ width: '100%', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: 18, margin: '18px 0 0 0' }}>
              <img src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt77c24f32eba61d8c/65e85341504e0303f4f1bb2c/falabella.com_green_icon_mobile.svg" alt="Falabella" style={{ width: 120, height: 60, objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ width: '100%', padding: '18px 24px 0 24px', textAlign: 'left' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 6 }}>Falabella: <span style={{ color: '#7a8fa6', fontWeight: 700 }}>Retail líder en Latinoamérica</span></div>
              <div style={{ fontSize: '1rem', color: '#7D7D7D', marginBottom: 12 }}>Soluciones innovadoras y una amplia gama de productos y servicios para empresas y consumidores.</div>
              <a href="https://www.falabella.com.pe/falabella-pe/seller/Bytebox" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #7a8fa6 60%, #232323 100%)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)', cursor: 'pointer', transition: 'background 0.2s', zIndex: 3 }} aria-label="Ver más sobre Falabella">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ width: 28, height: 28, color: '#fff', zIndex: 10 }}>
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          {/* Tarjeta Coolbox */}
          <div style={{ background: '#f7f7f7', borderRadius: 28, border: '8px solid #ededed', width: 370, minHeight: 370, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)', marginBottom: 32, position: 'relative', padding: 0 }}>
            <div style={{ width: '100%', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: 18, margin: '18px 0 0 0' }}>
              <img src="https://coolboxpe.vtexassets.com/assets/vtex.file-manager-graphql/images/d9ae27f0-f2b8-458f-b527-38489a24308e___b42588992c82b8e11076b72bf89bf427.svg" alt="Coolbox" style={{ width: 120, height: 60, objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ width: '100%', padding: '18px 24px 0 24px', textAlign: 'left' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 6 }}>Coolbox: <span style={{ color: '#7a8fa6', fontWeight: 700 }}>Tecnología y gadgets</span></div>
              <div style={{ fontSize: '1rem', color: '#7D7D7D', marginBottom: 12 }}>Productos de última generación y experiencias únicas para empresas y consumidores en toda la región.</div>
              <a href="https://www.coolbox.pe/bytebox?map=sellerName" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #7a8fa6 60%, #232323 100%)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)', cursor: 'pointer', transition: 'background 0.2s', zIndex: 3 }} aria-label="Ver más sobre Coolbox">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ width: 28, height: 28, color: '#fff', zIndex: 10 }}>
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <main style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Últimas entradas</h2>
          <p>Aquí irá el contenido de las últimas entradas. Puedes personalizar este contenido.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UltimasEntradas; 