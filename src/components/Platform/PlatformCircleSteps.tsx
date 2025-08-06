import React from 'react';
import styles from './PlatformSection.module.css';

interface Props {
  currentStep: number;
  totalSteps: number;
  onStepUp: () => void;
  onStepDown: () => void;
}

// Constantes para evitar números mágicos
const RADIUS = 90;
const CENTER_X = 120;
const CENTER_Y = 110;
const START_ANGLE = -90;
const END_ANGLE = 90;
const ANGLE_RANGE = 180;
const ACTIVE_RADIUS = 8;
const INACTIVE_RADIUS = 6;
const TEXT_OFFSET = 15;
const ACTIVE_FONT_SIZE = '2rem';
const INACTIVE_FONT_SIZE = '1.5rem';
const ACTIVE_FONT_WEIGHT = 'bold';
const INACTIVE_FONT_WEIGHT = 'normal';
const ACTIVE_OPACITY = 1;
const INACTIVE_OPACITY = 0.6;
const ACTIVE_COLOR = '#00B4D8';
const INACTIVE_COLOR = '#AAB6BD';

const PlatformCircleSteps: React.FC<Props> = ({
  currentStep,
  totalSteps,
  onStepUp,
  onStepDown
}) => {
  
  // Calcular la rotación basada en el paso actual
  const rotation = START_ANGLE + (currentStep * (ANGLE_RANGE / (totalSteps - 1)));

  const handleStepUp = (): void => {
    onStepUp();
  };

  const handleStepDown = (): void => {
    onStepDown();
  };

  const handleNoAction = (): void => {
    // No action needed for current step or invalid conditions
  };

  const handleStepClick = (idx: number): void => {
    if (idx < currentStep) {
      handleStepUp();
    } else if (idx > currentStep) {
      handleStepDown();
    } else {
      handleNoAction();
    }
  };

  const getActiveCircleRadius = (): number => ACTIVE_RADIUS;

  const getInactiveCircleRadius = (): number => INACTIVE_RADIUS;

  const getActiveCircleFill = (): string => ACTIVE_COLOR;

  const getInactiveCircleFill = (): string => INACTIVE_COLOR;

  const getActiveTextFill = (): string => ACTIVE_COLOR;

  const getInactiveTextFill = (): string => INACTIVE_COLOR;

  const getActiveFontWeight = (): string => ACTIVE_FONT_WEIGHT;

  const getInactiveFontWeight = (): string => INACTIVE_FONT_WEIGHT;

  const getActiveFontSize = (): string => ACTIVE_FONT_SIZE;

  const getInactiveFontSize = (): string => INACTIVE_FONT_SIZE;

  const getActiveOpacity = (): number => ACTIVE_OPACITY;

  const getInactiveOpacity = (): number => INACTIVE_OPACITY;

  const generateStepKey = (idx: number): string => `step-${idx}-${currentStep}`;

  const renderActiveCircle = (rad: number) => (
    <circle
      cx={CENTER_X + RADIUS * Math.cos(rad)}
      cy={CENTER_Y + RADIUS * Math.sin(rad)}
      r={getActiveCircleRadius()}
      fill={getActiveCircleFill()}
      style={{ transition: 'all 0.2s' }}
    />
  );

  const renderInactiveCircle = (rad: number) => (
    <circle
      cx={CENTER_X + RADIUS * Math.cos(rad)}
      cy={CENTER_Y + RADIUS * Math.sin(rad)}
      r={getInactiveCircleRadius()}
      fill={getInactiveCircleFill()}
      style={{ transition: 'all 0.2s' }}
    />
  );

  const renderActiveText = (rad: number, idx: number) => (
    <text
      x={CENTER_X + (RADIUS + TEXT_OFFSET) * Math.cos(rad)}
      y={CENTER_Y + 5 + (RADIUS + TEXT_OFFSET) * Math.sin(rad)}
      fontSize={32}
      fill={getActiveTextFill()}
      fontWeight={getActiveFontWeight()}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ 
        userSelect: 'none', 
        transition: 'all 0.2s',
        fontSize: getActiveFontSize(),
        fontWeight: getActiveFontWeight()
      }}
    >
      {`0${idx + 1}`}
    </text>
  );

  const renderInactiveText = (rad: number, idx: number) => (
    <text
      x={CENTER_X + (RADIUS + TEXT_OFFSET) * Math.cos(rad)}
      y={CENTER_Y + 5 + (RADIUS + TEXT_OFFSET) * Math.sin(rad)}
      fontSize={32}
      fill={getInactiveTextFill()}
      fontWeight={getInactiveFontWeight()}
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ 
        userSelect: 'none', 
        transition: 'all 0.2s',
        fontSize: getInactiveFontSize(),
        fontWeight: getInactiveFontWeight()
      }}
    >
      {`0${idx + 1}`}
    </text>
  );

  const renderActiveStep = (idx: number, rad: number) => (
    <g
      key={generateStepKey(idx)}
      style={{
        cursor: 'pointer',
        opacity: getActiveOpacity(),
        transition: 'opacity 0.3s ease'
      }}
      onClick={() => handleStepClick(idx)}
    >
      {renderActiveCircle(rad)}
      {renderActiveText(rad, idx)}
    </g>
  );

  const renderInactiveStep = (idx: number, rad: number) => (
    <g
      key={generateStepKey(idx)}
      style={{
        cursor: 'pointer',
        opacity: getInactiveOpacity(),
        transition: 'opacity 0.3s ease'
      }}
      onClick={() => handleStepClick(idx)}
    >
      {renderInactiveCircle(rad)}
      {renderInactiveText(rad, idx)}
    </g>
  );

  return (
    <div className={styles.circleStepsWrapper} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className={styles.circleContainer}>
        <svg width={260} height={220} className={styles.circleSvg}>
          {/* Semicírculo derecho fijo */}
          <path
            d={`M ${CENTER_X} ${CENTER_Y - RADIUS} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER_X} ${CENTER_Y + RADIUS}`}
            fill="none"
            stroke="#AAB6BD"
            strokeWidth={1}
          />
          
          {/* Números en el semicírculo */}
          {[...Array(totalSteps)].map((_, idx) => {
            const angle = START_ANGLE + (idx * (ANGLE_RANGE / (totalSteps - 1)));
            const rad = (angle * Math.PI) / 180;
            const isActive = idx === currentStep;
            const isVisible = angle >= START_ANGLE && angle <= END_ANGLE;
            
            if (!isVisible) {
              return null;
            }
            
            if (isActive) {
              return renderActiveStep(idx, rad);
            } else {
              return renderInactiveStep(idx, rad);
            }
          })}
          
          {/* Línea indicadora */}
          <line
            x1={CENTER_X}
            y1={CENTER_Y}
            x2={CENTER_X + RADIUS * Math.cos((rotation * Math.PI) / 180)}
            y2={CENTER_Y + RADIUS * Math.sin((rotation * Math.PI) / 180)}
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