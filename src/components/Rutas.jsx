import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Proyectos from '../pages/Proyectos';
import Contacto from '../pages/Contact';

function Rutas() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="sobre-mi" element={<SobreMi />} />
      <Route path="proyectos" element={<Proyectos />} />
      <Route path="contacto" element={<Contacto />} />
    </Routes>
  );
}

export default Rutas;