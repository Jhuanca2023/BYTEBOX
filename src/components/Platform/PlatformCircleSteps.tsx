import React from 'react';
import styles from './PlatformSection.module.css';

interface Props {
  rotationIdx: number;
  setRotationIdx: (idx: number) => void;
  steps: { title: string; desc: string }[];
  onSelectStep: (idx: number) => void;
}

const radius = 90;
const centerX = 120;
const centerY = 110;

const angles = [
  -Math.PI / 2, 
  -Math.PI / 6, 
  Math.PI / 6, 
  Math.PI / 2, 
  Math.PI * 5 / 6, 
  Math.PI * 7 / 6, 
  Math.PI * 3 / 2 
];

const PlatformCircleSteps: React.FC<Props> = ({ rotationIdx, steps, onSelectStep }) => {
  
  const rotation = (rotationIdx - 2) * 90; 
  const total = steps.length;

  return (
    <div className={styles.circleStepsWrapper} style={{ display: 'flex', alignItems: 'center' }}>
      <svg width={260} height={220} className={styles.circleSvg} style={{ flexShrink: 0 }}>
        {/* Semicírculo derecho fijo */}
        <path
          d={`M ${centerX} ${centerY - radius} A ${radius} ${radius} 0 0 1 ${centerX} ${centerY + radius}`}
          fill="none"
          stroke="#AAB6BD"
          strokeWidth={1}
        />
        
        <g style={{ transformOrigin: `${centerX}px ${centerY}px`, transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s cubic-bezier(.7,0,.3,1)' }}>
          {steps.map((step, idx) => {
            
            const angle = -Math.PI / 2 + (idx * Math.PI / (total - 1));
            
            const visualAngle = angle + (rotation * Math.PI / 180);
            
            const isVisible = visualAngle >= -Math.PI / 2 && visualAngle <= Math.PI / 2;
           
            const isActive = Math.abs(visualAngle) < 0.01;
            let opacity = isVisible ? (isActive ? 1 : 0.7) : 0;
            return (
              <g
                key={idx}
                style={{
                  cursor: isVisible ? 'pointer' : 'default',
                  opacity,
                  transition: 'opacity 0.4s cubic-bezier(.7,0,.3,1)'
                }}
                onClick={() => isVisible && onSelectStep(idx)}
              >
                <circle
                  cx={centerX + radius * Math.cos(angle)}
                  cy={centerY + radius * Math.sin(angle)}
                  r={isActive ? 8 : 6}
                  fill={isActive ? '#455A64' : '#AAB6BD'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text
                  x={centerX + radius * Math.cos(angle) + 18}
                  y={centerY + radius * Math.sin(angle) + 10}
                  fontSize={32}
                  fill={isActive ? '#455A64' : '#AAB6BD'}
                  fontWeight={isActive ? 700 : 400}
                  style={{ userSelect: 'none', transition: 'all 0.2s' }}
                >
                  {`0${idx + 1}`}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default PlatformCircleSteps; 