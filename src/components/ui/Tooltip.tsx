import React, { useState, useRef, useEffect } from 'react';
import type { ReactNode, ReactElement } from 'react';

export interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  position?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  className?: string;
  tooltipClassName?: string;
  disabled?: boolean;
}

export const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = 300,
  className = '',
  tooltipClassName = '',
  disabled = false,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeout = useRef<number | null>(null);
  const hideTimeout = useRef<number | null>(null);

  // Calcular la posición del tooltip
  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;
    const offset = 8;
    
    switch (position) {
      case 'top':
        x = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        y = triggerRect.top - tooltipRect.height - offset;
        break;
      case 'right':
        x = triggerRect.right + offset;
        y = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        break;
      case 'bottom':
        x = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        y = triggerRect.bottom + offset;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - offset;
        y = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        break;
    }
    
    // Asegurarse de que el tooltip no se salga de la pantalla
    x = Math.max(8, Math.min(x, window.innerWidth - tooltipRect.width - 8));
    y = Math.max(8, Math.min(y, window.innerHeight - tooltipRect.height - 8));
    
    setCoords({ x, y });
  };

  // Mostrar el tooltip con retraso
  const showTooltip = () => {
    if (disabled) return;
    
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    
    if (showTimeout.current) {
      clearTimeout(showTimeout.current);
    }
    
    showTimeout.current = window.setTimeout(() => {
      setIsMounted(true);
      requestAnimationFrame(() => {
        updatePosition();
        setIsVisible(true);
      });
    }, delay) as unknown as number;
  };

  // Ocultar el tooltip
  const hideTooltip = () => {
    if (showTimeout.current) {
      clearTimeout(showTimeout.current);
      showTimeout.current = null;
    }
    
    setIsVisible(false);
    
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    
    hideTimeout.current = window.setTimeout(() => {
      setIsMounted(false);
    }, 200) as unknown as number; // Tiempo para la animación de salida
  };

  // Manejar eventos del teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isVisible) {
      hideTooltip();
    }
  };

  // Actualizar posición al cambiar el tamaño de la ventana o el contenido
  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    }
    
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isVisible]);

  // Limpiar timeouts 
  useEffect(() => {
    return () => {
      if (showTimeout.current) {
        clearTimeout(showTimeout.current);
      }
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  // Clonar el elemento hijo para agregar los manejadores de eventos
  const trigger = children && React.isValidElement(children)
    ? React.cloneElement(children, {
        ref: (node: HTMLElement | null) => {
          if (node) {
            triggerRef.current = node;
            
            // Reenviar la referencia al componente hijo si es necesario
            const childRef = (children as any).ref;
            if (childRef) {
              if (typeof childRef === 'function') {
                childRef(node);
              } else if ('current' in childRef) {
                (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
              }
            }
          }
        },
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip,
        onKeyDown: handleKeyDown,
        'aria-describedby': isMounted ? 'tooltip-content' : undefined,
      } as any)
    : children;

  if (!content || disabled) return <>{children}</>;

  return (
    <div className={className}>
      {trigger}
      {isMounted && (
        <div
          ref={tooltipRef}
          className={`tooltip ${position} ${isVisible ? 'visible' : ''} ${tooltipClassName}`}
          style={{
            position: 'absolute',
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 200ms ease-in-out',
          }}
          role="tooltip"
          id="tooltip-content"
        >
          {content}
          {/* Flecha del tooltip */}
          <div 
            className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              position === 'top' ? '-bottom-1 left-1/2 -translate-x-1/2' : ''
            } ${
              position === 'right' ? 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2' : ''
            } ${
              position === 'bottom' ? '-top-1 left-1/2 -translate-x-1/2' : ''
            } ${
              position === 'left' ? 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2' : ''
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
