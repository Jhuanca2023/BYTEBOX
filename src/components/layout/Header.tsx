import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLaptop, FaLaptopCode, FaLaptopHouse, FaServer, FaHandshake, FaInfoCircle, FaPaintBrush, FaChartLine, FaFileAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo/version_principal/Logo_Horizontal_VersiónPrincipal.webp';
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
      { label: 'Tech Hardware', icon: <FaServer />, anchor: '#accesorios', external: false },
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
      { label: 'Únete como socio', icon: <FaHandshake />, anchor: 'mailto:contacto@bytebox.pe?subject=Quiero unirme como socio', external: true },
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollPos = window.pageYOffset;
          
          // Mostrar header SOLO cuando estamos en la parte superior (menos de 50px)
          // No importa la dirección del scroll, solo la posición
          const visible = currentScrollPos <= 50;
          
          setIsVisible(visible);
          setPrevScrollPos(currentScrollPos);
          
          if (isMobileOpen) {
            setIsMobileOpen(false);
            setOpenDropdown(null);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isMobileOpen]);

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
      const solutionIdMap: Record<string, string> = {
        '#onboarding': 'onboarding',
        '#offboarding': 'offboarding',
        '#servicios': 'servicios',
        '#recompra': 'buyback',
      };

      const isCurrentlyMobile = window.innerWidth < 992;

      if (isCurrentlyMobile && solutionIdMap[path]) {
        setIsMobileOpen(false);
        setOpenDropdown(null);
        
        const solutionsSection = document.querySelector('#soluciones');
        if (solutionsSection) {
          setTimeout(() => {
            solutionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            setTimeout(() => {
              const event = new CustomEvent('activateSolution', { 
                detail: { solutionId: solutionIdMap[path] } 
              });
              window.dispatchEvent(event);
            }, 300);
          }, 150);
        }
      } else {
        const el = document.querySelector(path);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
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
    }, 500); // Increased to 500ms f
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
    }, 500);
  };

  const headerClassName = isVisible ? 'header' : 'header header--hidden';

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const nav = document.querySelector('.header__nav');
      const menuButton = document.querySelector('.header__menu-button');
      
      if (
        nav &&
        menuButton &&
        !nav.contains(target) &&
        !menuButton.contains(target)
      ) {
        setIsMobileOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  return (
    <>
      {isMobileOpen && isMobile && (
        <div 
          className="header__overlay"
          onClick={() => {
            setIsMobileOpen(false);
            setOpenDropdown(null);
          }}
          aria-hidden="true"
        />
      )}
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
                  href={item.dropdown ? '#' : item.anchor}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
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
                            e.stopPropagation();
                            if (subItem.external) {
                              window.open(subItem.anchor, '_blank', 'noopener,noreferrer');
                              setOpenDropdown(null);
                              setIsMobileOpen(false);
                            } else if (subItem.anchor.startsWith('#')) {
                              setOpenDropdown(null);
                              handleAnchorNavigation(subItem.anchor);
                            } else {
                              handleInternalNavigation(subItem.anchor);
                            }
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
    </>
  );
};

export default Header;