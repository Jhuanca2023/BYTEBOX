import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo/version_principal/Logo_Horizontal_VersiónPrincipal.png';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'Soluciones',
    anchor: '#soluciones',
    dropdown: [
      { label: 'Gestión de activos IT', anchor: '#onboarding', external: false },
      { label: 'Adquisicion de TI y Onboarding', anchor: '#onboarding', external: false },
      { label: 'Offboarding y retiro de equipos', anchor: '#offboarding', external: false },
    ],
  },
  {
    label: 'Plataforma',
    anchor: '#plataforma',
    dropdown: [
      { label: 'Plataforma centralizada', anchor: '#platform', external: false },
      { label: 'Alianzas', anchor: '/alianzas', external: false },
    ],
  },
  {
    label: 'Nosotros',
    anchor: '/sobre-nosotros',
    dropdown: [
      { label: 'Sobre nosotros', anchor: '/sobre-nosotros', external: false },
      { label: 'Nuestra Marca', anchor: '/nuestra-marca', external: false },
      { label: 'Casos de éxito', anchor: '#testimonios', external: false },
      { label: 'Únete como socio', anchor: '#contacto', external: false },
    ],
  },
  {
    label: 'Recursos',
    anchor: '#recursos',
    dropdown: [
      { label: 'Últimas entradas', anchor: '/ultimas-entradas', external: false },
    ],
  },
];

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    anchor: string
  ) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.querySelector(anchor);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: anchor } });
    }
  };

  return (
    <header className="main-header bubble-header">
      <div className="bubble-header-inner">
        <div className="logo">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={logo}
              alt="Logo Bytebox"
              className="logo-img-header"
            />
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: 12 }}>
          <button
            className={`menu-toggle${mobileMenuOpen ? ' menu-toggle-fixed' : ''}`}
            aria-label="Abrir menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="menu-icon" />
          </button>
        </div>
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={item.dropdown ? 'has-dropdown' : ''}
                onMouseEnter={() => !mobileMenuOpen && setOpenDropdown(item.label)}
                onMouseLeave={() => !mobileMenuOpen && setOpenDropdown(null)}
                onClick={() => mobileMenuOpen && handleDropdownClick(item.label)}
              >
                <a href={item.anchor}>
                  {item.label} {item.dropdown && <span className="arrow">▼</span>}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="submenu-simple">
                    <div className="dropdown-arrow" />
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        {sub.external ? (
                          <a href={sub.anchor} target="_blank" rel="noopener noreferrer">{sub.label}</a>
                        ) : sub.anchor.startsWith('#') ? (
                          <a href={sub.anchor} onClick={e => handleAnchorClick(e, sub.anchor)}>{sub.label}</a>
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
      </div>
    </header>
  );
};

export default Header;