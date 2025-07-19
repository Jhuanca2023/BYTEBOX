import React from 'react';
import styles from './PlatformSection.module.css';

interface Props {
  children: React.ReactNode;
}

const MacbookMockup: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.macbookWrapper}>
      <div className={styles.macbookScreen}>
        <div className={styles.macbookInnerScreen}>
          {children}
        </div>
      </div>
      <div className={styles.macbookFooter}></div>
      <div className={styles.macbookBase}></div>
    </div>
  );
};

export default MacbookMockup; 