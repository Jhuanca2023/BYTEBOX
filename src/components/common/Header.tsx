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
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const handleAnchorNavigation = (path: string) => {
    if (location.pathname === '/') {
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: path } });
    }
  };

  const handleExternalNavigation = (path: string) => {
    window.open(path, '_blank');
  };

  const handleInternalNavigation = (path: string) => {
    navigate(path);
  };

  const handleAnchorNavigationWithEvent = (_e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    _e.preventDefault();
    handleAnchorNavigation(path);
  };

  const handleRegularNavigation = (_e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('http')) {
      handleExternalNavigation(path);
    } else {
      handleInternalNavigation(path);
    }
  };

  const getArrowClassName = (itemLabel: string) => {
    if (openDropdown === itemLabel) {
      return 'arrow arrow-active';
    }
    return 'arrow';
  };

  const getTargetAttribute = (isExternal: boolean) => {
    if (isExternal) {
      return '_blank';
    }
    return '_self';
  };

  const getRelAttribute = (isExternal: boolean) => {
    if (isExternal) {
      return 'noopener noreferrer';
    }
    return '';
  };

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileDropdownClick = (label: string) => {
    if (mobileMenuOpen) {
      handleDropdownClick(label);
    }
  };

  const handleMouseEnter = (label: string) => {
    if (!mobileMenuOpen) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!mobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const getMenuToggleClassName = () => {
    if (mobileMenuOpen) {
      return 'menu-toggle menu-toggle-fixed';
    }
    return 'menu-toggle';
  };

  const getMainNavClassName = () => {
    if (mobileMenuOpen) {
      return 'main-nav open';
    }
    return 'main-nav';
  };

  const getHasDropdownClassName = (hasDropdown: boolean) => {
    if (hasDropdown) {
      return 'has-dropdown';
    }
    return '';
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
            className={getMenuToggleClassName()}
            aria-label="Abrir menú"
            onClick={handleMenuToggle}
          >
            <span className="menu-icon" />
          </button>
        </div>
        <nav className={getMainNavClassName()}>
          <ul>
            {menuItems.map(item => (
              <li
                key={item.label}
                className={getHasDropdownClassName(!!item.dropdown)}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMobileDropdownClick(item.label)}
              >
                <a 
                  href="#" 
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    handleDropdownClick(item.label);
                  }}
                  className="nav-item-link"
                >
                  {item.label} {item.dropdown && (
                    <span className={getArrowClassName(item.label)}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="arrow-icon">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="submenu-simple">
                    <div className="dropdown-arrow" />
                    {item.dropdown.map(subItem => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.anchor}
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            if (subItem.external) {
                              return;
                            }
                            const isAnchor = subItem.anchor.startsWith('#');
                            if (isAnchor) {
                              handleAnchorNavigationWithEvent(e, subItem.anchor);
                            } else {
                              handleRegularNavigation(e, subItem.anchor);
                            }
                          }}
                          target={getTargetAttribute(subItem.external)}
                          rel={getRelAttribute(subItem.external)}
                          className="dropdown-item"
                        >
                          <span className="dropdown-icon">{subItem.icon}</span>
                          <span className="dropdown-text">{subItem.label}</span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="submenu-arrow"
                          >
                            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                          </svg>
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