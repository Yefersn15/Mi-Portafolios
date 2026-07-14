import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow reveal">Portafolio 2026</div>
        <h1 className="reveal">Construyo interfaces<br />con lógica detrás.</h1>
        <p className="roles reveal">
          Soy <span>Yeferson Andres Moreno Granda</span> — estudiante de <span>Análisis y Desarrollo de Software</span>.
        </p>
        <p className="pitch reveal">
          Actualmente curso Tecnología en Análisis y Desarrollo de Software. Me interesa crear productos web claros, rápidos y bien pensados, desde la interfaz hasta la base de datos.
        </p>
        <div className="cta-row reveal">
          <Link to="/proyectos" className="btn primary">Ver proyectos</Link>
          <Link to="/contacto" className="btn ghost">Contáctame</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;