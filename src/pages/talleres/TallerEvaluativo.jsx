import React from 'react';

// Carpeta renombrada en /public/MediaTecnica sin espacios: Taller_Evaluativo
const BASE = `${import.meta.env.BASE_URL}MediaTecnica/Taller_Evaluativo/`;
const href = (rel) => `${BASE}${encodeURI(rel)}`;

const ejercicios = [
  {
    nombre: '1. Listas ordenadas',
    tag: '<ol> · <li>',
    desc: 'Frutas y verduras en listas numeradas.',
    ruta: 'Index1.html',
  },
  {
    nombre: '2. Encabezados H1–H6',
    tag: '<h1> … <h6>',
    desc: 'Todos los niveles de encabezado.',
    ruta: 'Index2.html',
  },
  {
    nombre: '3. Enlaces y anclas',
    tag: '<a href> · name',
    desc: 'Enlaces a otras páginas y saltos internos.',
    ruta: 'Index3.html',
  },
  {
    nombre: '4. Imágenes como enlaces',
    tag: '<a> + <img>',
    desc: 'Miniaturas que enlazan a ejercicios.',
    ruta: 'Index4.html',
  },
  {
    nombre: '5. Formulario con JS',
    tag: 'form · input · select · JavaScript',
    desc: 'Validación condicional con alertas.',
    ruta: 'index5.html',
  },
  {
    nombre: '6. Página 404',
    tag: 'HTTP 404',
    desc: 'Plantilla de error no encontrado.',
    ruta: '404 Not Found.html',
  },
];

const TallerEvaluativo = () => {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="reveal">Ejercicios Evaluativos</h1>
          <p className="reveal">
            Prácticas de HTML básico: listas, encabezados, enlaces, imágenes, formularios y página de error.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="exercise-grid">
            {ejercicios.map((item) => (
              <div className="ex-card reveal" key={item.nombre}>
                <a href={href(item.ruta)} target="_blank" rel="noopener noreferrer">
                  <span className="ex-name">{item.nombre}</span>
                  <span className="ex-tag">{item.tag}</span>
                  <span className="ex-desc">{item.desc}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TallerEvaluativo;
