import { useState, useEffect } from 'react';
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
const navigate = useNavigate();
  const location = useLocation();
  
  // Moved styles outside to avoid recreation on every render
  const headerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '20px 0',
    transition: 'all 0.3s ease',
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
    padding: '5px 0'
  };
  
  const navLinkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 15px',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '8px 0',
    minWidth: '220px',
    zIndex: 1000,
    marginTop: '10px',
    listStyle: 'none',
    animation: 'fadeIn 0.2s ease-out forwards',
    opacity: 0,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f0f0f0'
  };
  
  const dropdownItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    color: '#333',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    gap: '12px',
    backgroundColor: '#fff'
  };

  const iconStyle = {
    color: '#6c757d', // Color plomo/gris
    fontSize: '18px',
    minWidth: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'color 0.2s ease'
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
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
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
                  <ul style={dropdownStyle}>
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
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            // Cambiar el color del ícono a verde al hacer hover
                            const icon = e.currentTarget.querySelector('span:first-child') as HTMLElement;
                            if (icon) {
                              icon.style.color = '#46d1f0';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            // Restaurar el color del ícono a plomo al salir
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