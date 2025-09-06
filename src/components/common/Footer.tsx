import logoFooter from '../../assets/images/logo/Blanco/Logo_Horizontal_Blanco.png';
import './Footer.css';

const Footer = () => (
  <footer className="footer-tecspal">
    <div className="footer-socials">
      <a href="https://wa.me/51942507022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2.05 21.95a1 1 0 0 0 1.28 1.28l4.88-1.33A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.963 7.963 0 0 1-4.09-1.14l-.29-.17-2.89.79.78-2.82-.18-.29A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8Zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.19-.5.65-.62.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.65 0 .97.7 1.91.8 2.05.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.06 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23Z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/byteboxperu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35a1.34 1.34 0 0 0 1.3-1.25V5.25A1.23 1.23 0 0 0 18.72 4ZM9 17.34H6.67v-7.13H9v7.13ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.15A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23Zm9.45 8.21H15v-3.9c0-.93 0-2.18-1.39-2.18s-1.6 1.14-1.6 2.13v3.95h-2.29v-7.13h2.29v.92a2.6 2.6 0 0 1 2.21-1.2c2.35 0 2.78 1.57 2.78 3.63v3.78h-.06Z"/>
        </svg>
      </a>
    </div>
    
    <div className="footer-inner">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logoFooter} alt="Bytebox - Soluciones Tecnológicas" style={{ height: '42px', width: 'auto' }} />
        </div>
        
        <div className="footer-links-row">
          <div className="footer-col links-col">
            <h4>Soluciones</h4>
            <div className="footer-links-grid footer-links-grid-2col">
              <div>
                <a href="/onboarding">Onboarding</a>
                <a href="/offboarding">Offboarding</a>
                <a href="/almacenaje">Almacenaje</a>
              </div>
              <div>
                <a href="/accesorios">Accesorios</a>
                <a href="/alianzas">Alianzas</a>
              </div>
            </div>
          </div>
          
          <div className="footer-col discover-col">
            <h4>Descubre</h4>
            <a href="/sobre-nosotros">Sobre Bytebox</a>
            <a href="/#testimonios">Testimonios</a>
            <a href="/blog">Blog</a>
          </div>
          
          <div className="footer-col contact-col">
            <h4>Contacto</h4>
            <a href="mailto:alex.c@bytebox.pe">alex.c@bytebox.pe</a>
            <a href="tel:+51942507022">+51 942 507 022</a>
          </div>
        </div>
      </div>
      
      <div className="footer-col newsletter-col">
        <div className="newsletter-box">
          <h5>¡Súmate a nuestro viaje!</h5>
          <p>Suscríbete a nuestro boletín y recibe las últimas novedades y actualizaciones.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              required 
              aria-label="Correo electrónico para boletín"
            />
            <button type="submit">
              Suscríbete <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Bytebox. Todos los derechos reservados.
      </div>
      <div className="legal-links">
        <a href="/politica-privacidad">Política de Privacidad</a>
        <a href="/terminos-servicio">Términos de Servicio</a>
        <a href="/politica-cookies">Cookies</a>
      </div>
    </div>
  </footer>
);

export default Footer; 