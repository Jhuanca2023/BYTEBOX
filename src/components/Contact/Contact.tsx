import React, { useState } from 'react';
import { toast } from 'react-toastify';
import locationData from '../../assets/data/location.json';
import './Contact.css';

interface Distrito {
  id: string;
  nombre: string;
}

interface Provincia {
  id: string;
  nombre: string;
  coordenadas: {
    latitud: number;
    longitud: number;
  };
  distritos: Distrito[];
}

interface Departamento {
  id: string;
  nombre: string;
  coordenadas: {
    latitud: number;
    longitud: number;
  };
  provincias: Provincia[];
}

const Contact = () => {
  // Helper function para obtener texto del botón de envío
  const getSubmitButtonText = (submitting: boolean): string => {
    if (submitting) {
      return 'Enviando...';
    }
    return 'Enviar';
  };
  
  // Estados para los selects
  const [selectedDepartamento, setSelectedDepartamento] = useState<string>('');
  const [selectedProvincia, setSelectedProvincia] = useState<string>('');
  const [selectedDistrito, setSelectedDistrito] = useState<string>('');
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [distritos, setDistritos] = useState<Distrito[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: '',
    ruc: '',
    departamento_id: '',
    departamento_nombre: '',
    provincia_id: '',
    provincia_nombre: '',
    distrito_id: '',
    distrito_nombre: '',
    objetivo: ''
  });

  // Obtener datos de departamentos
  const departamentos = locationData.departamentos as Departamento[];

  // Manejadores de eventos
  const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const departamentoId = e.target.value;
    const departamento = departamentos.find(d => d.id === departamentoId);
    
    setSelectedDepartamento(departamentoId);
    setSelectedProvincia('');
    setSelectedDistrito('');
    setDistritos([]);
    setProvincias(departamento?.provincias || []);
    
    setFormData(prev => ({
      ...prev,
      departamento_id: departamentoId,
      departamento_nombre: departamento?.nombre || '',
      provincia_id: '',
      provincia_nombre: '',
      distrito_id: '',
      distrito_nombre: ''
    }));
  };

  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinciaId = e.target.value;
    const provincia = provincias.find(p => p.id === provinciaId);
    
    setSelectedProvincia(provinciaId);
    setSelectedDistrito('');
    setDistritos(provincia?.distritos || []);
    
    setFormData(prev => ({
      ...prev,
      provincia_id: provinciaId,
      provincia_nombre: provincia?.nombre || '',
      distrito_id: '',
      distrito_nombre: ''
    }));
  };

  const handleDistritoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const distritoId = e.target.value;
    const distrito = distritos.find(d => d.id === distritoId);
    
    setSelectedDistrito(distritoId);
    
    setFormData(prev => ({
      ...prev,
      distrito_id: distritoId,
      distrito_nombre: distrito?.nombre || ''
    }));
  };

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

  // Función para obtener la URL base de la API según el entorno
  const getApiBaseUrl = () => {
    // Si estamos en desarrollo, usamos la URL local
    if (process.env.NODE_ENV === 'development') {
      return '/api';
    }
    // En producción, usamos la ruta relativa a la API
    return '/api';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Enviando datos:', formData);
      const response = await fetch(`${getApiBaseUrl()}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
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
          departamento_id: '',
          departamento_nombre: '',
          provincia_id: '',
          provincia_nombre: '',
          distrito_id: '',
          distrito_nombre: '',
          objetivo: ''
        });
        setSelectedDepartamento('');
        setSelectedProvincia('');
        setSelectedDistrito('');
        setProvincias([]);
        setDistritos([]);
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
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Nombre" 
                className="form-input"
                required 
              />
              <input 
                type="text" 
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                placeholder="Apellido" 
                className="form-input"
                required 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email de trabajo" 
                className="form-input full-width"
                required 
              />
              <input 
                type="text" 
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                placeholder="Empresa" 
                className="form-input"
              />
              <input 
                type="text" 
                name="ruc"
                value={formData.ruc}
                onChange={handleInputChange}
                placeholder="RUC (opcional)" 
                className="form-input"
                maxLength={11}
                pattern="[0-9]{11}"
                title="El RUC debe tener 11 dígitos numéricos"
              />
              <div className="location-section full-width">
                <h4>Ubicación de la empresa</h4>
                <div className="location-row">
                  <select 
                    value={selectedDepartamento} 
                    onChange={handleDepartamentoChange}
                    className="form-select"
                    aria-label="Seleccionar Departamento"
                    required
                  >
                    <option value="">Seleccionar Departamento</option>
                    {departamentos.map(dep => (
                      <option key={dep.id} value={dep.id}>
                        {dep.nombre}
                      </option>
                    ))}
                  </select>

                  <select 
                    value={selectedProvincia} 
                    onChange={handleProvinciaChange}
                    className="form-select"
                    disabled={!selectedDepartamento}
                    aria-label="Seleccionar Provincia"
                    required
                  >
                    <option value="">Seleccionar Provincia</option>
                    {provincias.map(prov => (
                      <option key={prov.id} value={prov.id}>
                        {prov.nombre}
                      </option>
                    ))}
                  </select>

                  <select 
                    value={selectedDistrito} 
                    onChange={handleDistritoChange}
                    className="form-select"
                    disabled={!selectedProvincia}
                    aria-label="Seleccionar Distrito"
                    required
                  >
                    <option value="">Seleccionar Distrito</option>
                    {distritos.map(dist => (
                      <option key={dist.id} value={dist.id}>
                        {dist.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="objetivo">¿Cuál es tu objetivo?</label>
                <textarea 
                  id="objetivo"
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tus necesidades, volumen y cronograma..." 
                  rows={4}
                  className="form-textarea"
                  required
                />
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