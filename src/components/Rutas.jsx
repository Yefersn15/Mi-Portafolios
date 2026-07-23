import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SobreMi from '../pages/SobreMi';
import Proyectos from '../pages/Proyectos';
import Contacto from '../pages/Contact';
import BaseDatosHtml from '../pages/talleres/BaseDatosHtml';
import TallerEvaluativo from '../pages/talleres/TallerEvaluativo';
import EvaluacionStyle from '../pages/talleres/EvaluacionStyle';

function Rutas() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="sobre-mi" element={<SobreMi />} />
      <Route path="proyectos" element={<Proyectos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="talleres/base-datos-html" element={<BaseDatosHtml />} />
      <Route path="talleres/taller-evaluativo" element={<TallerEvaluativo />} />
     <Route path="talleres/evaluacion-style" element={<EvaluacionStyle />} />
    </Routes>
  );
}

export default Rutas;