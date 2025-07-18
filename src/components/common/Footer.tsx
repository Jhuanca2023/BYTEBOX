import React from 'react';

const Footer = () => (
  <footer className="footer-tecspal">
    <div className="footer-socials">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.25a.75.75 0 1 1 1.5 0v1.5a.75.75 0 1 1-1.5 0v-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/></svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/></svg>
      </a>
    </div>
    <div className="footer-inner">
      <div className="footer-left">
        <div className="footer-logo">bytebox</div>
        <div className="footer-links-row">
          <div className="footer-col links-col">
            <h4>Soluciones</h4>
            <div className="footer-links-grid footer-links-grid-2col">
              <div>
                <a href="#onboarding">Onboarding</a>
                <a href="#offboarding">Offboarding</a>
                <a href="#almacenaje">Almacenaje</a>
              </div>
              <div>
                <a href="#plataforma">Plataforma</a>
                <a href="#recompra">Recompra</a>
                <a href="#hardware">Hardware</a>
              </div>
            </div>
          </div>
          <div className="footer-col discover-col">
            <h4>Descubre</h4>
            <a href="#">Sobre Bytebox</a><br />
            <a href="#testimonios">Testimonios</a><br />
            <a href="#">Blog</a>
          </div>
          <div className="footer-col contact-col">
            <h4>Contacto</h4>
            <a href="mailto:info@bytebox.com">info@bytebox.com</a><br />
            <a href="tel:+59896209067">(+598) 96 209 067</a>
          </div>
        </div>
      </div>
      <div className="footer-col newsletter-col">
        <div className="newsletter-box">
          <h5>¡Súmate a nosotros en el viaje!</h5>
          <p>Suscríbete a nuestro boletín y recibe las últimas novedades y actualizaciones.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="example@gmail.com" required />
            <button type="submit">Suscríbete <span>&rarr;</span></button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 