import React from 'react';
import Header from './common/Header';
import Hero from './common/Hero';
import Footer from './common/Footer';

const UltimasEntradas = () => {
  return (
    <>
      <Header />
      <Hero />
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