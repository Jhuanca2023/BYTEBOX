import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: (id: string) => void;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
}

interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
}

export const AccordionItem = ({
  id,
  title,
  children,
  isOpen = false,
  onToggle,
  className = '',
  buttonClassName = '',
  contentClassName = '',
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Actualizar la altura cuando el contenido cambie
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isOpen, children]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle?.(id);
    }
  };

  return (
    <div className={`accordion-item ${className}`}>
      <h3 className="accordion-heading">
        <button
          id={`accordion-button-${id}`}
          className={`accordion-button ${buttonClassName} ${isOpen ? 'active' : ''}`}
          onClick={() => onToggle?.(id)}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
        >
          {title}
          <span className="accordion-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </span>
        </button>
      </h3>
      <motion.div
        id={`accordion-content-${id}`}
        ref={contentRef}
        className={`accordion-content ${contentClassName}`}
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
        role="region"
        aria-labelledby={`accordion-button-${id}`}
        aria-hidden={!isOpen}
      >
        <div className="accordion-content-inner">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export const Accordion = ({
  children,
  allowMultiple = false,
  className = '',
  itemClassName = '',
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        if (!allowMultiple) newOpenItems.clear();
        newOpenItems.add(id);
      }
      return newOpenItems;
    });
  };

  // Clonar los hijos para inyectarles las props necesarias
  const childrenWithProps = Array.isArray(children) ? children : [children];
  
  return (
    <div className={`accordion ${className}`}>
      {childrenWithProps.map((child, index) => {
        if (!child || !child.props) return null;
        
        return (
          <AccordionItem
            key={child.props.id || index}
            {...child.props}
            className={`${child.props.className || ''} ${itemClassName}`}
            isOpen={openItems.has(child.props.id)}
            onToggle={handleToggle}
          />
        );
      })}
    </div>
  );
};

// Estilos CSS para el componente Accordion
const accordionStyles = `
  .accordion {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .accordion-item {
    border-bottom: 1px solid #e5e7eb;
  }
  
  .accordion-item:last-child {
    border-bottom: none;
  }
  
  .accordion-heading {
    margin: 0;
  }
  
  .accordion-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background: #ffffff;
    border: none;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .accordion-button:hover {
    background-color: #f9fafb;
  }
  
  .accordion-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
  
  .accordion-button .accordion-icon {
    transition: transform 0.3s ease;
  }
  
  .accordion-button.active .accordion-icon {
    transform: rotate(180deg);
  }
  
  .accordion-content {
    background-color: #f9fafb;
    overflow: hidden;
  }
  
  .accordion-content-inner {
    padding: 0 1.5rem 1.5rem;
  }
  
  @media (max-width: 640px) {
    .accordion-button {
      padding: 1rem 1.25rem;
      font-size: 0.9375rem;
    }
    
    .accordion-content-inner {
      padding: 0 1.25rem 1.25rem;
    }
  }
`;

// Agregar estilos al documento
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = accordionStyles;
  document.head.appendChild(styleTag);
}

export default Accordion;
