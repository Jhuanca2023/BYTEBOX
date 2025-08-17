import { createRoot } from 'react-dom/client';

// Importar estilos base
import './styles/normalize.css';
import './styles/variables.css';
import './styles/grid.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar estilos globales
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importar el componente wrapper
import AppWithAnimations from './components/AppWithAnimations';

// Renderizar la aplicación
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<AppWithAnimations />);
} else {
  console.info('No se encontró el elemento con id "root"');
}
