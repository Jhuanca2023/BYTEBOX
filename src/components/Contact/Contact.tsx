import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
  // Helper function para obtener texto del botón de envío
  const getSubmitButtonText = (submitting: boolean): string => {
    if (submitting) {
      return 'Enviando...';
    }
    return 'Enviar';
  };
  
  // Estados del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: '',
    ruc: '',
    pais: 'Perú',
    objetivo: '',
    pais_destino: '',
    cantidad_unidades: ''
  });

  // Datos del formulario

  // Manejador de eventos para los campos del formulario

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // URL del endpoint de la API - Ruta en XAMPP
  const API_URL = 'https://byteboxinf.tecnovedadesweb.site/api/submit_contact.php';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Enviando datos:', formData);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Error al enviar el formulario');
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Hacer scroll al inicio y luego mostrar la notificación
        scrollToTop();
        
        toast.success('✅ ¡Mensaje enviado con éxito! Pronto nos pondremos en contacto contigo.');
        
        // Resetear el formulario
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          empresa: '',
          ruc: '',
          pais: 'Perú',
          objetivo: '',
          pais_destino: '',
          cantidad_unidades: ''
        });
      } else {
        throw new Error(data.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
      toast.error('❌ ' + errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <input 
                  type="text" 
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Nombres"
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Apellidos"
                  required 
                />
              </div>
              <div className="form-group full-width">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Correo electrónico"
                  required 
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  placeholder="Empresa"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="ruc"
                  name="ruc"
                  value={formData.ruc}
                  onChange={handleInputChange}
                  placeholder="RUC (obligatorio)"
                  required
                  maxLength={11}
                  pattern="[0-9]{11}"
                  title="El RUC es obligatorio y debe tener 11 dígitos numéricos"
                />
              </div>
              <div className="form-section-title">Detalles de tu cotización</div>
              <div className="form-group">
                <input type="hidden" name="pais" value="Perú" />
              </div>
              <div className="form-group full-width">
                <textarea 
                  id="objetivo"
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos qué equipos deseas cotizar" 
                  rows={3}
                  className="form-control mb-3"
                  required
                ></textarea>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      id="cantidad_unidades"
                      name="cantidad_unidades"
                      className="form-control"
                      value={formData.cantidad_unidades}
                      onChange={handleInputChange}
                      min="1"
                      placeholder="Cantidad de unidades"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      id="pais_destino"
                      name="pais_destino"
                      className="form-control"
                      value={formData.pais_destino}
                      onChange={handleInputChange}
                      required
                      placeholder="País de destino"
                    />
                  </div>
                </div>
              </div>
              {/* Sección de mensajes de estado se maneja con toastify */}
            </div>
            <div className="button-wrapper">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {getSubmitButtonText(isSubmitting)}
                <span className="btn-arrow">&rarr;</span>
              </button>
            </div>
          </form>

          <div className="contact-info">
            {/* Espacio para información de contacto si es necesario */}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;