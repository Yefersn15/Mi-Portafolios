import React from 'react';

const SobreMi = () => {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="reveal">Sobre mí</h1>
          <p className="reveal">Un poco de contexto sobre quién soy, qué estudio y cómo pienso el desarrollo web.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="about-grid">
            <div className="portrait reveal">foto / avatar</div>
            <div>
              <p className="reveal">
                <strong>Soy Yeferson Andres Moreno Granda</strong>, actualmente curso una Tecnología en Análisis y Desarrollo de Software. Originalmente quería estudiar Programación de videojuegos/Multimedia, pero terminé en Desarrollo de Software, que era lo más parecido a lo que buscaba: programar.
              </p>
              <p className="reveal">
                Empecé aprendiendo poco a poco, haciendo pequeñas actividades de repaso que no se veían muy atractivas pero que me ayudaron a construir las bases de lo que quería estudiar. Mi primer proyecto grande fue una página para una biblioteca, que aunque no logré terminar del todo, me sirvió como base para desarrollar proyectos más complejos después.
              </p>
              <p style={{ color: 'var(--text)', fontWeight: 500, marginBottom: 4 }} className="reveal">
                Stack
              </p>
              <div className="tags reveal">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="idx">—</span>
            <h2>Trayectoria</h2>
          </div>
          <div className="timeline">
            <div className="timeline-row reveal">
              <span className="t-date">2025 — hoy</span>
              <div>
                <h3>SENA — Tecnología en Análisis y Desarrollo de Software</h3>
                <p>
                  Aprendí a programar con lenguajes más modernos, a trabajar con bases de datos, conectar y desplegar proyectos en la web, además de desarrollar aplicaciones móviles y generar APKs. Mi proyecto más importante fue SISGEM, una página de venta web pensada como híbrido entre tienda online y cajero de PC, construida desde cero a partir de lo aprendido con el proyecto de la biblioteca. Logré completar cerca del 90% de su contenido antes de pasarme a otro equipo con el proyecto EncomiExpress, donde aprendí a usar herramientas de trabajo colaborativo.
                </p>
              </div>
            </div>
            <div className="timeline-row reveal">
              <span className="t-date">2023 — 2024</span>
              <div>
                <h3>I.E. Kennedy — Técnica en Desarrollo de Software</h3>
                <p>
                  Mis primeros pasos en programación, aprendiendo a usar Visual Studio Code y construyendo actividades pequeñas como práctica. Aquí desarrollé mi primer proyecto grande: una página para una biblioteca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreMi;