import React, { useState } from 'react';
import LogoHorizontal from '../../assets/images/logo/Blanco/Logo_Horizontal_Blanco.png';
import './Header.css';

// Propuesta profesional de submenús
const menuItems = [
  {
    label: 'Soluciones',
    anchor: '#soluciones',
    dropdown: [
      { label: 'Gestión de activos IT', anchor: '#onboarding' },
      { label: 'Adquisicion de TI y Onboarding', anchor: '#onboarding' },
      { label: 'Offboarding y retiro de equipos', anchor: '#offboarding' },
      
    ],
  },
  {
    label: 'Plataforma',
    anchor: '#plataforma',
    dropdown: [
      { label: 'Plataforma centralizada', anchor: '#platform' },
      { label: 'Alianzas', anchor: '/alianzas' },
    ],
  },
  {
    label: 'Nosotros',
    anchor: '/sobre-nosotros',
    dropdown: [
      { label: 'Sobre nosotros', anchor: '/sobre-nosotros' },
      { label: 'Nuestra Marca', anchor: '/nuestra-marca' },
      { label: 'Casos de éxito', anchor: '#testimonios' },
      { label: 'Únete como socio', anchor: '#contacto' },
    ],
  },
  {
    label: 'Recursos',
    anchor: '#recursos',
    dropdown: [
      { label: 'Blog y noticias', anchor: '#blog' },
      { label: 'Últimas entradas', anchor: '/ultimas-entradas' },
      
    ],
  },
];

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Manejo para mobile: click abre/cierra
  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="main-header bubble-header">
      <div className="bubble-header-inner">
        <div className="logo">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={LogoHorizontal}
              alt="Logo Bytebox"
              style={{ position: 'sticky', height: 44, maxWidth: 200, objectFit: 'contain', display: 'block', marginTop: '10px'}}
            />
          </a>
        </div>
        <nav className="main-nav">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={item.dropdown ? 'has-dropdown' : ''}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onClick={() => handleDropdownClick(item.label)}
              >
                <a href={item.anchor}>{item.label} {item.dropdown && <span className="arrow">▼</span>}</a>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="submenu-simple">
                    {/* Flecha superior */}
                    <div className="dropdown-arrow" />
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        {sub.external ? (
                          <a href={sub.anchor} target="_blank" rel="noopener noreferrer">{sub.label}</a>
                        ) : (
                          <a href={sub.anchor}>{sub.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <select className="lang-select" defaultValue="ESP" title="Idioma">
            <option value="ESP">ESP</option>
            <option value="ENG">ENG</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header; 