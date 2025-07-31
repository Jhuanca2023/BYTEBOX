import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo/version_principal/Logo_Horizontal_VersiónPrincipal.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLaptop, FaLaptopCode, FaLaptopHouse, FaServer, FaHandshake, FaInfoCircle, FaPaintBrush, FaChartLine, FaFileAlt } from 'react-icons/fa';

const menuItems = [
  {
    label: 'Soluciones',
    anchor: '#soluciones',
    dropdown: [
      { label: 'Gestión de activos IT', icon: <FaLaptop />, anchor: '#onboarding', external: false },
      { label: 'Adquisicion de TI y Onboarding', icon: <FaLaptopCode />, anchor: '#onboarding', external: false },
      { label: 'Offboarding y retiro de equipos', icon: <FaLaptopHouse />, anchor: '#offboarding', external: false },
    ],
  },
  {
    label: 'Plataforma',
    anchor: '#plataforma',
    dropdown: [
      { label: 'Plataforma centralizada', icon: <FaServer />, anchor: '#OUR_PLATFORM', external: false },
      { label: 'Alianzas', icon: <FaHandshake />, anchor: '/alianzas', external: false },
    ],
  },
  {
    label: 'Nosotros',
    anchor: '/sobre-nosotros',
    dropdown: [
      { label: 'Sobre nosotros', icon: <FaInfoCircle />, anchor: '/sobre-nosotros', external: false },
      { label: 'Nuestra Marca', icon: <FaPaintBrush />, anchor: '/nuestra-marca', external: false },
      { label: 'Casos de éxito', icon: <FaChartLine />, anchor: '#testimonios', external: false },
      { label: 'Únete como socio', icon: <FaHandshake />, anchor: '#contacto', external: false },
    ],
  },
  {
    label: 'Recursos',
    anchor: '#recursos',
    dropdown: [
      { label: 'Últimas entradas', icon: <FaFileAlt />, anchor: '/ultimas-entradas', external: false },
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

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, isAnchor: boolean = false) => {
    if (isAnchor) {
      e.preventDefault();
      if (location.pathname === '/') {
        const el = document.querySelector(path);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: path } });
      }
    } else {
      // Regular navigation
      if (path.startsWith('http')) {
        window.open(path, '_blank');
      } else {
        navigate(path);
      }
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
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleDropdownClick(item.label);
                  }}
                >
                  {item.label} {item.dropdown && <span className="arrow">▼</span>}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="submenu-simple">
                    <div className="dropdown-arrow" />
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.anchor}
                          onClick={(e) => {
                            if (subItem.external) return;
                            const isAnchor = subItem.anchor.startsWith('#');
                            handleNavigation(e, subItem.anchor, isAnchor);
                          }}
                          target={subItem.external ? '_blank' : '_self'}
                          rel={subItem.external ? 'noopener noreferrer' : ''}
                          className="dropdown-item"
                        >
                          <span className="dropdown-icon">{subItem.icon}</span>
                          <span className="dropdown-text">{subItem.label}</span>
                        </a>
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