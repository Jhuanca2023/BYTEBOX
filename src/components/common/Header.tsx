import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLaptop, FaLaptopCode, FaLaptopHouse, FaServer, FaHandshake, FaInfoCircle, FaPaintBrush, FaChartLine, FaFileAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo/version_principal/Logo_Horizontal_VersiónPrincipal.png';

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
  
  // Moved styles outside to avoid recreation on every render
  const headerStyle: React.CSSProperties = {
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out, all 0.3s ease',
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '20px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  };
  
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
  
  const navListStyle: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '30px'
  };
  
  const navItemStyle: React.CSSProperties = {
    position: 'relative',
    listStyle: 'none',
    padding: '0',
    margin: '0 5px'
  };
  
  const navLinkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 12px',
    borderRadius: '4px',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap'
  };

  // Add a small invisible area above the dropdown to prevent it from closing
  const dropdownContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: '0',
    paddingTop: '10px', // This creates a gap between menu and dropdown
    zIndex: 1000,
    pointerEvents: 'none' // Allow clicks to pass through to elements below
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '8px 0',
    minWidth: '240px',
    listStyle: 'none',
    animation: 'fadeIn 0.15s ease-out forwards',
    opacity: 0,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    pointerEvents: 'auto',
    textAlign: 'left'
  };
  
  const dropdownItemStyle: React.CSSProperties & {
    '&:hover'?: React.CSSProperties;
  } = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    color: '#333',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    gap: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    borderRadius: '0'
  };

  const iconStyle = {
    color: '#46d1f0',
    fontSize: '14px',
    minWidth: '24px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(70, 209, 240, 0.1)',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    marginRight: '8px'
  };

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



  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img
            src={logo}
            alt="Logo Bytebox"
            style={{ height: '40px', width: 'auto' }}
          />
        </a>
        <nav>
          <ul style={navListStyle}>
            {menuItems.map(item => (
              <li
                key={item.label}
                style={navItemStyle}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleMouseEnter(item.label)}
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
                  style={navLinkStyle}
                  onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = '#46d1f0';
                  }}
                  onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = '#fff';
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <span style={{
                      display: 'inline-flex',
                      transition: 'transform 0.2s ease',
                      transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      marginLeft: '8px',
                      width: '0',
                      height: '0',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #fff',
                      position: 'relative',
                      top: '2px'
                    }}></span>
                  )}
                </a>
                {item.dropdown && openDropdown === item.label && (
                  <div 
                    style={dropdownContainerStyle}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <ul 
                      style={dropdownStyle}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                    {item.dropdown.map(subItem => (
                      <li key={subItem.label} style={{ padding: 0 }}>
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
                          }}
                          style={dropdownItemStyle}
                          className="dropdown-item"
                          onMouseEnter={(e) => {
                            const icon = e.currentTarget.querySelector('span:first-child') as HTMLElement;
                            if (icon) {
                              icon.style.color = '#46d1f0';
                            }
                          }}
                          onMouseLeave={(e) => {
                            const icon = e.currentTarget.querySelector('span:first-child') as HTMLElement;
                            if (icon) {
                              icon.style.color = '#6c757d';
                            }
                          }}
                        >
                          <span style={iconStyle}>{subItem.icon}</span>
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
      <style>{
        `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }</style>
    </header>
  );
};

export default Header;