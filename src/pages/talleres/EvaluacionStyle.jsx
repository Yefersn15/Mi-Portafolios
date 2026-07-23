import React from 'react';

// Carpeta renombrada en /public/MediaTecnica sin espacios: Evaluacion_Style
const BASE = `${import.meta.env.BASE_URL}MediaTecnica/Evaluacion_Style/`;
const href = (rel) => `${BASE}${encodeURI(rel)}`;

const ejercicios = [
  {
    nombre: '1. Imagen de fondo',
    tag: 'background-image · cover',
    desc: 'Fondo con imagen de Pexels.',
    ruta: '1. imagen url de fondo.html',
  },
  {
    nombre: '2. Tabla con borde de color',
    tag: 'border · color',
    desc: 'Bordes naranja y celdas con fondo.',
    ruta: '2. Tabla con borde de color.html',
  },
  {
    nombre: '3. Página con video',
    tag: '<video>',
    desc: 'Reproductor de video MP4.',
    ruta: '3.Pagina con video.html',
  },
  {
    nombre: '4. Formulario de contacto',
    tag: 'form · input · textarea',
    desc: 'Formulario básico sin estilos.',
    ruta: '4.Formulario de contacto.html',
  },
  {
    nombre: '5. Lista desplegable',
    tag: '<select>',
    desc: 'Selección de frutas.',
    ruta: '5.Lista desplegable.html',
  },
  {
    nombre: '6. Página con enlaces',
    tag: '<a>',
    desc: 'Enlaces a Google, Facebook, Twitter.',
    ruta: '6.página con enlaces.html',
  },
  {
    nombre: '7. Título estilizado',
    tag: 'color · text-align · text-decoration',
    desc: 'Título azul, subrayado y centrado.',
    ruta: '7.Titulo estilizado.html',
  },
  {
    nombre: '8. Párrafo con estilo de fuente',
    tag: 'font-family · font-size · color · line-height',
    desc: 'Párrafo con Arial, tamaño 18px, color #333.',
    ruta: '8.Párrafo con estilo de fuente.html',
  },
  {
    nombre: '9. Lista con estilo de viñetas',
    tag: 'list-style-type · :before · content',
    desc: 'Viñetas personalizadas con ⦿ rojo.',
    ruta: '9.Lista con estilo de viñetas.html',
  },
  {
    nombre: '10. Imagen redondeada',
    tag: 'border-radius: 50%',
    desc: 'Imagen circular.',
    ruta: '10.Imagen redondeada.html',
  },
  {
    nombre: '11. Enlace como botón',
    tag: 'display · padding · background · border-radius',
    desc: 'Enlace con apariencia de botón azul.',
    ruta: '11.Enlace estilizado como botón.html',
  },
  {
    nombre: '12. Tabla estilizada',
    tag: 'nth-child · background-color alternado',
    desc: 'Filas pares grises, encabezado azul.',
    ruta: '12.Tabla estilizada.html',
  },
  {
    nombre: '13. Formulario estilizado',
    tag: 'estilos para inputs, textarea, botón',
    desc: 'Formulario con campos estilizados.',
    ruta: '13.Formulario estilizado.html',
  },
];

const EvaluacionStyle = () => {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="reveal">Evaluación de Estilos</h1>
          <p className="reveal">
            13 ejercicios prácticos de CSS para estilizar elementos HTML: textos, tablas, formularios,
            listas, enlaces, imágenes y más.
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

export default EvaluacionStyle;
