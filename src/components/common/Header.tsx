import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLaptop, FaLaptopCode, FaLaptopHouse, FaServer, FaHandshake, FaInfoCircle, FaPaintBrush, FaChartLine, FaFileAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo/version_principal/Logo_Horizontal_VersiónPrincipal.png';
import './Header.css';

interface DropdownItem {
  label: string;
  icon: ReactNode;
  anchor: string;
  external?: boolean;
}

interface MenuItem {
  label: string;
  anchor: string;
  dropdown?: DropdownItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Soluciones',
    anchor: '#soluciones',
    dropdown: [
      { label: 'Gestión de activos IT', icon: <FaLaptop />, anchor: '#onboarding', external: false },
      { label: 'Adquisicion de TI y Onboarding', icon: <FaLaptopCode />, anchor: '#onboarding', external: false },
      { label: 'Offboarding y retiro de equipos', icon: <FaLaptopHouse />, anchor: '#offboarding', external: false },
      { label: 'Buyback de equipos', icon: <FaLaptop />, anchor: '/buyback', external: false },
    ],
  },
  {
    label: 'Servicios',
    anchor: '#servicios',
    dropdown: [
      { label: 'Accesorios', icon: <FaServer />, anchor: '#accesorios', external: false },
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
      { label: 'Únete como socio', icon: <FaHandshake />, anchor: 'mailto:alex.c@bytebox.pe?subject=Quiero unirme como socio', external: true },
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
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Mostrar header si estamos en la parte superior, ocultar si hacemos scroll hacia abajo
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  // UI state
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to disable hover behavior and adapt interactions
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 992);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
setOpenDropdown(null);
  }, [location.pathname]);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(current => current === label ? null : label);
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

  const handleInternalNavigation = (path: string) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else if (path.startsWith('#')) {
      handleAnchorNavigation(path);
    } else {
      navigate(path);
    }
    setIsMobileOpen(false);
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setOpenDropdown(null);
      }
    }, 500); // Increased to 500ms for better usability
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsHovering(true);
  };

  const handleDropdownLeave = () => {
    setIsHovering(false);
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 500); // Increased to 500ms for better usability
  };

  const headerClassName = isVisible ? 'header' : 'header header--hidden';

  return (
    <header className={headerClassName}>
      <div className="header__container">
        <a href="/" className="header__logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="Logo Bytebox" />
        </a>
        <div className="header__actions" aria-hidden={isMobileOpen}>
          {/* Explorar button moved to Hero component */}
        </div>
        <button
          className={`header__menu-button${isMobileOpen ? ' is-active' : ''}`}
          aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => {
            setIsMobileOpen(v => !v);
            // Cerrar cualquier dropdown abierto al abrir/cerrar el menú móvil
            setOpenDropdown(null);
          }}
          aria-expanded={isMobileOpen}
        >
          <span className="header__menu-icon">
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </span>
        </button>
        <nav className={`header__nav${isMobileOpen ? ' is-open' : ''}`}>
          <ul className="header__nav-list">
            {menuItems.map(item => (
              <li
                key={item.label}
                className={`header__nav-item${openDropdown === item.label ? ' is-open' : ''}`}
                onMouseEnter={!isMobile ? () => handleMouseEnter(item.label) : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                onFocus={!isMobile ? () => handleMouseEnter(item.label) : undefined}
              >
                <a 
                  href={item.anchor}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.dropdown) {
                      handleDropdownClick(item.label);
                    } else if (item.anchor.startsWith('#')) {
                      handleAnchorNavigation(item.anchor);
                    } else {
                      handleInternalNavigation(item.anchor);
                    }
                  }}
                  className="header__nav-link"
                >
                  {item.label}
                  {item.dropdown && <span className="header__caret" />}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <div 
                    className="header__dropdown-container"
                    onMouseEnter={!isMobile ? handleDropdownEnter : undefined}
                    onMouseLeave={!isMobile ? handleDropdownLeave : undefined}
                  >
                    <ul 
                      className="header__dropdown"
                      onMouseEnter={!isMobile ? handleDropdownEnter : undefined}
                      onMouseLeave={!isMobile ? handleDropdownLeave : undefined}
                    >
                    {item.dropdown.map(subItem => (
                      <li key={subItem.label} className="header__dropdown-item">
                        <a
                          href={subItem.anchor}
                          onClick={(e) => {
                            e.preventDefault();
                            if (subItem.external) {
                              window.open(subItem.anchor, '_blank', 'noopener,noreferrer');
                            } else if (subItem.anchor.startsWith('#')) {
                              handleAnchorNavigation(subItem.anchor);
                            } else {
                              handleInternalNavigation(subItem.anchor);
                            }
                            // Close menu after navigating on mobile
                            setOpenDropdown(null);
                            setIsMobileOpen(false);
                          }}
                          className="header__dropdown-link"
                        >
                          <span className="header__dropdown-icon">{subItem.icon}</span>
                          <span>{subItem.label}</span>
                        </a>
                      </li>
                    ))}
                    </ul>
                  </div>
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