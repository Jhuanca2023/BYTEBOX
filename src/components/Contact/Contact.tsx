import React, { useState } from 'react';
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
  const [selectedDepartamento, setSelectedDepartamento] = useState<string>('');
  const [selectedProvincia, setSelectedProvincia] = useState<string>('');
  const [selectedDistrito, setSelectedDistrito] = useState<string>('');
  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [distritos, setDistritos] = useState<Distrito[]>([]);

  // Obtener datos de departamentos
  const departamentos = locationData.departamentos as Departamento[];

  // Manejar cambio de departamento
  const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const departamentoId = e.target.value;
    setSelectedDepartamento(departamentoId);
    setSelectedProvincia('');
    setSelectedDistrito('');
    setDistritos([]);

    if (departamentoId) {
      const departamento = departamentos.find(d => d.id === departamentoId);
      setProvincias(departamento?.provincias || []);
    } else {
      setProvincias([]);
    }
  };

  // Manejar cambio de provincia
  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinciaId = e.target.value;
    setSelectedProvincia(provinciaId);
    setSelectedDistrito('');

    if (provinciaId) {
      const provincia = provincias.find(p => p.id === provinciaId);
      setDistritos(provincia?.distritos || []);
    } else {
      setDistritos([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input 
                type="text" 
                placeholder="Nombre" 
                className="form-input"
                required 
              />
              <input 
                type="text" 
                placeholder="Apellido" 
                className="form-input"
                required 
              />
              <input 
                type="email" 
                placeholder="Email de trabajo" 
                className="form-input"
                required 
                style={{ gridColumn: '1 / 3' }}
              />
              <input 
                type="text" 
                placeholder="Empresa" 
                className="form-input"
                style={{ gridColumn: '1 / 3' }}
              />
              <div className="location-section" style={{ gridColumn: '1 / 3' }}>
                <h4>Ubicación de la empresa</h4>
                <div className="location-row">
                  <select 
                    value={selectedDepartamento} 
                    onChange={handleDepartamentoChange}
                    className="form-select"
                    aria-label="Seleccionar Departamento"
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
                    onChange={(e) => setSelectedDistrito(e.target.value)}
                    className="form-select"
                    disabled={!selectedProvincia}
                    aria-label="Seleccionar Distrito"
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
              <div className="form-group" style={{ gridColumn: '1 / 3' }}>
                <label htmlFor="goal">¿Cuál es tu objetivo?</label>
                <textarea 
                  id="goal"
                  placeholder="Cuéntanos sobre tus necesidades, volumen y cronograma..." 
                  rows={4}
                  className="form-textarea"
                />
              </div>
            </div>
            <div className="button-wrapper">
              <button type="submit" className="submit-btn">
                Enviar
                <span className="btn-arrow">&rarr;</span>
              </button>
            </div>
          </form>

          <div className="contact-info">
            {/* Eliminada la información de contacto para aprovechar el espacio */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 