import React, { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

// Tipos de variantes de botón
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

// Propiedades del componente Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Estilo visual del botón
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Tamaño del botón
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Si es true, el botón ocupará todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Si es true, el botón se mostrará con un indicador de carga
   * @default false
   */
  isLoading?: boolean;
  /**
   * Contenido que se muestra cuando el botón está en estado de carga
   */
  loadingText?: string;
  /**
   * Elemento que se muestra al inicio del botón (icono, etc.)
   */
  leftIcon?: React.ReactNode;
  /**
   * Elemento que se muestra al final del botón (icono, etc.)
   */
  rightIcon?: React.ReactNode;
  /**
   * Si es true, el botón tendrá un efecto de elevación al hacer hover
   * @default true
   */
  hasHoverEffect?: boolean;
  /**
   * Si es true, el botón tendrá un efecto de pulso sutil
   * @default false
   */
  hasPulseEffect?: boolean;
  /**
   * Si es true, el botón tendrá un efecto de escala al hacer hover
   * @default true
   */
  hasScaleEffect?: boolean;
  /**
   * Clase adicional para el contenedor del botón
   */
  containerClassName?: string;
}

// Mapeo de estilos según la variante
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  link: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
};

// Mapeo de tamaños
const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const getFullWidthClass = (fullWidth: boolean) => {
  if (fullWidth) {
    return 'w-full';
  }
  return '';
};

const getHoverEffectClass = (hasHoverEffect: boolean) => {
  if (hasHoverEffect) {
    return 'hover:shadow-md';
  }
  return '';
};

const getScaleEffectClass = (hasScaleEffect: boolean) => {
  if (hasScaleEffect) {
    return 'transform hover:scale-105 active:scale-95';
  }
  return '';
};

const getDisabledClass = (isDisabled: boolean) => {
  if (isDisabled) {
    return 'pointer-events-none';
  }
  return '';
};

const getContainerFullWidthClass = (fullWidth: boolean) => {
  if (fullWidth) {
    return 'w-full';
  }
  return '';
};

const getButtonContent = (isLoading: boolean, loadingText: string, leftIcon: React.ReactNode, rightIcon: React.ReactNode, children: React.ReactNode) => {
  if (isLoading) {
    return (
      <>
        <span className="animate-spin -ml-1 mr-2 h-4 w-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        {loadingText || 'Cargando...'}
      </>
    );
  }
  
  return (
    <>
      {leftIcon && <span className="flex-shrink-0 h-5 w-5 mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0 h-5 w-5 ml-2">{rightIcon}</span>}
    </>
  );
};

/**
 * Componente de botón personalizado con efectos de hover y foco
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled = false,
  hasHoverEffect = true,
  hasPulseEffect = false,
  hasScaleEffect = true,
  containerClassName = '',
  ...props
}, ref) => {
  const isDisabled = disabled || isLoading;
  
  // Clases base del botón
  const buttonClasses = [
    'inline-flex items-center justify-center',
    'font-medium rounded-md',
    'focus:outline-none transition-all duration-200',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    getFullWidthClass(fullWidth),
    getHoverEffectClass(hasHoverEffect),
    getScaleEffectClass(hasScaleEffect),
    getDisabledClass(isDisabled),
    className,
  ].filter(Boolean).join(' ');
  
  // Clases para el contenedor del botón
  const containerClasses = [
    'inline-flex',
    getContainerFullWidthClass(fullWidth),
    containerClassName,
  ].filter(Boolean).join(' ');
  
  // Contenido del botón
  const buttonContent = getButtonContent(isLoading, loadingText || '', leftIcon, rightIcon, children);
  
  return (
    <div className={containerClasses}>
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {buttonContent}
      </button>
      
      {/* Efecto de pulso */}
      {hasPulseEffect && !isDisabled && !isLoading && (
        <span className="absolute -inset-1.5">
          <span className="absolute inset-0 w-full h-full bg-current rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </span>
      )}
    </div>
  );
});

// Configuración para las herramientas de desarrollo
Button.displayName = 'Button';

export default Button;
