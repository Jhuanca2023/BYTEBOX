import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

const AnimatedSection = ({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  once = false,
  rootMargin = '0px'
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) hasAnimated.current = true;
        } else {
          if (!once || !hasAnimated.current) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
        root: null
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, rootMargin]);

  const animationClass = isVisible ? 'animate' : once && hasAnimated.current ? 'animate' : 'animate-out';

  return (
    <div 
      ref={sectionRef} 
      className={`animated-section ${animationType} ${className} ${animationClass}`}
      style={{
        '--animation-delay': `${delay}ms`,
        animationDelay: `${delay}ms`
      } as React.CSSProperties}
      data-visible={isVisible}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
