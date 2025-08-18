import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiciosIT = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/nuestra-marca#productos-destacados', { replace: true });
  }, [navigate]);
  
  return <div aria-hidden="true" />;
};

export default ServiciosIT;
