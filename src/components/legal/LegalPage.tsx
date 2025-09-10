import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{title}</h1>
              
        <div className="legal-content">
          {children}
        </div>
        
        <div className="legal-contact">
          <p>Si tienes alguna pregunta sobre esta política, por favor contáctanos en <a href="mailto:alex.c@bytebox.pe">alex.c@bytebox.pe</a></p>
        </div>
        
        <div className="back-home">
          <Link to="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
