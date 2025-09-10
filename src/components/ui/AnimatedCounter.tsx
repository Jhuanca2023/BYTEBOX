import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  'data-aos'?: string;
  'data-aos-duration'?: string;
  'data-aos-delay'?: string;
  'data-aos-once'?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  className = '',
  ...aosProps 
}: AnimatedCounterProps) => {
  const countUpRef = useRef<HTMLSpanElement>(null);
  const countUpInstance = useRef<CountUp | null>(null);

  useEffect(() => {
    if (countUpRef.current && !countUpInstance.current) {
      countUpInstance.current = new CountUp(countUpRef.current, end, {
        duration: duration,
        suffix: suffix,
        prefix: prefix,
        separator: ',',
        decimal: '.',
        enableScrollSpy: true,
        scrollSpyOnce: true,
      });
    }

    return () => {
      if (countUpInstance.current) {
        countUpInstance.current = null;
      }
    };
  }, [end, duration, suffix, prefix]);

  return (
    <span 
      ref={countUpRef} 
      className={className}
      {...aosProps}
    >
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;