import React, { useState } from 'react';

const menuItems = [
  {
    label: 'Soluciones',
    anchor: '#soluciones',
    dropdown: [
      { label: 'Gestión de Activos de TI', anchor: '#almacenaje' },
      { label: 'Adquisición de TI y Onboarding', anchor: '#onboarding' },
      { label: 'Recuperación y Offboarding de Equipos', anchor: '#offboarding' },
    ],
  },
  {
    label: 'Plataforma',
    anchor: '#plataforma',
    dropdown: [
      { label: 'Plataforma', anchor: '#plataforma' },
      { label: 'Demo', anchor: '#demo' },
    ],
  },
  {
    label: 'Socios',
    anchor: '#socios',
    dropdown: [
      { label: 'Partners', anchor: '#partners' },
      { label: 'Afíliate', anchor: '#afiliate' },
    ],
  },
  {
    label: 'Recursos',
    anchor: '#recursos',
    dropdown: [
      { label: 'Blog', anchor: '#blog' },
      { label: 'Testimonios', anchor: '#testimonios' },
      { label: 'Contacto', anchor: '#contacto' },
    ],
  },
];

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="main-header bubble-header">
      <div className="bubble-header-inner">
        <div className="logo">
          <span>bytebox</span>
        </div>
        <nav className="main-nav">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={item.dropdown ? 'has-dropdown' : ''}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href={item.anchor}>{item.label}</a>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="dropdown">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}><a href={sub.anchor}>{sub.label}</a></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <select className="lang-select" defaultValue="ESP">
            <option value="ESP">ESP</option>
            <option value="ENG">ENG</option>
          </select>
          <button className="cta-btn" onClick={scrollToContact}>Cotiza</button>
          <button className="login-btn">Inicia sesión</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 