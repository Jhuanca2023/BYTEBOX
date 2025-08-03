import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ReactNode, ReactElement, RefObject } from 'react';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: ReactNode;
  children: ReactElement;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  tooltipClassName?: string;
  disabled?: boolean;
}

// Constantes para evitar números mágicos
const TOOLTIP_OFFSET = 8;
const HIDE_ANIMATION_DURATION = 200;
const DEFAULT_DELAY = 300;

export const Tooltip = ({
  content,
  children,
  position = 'top',
  delay = DEFAULT_DELAY,
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
  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) {
      return;
    }
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;
    
    switch (position) {
      case 'top':
        x = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        y = triggerRect.top - tooltipRect.height - TOOLTIP_OFFSET;
        break;
      case 'right':
        x = triggerRect.right + TOOLTIP_OFFSET;
        y = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        break;
      case 'bottom':
        x = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        y = triggerRect.bottom + TOOLTIP_OFFSET;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - TOOLTIP_OFFSET;
        y = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        break;
    }
    
    // Asegurarse de que el tooltip no se salga de la pantalla
    x = Math.max(TOOLTIP_OFFSET, Math.min(x, window.innerWidth - tooltipRect.width - TOOLTIP_OFFSET));
    y = Math.max(TOOLTIP_OFFSET, Math.min(y, window.innerHeight - tooltipRect.height - TOOLTIP_OFFSET));
    
    setCoords({ x, y });
  }, [position]);

  // Mostrar el tooltip con retraso
  const showTooltip = useCallback(() => {
    if (disabled) {
      return;
    }
    
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
  }, [disabled, delay, updatePosition]);

  // Ocultar el tooltip
  const hideTooltip = useCallback(() => {
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
    }, HIDE_ANIMATION_DURATION) as unknown as number;
  }, []);

  // Manejar eventos del teclado
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isVisible) {
      hideTooltip();
    }
  }, [isVisible, hideTooltip]);

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
  }, [isVisible, updatePosition]);

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

  // Función para manejar la referencia del elemento hijo
  const handleChildRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      triggerRef.current = node;
      
      // Reenviar la referencia al componente hijo si es necesario
      const childRef = (children as ReactElement & { ref?: RefObject<HTMLElement> | ((node: HTMLElement | null) => void) }).ref;
      if (childRef) {
        if (typeof childRef === 'function') {
          childRef(node);
        } else if ('current' in childRef) {
          childRef.current = node;
        }
      }
    }
  }, [children]);

  // Función para obtener el aria-describedby
  const getAriaDescribedBy = () => {
    if (isMounted) {
      return 'tooltip-content';
    }
    return undefined;
  };

  // Clonar el elemento hijo para agregar los manejadores de eventos
  let trigger;
  if (children && React.isValidElement(children)) {
    trigger = React.cloneElement(children, {
      ref: handleChildRef,
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
      onFocus: showTooltip,
      onBlur: hideTooltip,
      onKeyDown: handleKeyDown,
      'aria-describedby': getAriaDescribedBy(),
    } as React.HTMLAttributes<HTMLElement>);
  } else {
    trigger = children;
  }

  if (!content || disabled) {
    return <>{children}</>;
  }

  // Función para obtener las clases de la flecha según la posición
  const getArrowClasses = (pos: TooltipPosition): string => {
    const baseClasses = 'absolute w-2 h-2 bg-gray-900 transform rotate-45';
    
    switch (pos) {
      case 'top':
        return `${baseClasses} -bottom-1 left-1/2 -translate-x-1/2`;
      case 'right':
        return `${baseClasses} left-0 top-1/2 -translate-y-1/2 -translate-x-1/2`;
      case 'bottom':
        return `${baseClasses} -top-1 left-1/2 -translate-x-1/2`;
      case 'left':
        return `${baseClasses} right-0 top-1/2 -translate-y-1/2 translate-x-1/2`;
      default:
        return baseClasses;
    }
  };

  // Función para obtener las clases del tooltip
  const getTooltipClasses = () => {
    let classes = `tooltip ${position}`;
    if (isVisible) {
      classes += ' visible';
    }
    if (tooltipClassName) {
      classes += ` ${tooltipClassName}`;
    }
    return classes;
  };

  // Función para obtener la opacidad
  const getOpacity = () => {
    if (isVisible) {
      return 1;
    }
    return 0;
  };

  return (
    <div className={className}>
      {trigger}
      {isMounted && (
        <div
          ref={tooltipRef}
          className={getTooltipClasses()}
          style={{
            position: 'absolute',
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            opacity: getOpacity(),
            transition: `opacity ${HIDE_ANIMATION_DURATION}ms ease-in-out`,
          }}
          role="tooltip"
          id="tooltip-content"
        >
          {content}
          {/* Flecha del tooltip */}
          <div className={getArrowClasses(position)} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
