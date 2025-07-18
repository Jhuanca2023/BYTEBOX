import React from 'react';

const Contact = () => (
  <section id="contacto" className="contact-section">
    <h2>Contacto</h2>
    <div className="contact-content">
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email de trabajo" required />
        <input type="text" placeholder="Empresa" />
        <textarea placeholder="¿En qué podemos ayudarte?" rows={4} />
        <button type="submit">Enviar mensaje</button>
      </form>
      <div className="contact-info">
        <p><strong>Email:</strong> info@bytebox.com</p>
        <p><strong>Teléfono:</strong> +598 96 209 067</p>
        <p><strong>Ubicación:</strong> Uruguay</p>
      </div>
    </div>
  </section>
);

export default Contact; 