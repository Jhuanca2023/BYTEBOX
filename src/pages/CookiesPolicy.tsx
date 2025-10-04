import React from 'react';
import LegalPage from '../components/legal/LegalPage';

const CookiesPolicy: React.FC = () => {
  return (
    <LegalPage 
      title="Política de Cookies"
    >
      <section>
        <p>Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en el sitio web de Bytebox (https://bytebox.pe), los tipos de cookies que utilizamos y cómo puedes gestionarlas. Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con esta política.</p>
      </section>

      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tableta o teléfono móvil) cuando visitas nuestro sitio web. Estas cookies contienen información que se utiliza para mejorar tu experiencia de navegación, recordar tus preferencias y mostrarte contenido relevante.</p>
      </section>

      <section>
        <h2>2. Tipos de cookies que utilizamos</h2>
        
        <h3>2.1 Cookies esenciales</h3>
        <p>Estas cookies son necesarias para que el sitio web funcione correctamente. Permiten funciones básicas como la navegación por la página y el acceso a áreas seguras del sitio web.</p>
        
        <h3>2.2 Cookies de rendimiento</h3>
        <p>Estas cookies nos ayudan a comprender cómo interactúan los visitantes con nuestro sitio web, recopilando información de forma anónima. Esta información nos ayuda a mejorar la forma en que funciona nuestro sitio web.</p>
        
        <h3>2.3 Cookies de funcionalidad</h3>
        <p>Estas cookies permiten que el sitio web recuerde elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y ofrecen características mejoradas y más personales.</p>
        
        <h3>2.4 Cookies de publicidad</h3>
        <p>Estas cookies se utilizan para hacer que los mensajes publicitarios sean más relevantes para ti. Realizan un seguimiento de los visitantes en los sitios web y recopilan información para proporcionar anuncios personalizados.</p>
      </section>

      <section>
        <h2>3. Cookies de terceros</h2>
        <p>Utilizamos servicios de terceros que pueden configurar cookies en tu dispositivo. Estos incluyen:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Para analizar el uso del sitio web</li>
          <li><strong>Facebook Pixel:</strong> Para medir la efectividad de nuestra publicidad</li>
          <li><strong>YouTube:</strong> Para incrustar videos en nuestras páginas</li>
          <li><strong>Herramientas de pago:</strong> Como PayPal o pasarelas de pago</li>
        </ul>
      </section>

      <section>
        <h2>4. Cómo controlar las cookies</h2>
        <p>Puedes controlar y/o eliminar las cookies como desees. Para obtener más información, visita <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>. Puedes eliminar todas las cookies que ya están en tu ordenador y configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si lo haces, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y que algunos servicios y funcionalidades no funcionen.</p>
        
        <h3>4.1 Cómo deshabilitar cookies en los navegadores más populares:</h3>
        <ul>
          <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Configuración del sitio → Cookies</li>
          <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad → Gestión de datos del sitio web</li>
          <li><strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies y permisos del sitio</li>
        </ul>
      </section>

      <section>
        <h2>5. Cambios en nuestra política de cookies</h2>
        <p>Podemos actualizar nuestra Política de Cookies de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política en esta página. Te recomendamos que revises esta Política de Cookies periódicamente para cualquier cambio.</p>
      </section>

      <section>
        <h2>6. Contacto</h2>
        <p>Si tienes alguna pregunta sobre nuestra Política de Cookies, por favor contáctanos a través de los siguientes medios:</p>
        
        <div className="contact-info" style={{marginTop: '1rem', padding: '1rem', background: 'rgba(42, 209, 223, 0.05)', borderRadius: '8px', borderLeft: '3px solid #2ad1df'}}>
          <p style={{margin: '0.5rem 0', fontWeight: 600}}>Bytebox Perú</p>
          <p style={{margin: '0.5rem 0'}}><a href="mailto:contacto@bytebox.pe" style={{color: '#2b6cb0', textDecoration: 'none', borderBottom: '1px dashed #2b6cb0', paddingBottom: '1px'}}>contacto@bytebox.pe</a></p>
          <p style={{margin: '0.5rem 0'}}><a href="tel:+51942507022" style={{color: '#2b6cb0', textDecoration: 'none', borderBottom: '1px dashed #2b6cb0', paddingBottom: '1px'}}>+51 942 507 022</a></p>
          <p style={{margin: '0.5rem 0'}}>Lima, Perú</p>
        </div>
      </section>

      <section>
        <h2>Tipos de cookies que utilizamos</h2>
        
        <h3>Cookies esenciales</h3>
        <p>Estas cookies son necesarias para que el sitio web funcione correctamente. Permiten la navegación por el sitio y el uso de sus funciones, como acceder a áreas seguras del sitio.</p>
        
        <h3>Cookies de rendimiento</h3>
        <p>Estas cookies recopilan información sobre cómo los visitantes usan el sitio web, como qué páginas visitan con más frecuencia. Toda la información que recopilan estas cookies es anónima.</p>
        
        <h3>Cookies de funcionalidad</h3>
        <p>Estas cookies permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y ofrecen características mejoradas y más personales.</p>
        
        <h3>Cookies de publicidad</h3>
        <p>Estas cookies se utilizan para ofrecer anuncios más relevantes para ti y tus intereses. También se utilizan para limitar la cantidad de veces que ves un anuncio y para ayudar a medir la efectividad de las campañas publicitarias.</p>
      </section>

      <section>
        <h2>Cookies de terceros</h2>
        <p>Algunas cookies pueden ser establecidas por servicios externos que aparecen en nuestras páginas. Por ejemplo, podemos usar servicios de análisis de terceros como Google Analytics para ayudarnos a analizar cómo los usuarios usan el sitio.</p>
      </section>

      <section>
        <h2>Cómo controlar las cookies</h2>
        <p>Puedes controlar y/o eliminar las cookies como desees. Para más información, visita <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>. Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores para evitar que se coloquen.</p>
        
        <h3>Configuración de cookies en los navegadores más populares:</h3>
        <ul>
          <li><strong>Google Chrome</strong>: Configuración → Privacidad y seguridad → Configuración de sitios → Cookies</li>
          <li><strong>Mozilla Firefox</strong>: Opciones → Privacidad y Seguridad → Cookies y datos del sitio</li>
          <li><strong>Safari</strong>: Preferencias → Privacidad → Gestión de datos del sitio web</li>
          <li><strong>Microsoft Edge</strong>: Configuración → Configuración del sitio → Cookies y permisos del sitio</li>
        </ul>
      </section>

      <section>
        <h2>Cambios en nuestra política de cookies</h2>
        <p>Podemos actualizar nuestra Política de Cookies periódicamente. Te notificaremos de cualquier cambio publicando la nueva Política de Cookies en esta página. Te recomendamos revisar esta Política de Cookies periódicamente para cualquier cambio.</p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta sobre nuestra Política de Cookies, no dudes en contactarnos:</p>
        <address>
          Bytebox Perú<br />
          Email: contacto@bytebox.pe<br />
          Teléfono: +51 942 507 022
        </address>
      </section>
    </LegalPage>
  );
};

export default CookiesPolicy;
