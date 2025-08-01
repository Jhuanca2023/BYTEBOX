import { useEffect, useRef, useState } from 'react';
import { CountUp } from 'countup.js';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  end,
  duration = 2.5,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}: AnimatedCounterProps) => {
  const countUpRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const countUp = useRef<CountUp | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && countUpRef.current) {
      countUp.current = new CountUp(countUpRef.current, end, {
        startVal: 0,
        duration,
        decimal: '.',
        decimalPlaces: decimals,
        separator: ',',
        prefix,
        suffix,
      });

      if (!countUp.current.error) {
        countUp.current.start();
      } else {
        console.error(countUp.current.error);
      }
    }

    return () => {
      if (countUp.current) {
        countUp.current.reset();
      }
    };
  }, [isVisible, end, duration, prefix, suffix, decimals]);

  return (
    <span 
      ref={countUpRef} 
      className={`inline-block ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;
