import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Bootstrap is imported in main.tsx
import SobreNosotros from './components/SobreNosotros/SobreNosotros';
import NuestraMarca from './components/NuestraMarca/NuestraMarca';
import Alianzas from './components/Alianzas';
import UltimasEntradas from './components/UltimasEntradas';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/nuestra-marca" element={<NuestraMarca />} />
        <Route path="/alianzas" element={<Alianzas />} />
        <Route path="/ultimas-entradas" element={<UltimasEntradas />} />
       
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
