import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface TabProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

interface TabsProps {
  children: ReactNode;
  defaultActiveId?: string;
  className?: string;
  tabListClassName?: string;
  tabPanelClassName?: string;
}

export const Tab = ({ children, className = '' }: TabProps) => {
  return <div className={`tab-panel ${className}`}>{children}</div>;
};

export const Tabs = ({
  children,
  defaultActiveId,
  className = '',
  tabListClassName = '',
  tabPanelClassName = '',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('');
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabs = Array.isArray(children) ? children : [children];
  const validTabs = tabs.filter((tab) => tab && tab.props && tab.props.id);

  // Establecer la pestaña activa inicial
  useEffect(() => {
    if (validTabs.length > 0) {
      setActiveTab(defaultActiveId || validTabs[0].props.id);
    }
  }, [defaultActiveId, validTabs]);

  // Manejar la navegación por teclado
  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tabId);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = validTabs.findIndex((tab) => tab.props.id === tabId);
      const nextIndex = (currentIndex + 1) % validTabs.length;
      setActiveTab(validTabs[nextIndex].props.id);
      focusTab(validTabs[nextIndex].props.id);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const currentIndex = validTabs.findIndex((tab) => tab.props.id === tabId);
      const prevIndex = (currentIndex - 1 + validTabs.length) % validTabs.length;
      setActiveTab(validTabs[prevIndex].props.id);
      focusTab(validTabs[prevIndex].props.id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTab(validTabs[0].props.id);
      focusTab(validTabs[0].props.id);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveTab(validTabs[validTabs.length - 1].props.id);
      focusTab(validTabs[validTabs.length - 1].props.id);
    }
  };

  // Enfocar una pestaña específica
  const focusTab = (tabId: string) => {
    const tabElement = document.getElementById(`tab-${tabId}`);
    if (tabElement) {
      tabElement.focus();
    }
  };

  if (validTabs.length === 0) return null;

  return (
    <div className={`tabs ${className}`}>
      <div 
        ref={tabListRef} 
        className={`tab-list ${tabListClassName}`} 
        role="tablist"
        aria-label="Navegación por pestañas"
      >
        {validTabs.map((tab) => {
          const isActive = activeTab === tab.props.id;
          return (
            <button
              key={tab.props.id}
              id={`tab-${tab.props.id}`}
              className={`tab ${isActive ? 'active' : ''}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.props.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.props.id)}
              onKeyDown={(e) => handleKeyDown(e, tab.props.id)}
            >
              {tab.props.title}
            </button>
          );
        })}
      </div>

      <div className={`tab-panels ${tabPanelClassName}`}>
        {validTabs.map((tab) => (
          <div
            key={tab.props.id}
            id={`panel-${tab.props.id}`}
            className={`tab-panel ${activeTab === tab.props.id ? 'active' : ''}`}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`tab-${tab.props.id}`}
            hidden={activeTab !== tab.props.id}
          >
            {tab.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos CSS para el componente Tabs
const tabsStyles = `
  .tabs {
    width: 100%;
  }
  
  .tab-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 0 1.5rem;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .tab {
    padding: 0.75rem 1.5rem;
    margin-right: 0.25rem;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    transition: all 0.2s ease;
    position: relative;
    outline: none;
  }
  
  .tab:hover {
    color: #333;
    background-color: #f5f5f5;
  }
  
  .tab:focus-visible {
    box-shadow: 0 0 0 2px #4a90e2;
    border-radius: 4px 4px 0 0;
  }
  
  .tab.active {
    color: #2563eb;
    border-bottom-color: #2563eb;
    font-weight: 600;
  }
  
  .tab-panel {
    padding: 1.5rem 0;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 640px) {
    .tab {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }
`;

// Agregar estilos al documento
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = tabsStyles;
  document.head.appendChild(styleTag);
}

export default Tabs;
