import React from 'react';
import styles from './PlatformSection.module.css';

interface Props {
  currentStep: number;
  totalSteps: number;
  onStepUp: () => void;
  onStepDown: () => void;
  canGoUp: boolean;
  canGoDown: boolean;
}

const radius = 90;
const centerX = 120;
const centerY = 110;

const PlatformCircleSteps: React.FC<Props> = ({
  currentStep,
  totalSteps,
  onStepUp,
  onStepDown,
  canGoUp,
  canGoDown
}) => {
  
  // Calcular la rotación basada en el paso actual
  const rotation = -90 + (currentStep * (180 / (totalSteps - 1)));

  return (
    <div className={styles.circleStepsWrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={styles.circleContainer}>
        <svg width={260} height={220} className={styles.circleSvg}>
          {/* Semicírculo derecho fijo */}
          <path
            d={`M ${centerX} ${centerY - radius} A ${radius} ${radius} 0 0 1 ${centerX} ${centerY + radius}`}
            fill="none"
            stroke="#AAB6BD"
            strokeWidth={1}
          />
          
          {/* Números en el semicírculo */}
          {[...Array(totalSteps)].map((_, idx) => {
            const angle = -90 + (idx * (180 / (totalSteps - 1)));
            const rad = (angle * Math.PI) / 180;
            const isActive = idx === currentStep;
            const isVisible = angle >= -90 && angle <= 90;
            
            if (!isVisible) return null;
            
            return (
              <g
                key={idx}
                style={{
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.6,
                  transition: 'opacity 0.3s ease'
                }}
                onClick={() => {
                  if (idx < currentStep && canGoUp) onStepUp();
                  else if (idx > currentStep && canGoDown) onStepDown();
                }}
              >
                <circle
                  cx={centerX + radius * Math.cos(rad)}
                  cy={centerY + radius * Math.sin(rad)}
                  r={isActive ? 8 : 6}
                  fill={isActive ? '#00B4D8' : '#AAB6BD'}
                  style={{ transition: 'all 0.2s' }}
                />
                <text
                  x={centerX + (radius + 15) * Math.cos(rad)}
                  y={centerY + 5 + (radius + 15) * Math.sin(rad)}
                  fontSize={32}
                  fill={isActive ? '#00B4D8' : '#AAB6BD'}
                  fontWeight={isActive ? 700 : 400}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ 
                    userSelect: 'none', 
                    transition: 'all 0.2s',
                    fontSize: isActive ? '2rem' : '1.5rem',
                    fontWeight: isActive ? 'bold' : 'normal'
                  }}
                >
                  {`0${idx + 1}`}
                </text>
              </g>
            );
          })}
          
          {/* Línea indicadora */}
          <line
            x1={centerX}
            y1={centerY}
            x2={centerX + radius * Math.cos((rotation * Math.PI) / 180)}
            y2={centerY + radius * Math.sin((rotation * Math.PI) / 180)}
            stroke="#00B4D8"
            strokeWidth={2}
            strokeDasharray="4 2"
            style={{ transition: 'all 0.5s cubic-bezier(.7,0,.3,1)' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default PlatformCircleSteps; 