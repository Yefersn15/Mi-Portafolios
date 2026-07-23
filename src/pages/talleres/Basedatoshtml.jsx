import React from 'react';

// Los ejercicios individuales siguen siendo HTML estático servido desde /public/MediaTecnica
const BASE = `${import.meta.env.BASE_URL}MediaTecnica/`;
const href = (rel) => `${BASE}${encodeURI(`Base De Datos HTML/${rel}`)}`;

const secciones = [
  {
    titulo: 'Estructura básica y texto',
    items: [
      { nombre: '1. Estructura interna', tag: 'texto simple', ruta: '1.Estructura interna de un pagina.html' },
      { nombre: '2. Saltos de línea', tag: '<br>', ruta: '2.Salto de linea.html' },
      { nombre: '3. Párrafos', tag: '<p>', ruta: '3.Parrafo.html' },
      { nombre: '4. Títulos H1–H6', tag: 'encabezados', ruta: '4.Titulos H1 a H6.html' },
      { nombre: '5. Énfasis', tag: '<strong> <em>', ruta: '5.Enfasis.html' },
    ],
  },
  {
    titulo: 'Listas',
    items: [
      { nombre: '12. Listas ordenadas', tag: '<ol>', ruta: '12.LISTAS ORDENADAS.html' },
      { nombre: '13. Lista no ordenada', tag: '<ul>', ruta: '13.Lista no ordenada.html' },
      { nombre: '14. Listas anidadas', tag: 'anidadas + enlaces', ruta: '14.Listas Anidadas.html' },
      { nombre: 'Propuesta 5', tag: 'listas + enlaces', ruta: 'Propuestas/Propuesta 5.html' },
    ],
  },
  {
    titulo: 'Tablas',
    items: [
      { nombre: '15. Tabla simple', tag: '<table>', ruta: '15.Tablas.html' },
      { nombre: '16. Tabla con celdas no uniformes', tag: 'colspan', ruta: '16. Tablas con celdas no uniformes.html' },
      { nombre: '17. Tabla con rowspan', tag: 'rowspan', ruta: '17.Tabla con rowspan.html' },
      { nombre: 'Propuesta 6', tag: 'tablas con datos', ruta: 'Propuestas/Propuesta 6.html' },
    ],
  },
  {
    titulo: 'Enlaces y navegación',
    items: [
      { nombre: '7. Enlace a Google', tag: '<a href>', ruta: '7.Otra pagina.html' },
      { nombre: '8. Enlace de correo', tag: 'mailto:', ruta: '8.HV cliente de correo.html' },
      { nombre: '9. Anclas internas', tag: '#id', ruta: '9.Anclas de pagina.html' },
      { nombre: 'Página principal (noticias)', tag: 'enlace a pagina2', ruta: '6.Hypervinculo/Pagina1.html' },
      { nombre: 'Página 2 (noticias)', tag: 'enlace de vuelta', ruta: '6.Hypervinculo/pagina2.html' },
    ],
  },
  {
    titulo: 'Imágenes',
    items: [
      { nombre: '10. Imagen simple', tag: '<img>', ruta: '10.Imagenes dentro de una pagina/10.Imagens en una pagina.html' },
      { nombre: 'Página de imágenes geométricas', tag: 'imágenes como enlaces', ruta: '11.Hypervinculo mediante imagenes/index.html' },
      { nombre: 'Detalle obra 1', tag: 'página destino', ruta: '11.Hypervinculo mediante imagenes/pagina1.html' },
      { nombre: 'Detalle obra 2', tag: 'página destino', ruta: '11.Hypervinculo mediante imagenes/pagina2.html' },
    ],
  },
  {
    titulo: 'Páginas temáticas',
    items: [
      { nombre: '5.1 Ejercicio - Noticias', tag: 'política y deportes', ruta: 'Propuestas/5.1ejercicio.html' },
      { nombre: 'Cultura', tag: 'imágenes y texto', ruta: 'Propuestas/cultura.html' },
      { nombre: 'Deportes', tag: 'imágenes y texto', ruta: 'Propuestas/deportes.html' },
      { nombre: 'Ejercicio 2 - Página principal', tag: 'enlaces a secciones', ruta: 'Propuestas/Ejercicio 2.html' },
      { nombre: 'Promociones de pizzas', tag: 'mailto con asunto', ruta: 'Propuestas/Promociones.html' },
    ],
  },
  {
    titulo: 'Formularios',
    items: [
      { nombre: 'Comentarios', tag: '<textarea>', ruta: 'Propuestas/comentarios.html' },
    ],
  },
];

const BaseDatosHtml = () => {
  return (
    <>
      <section className="page-title">
        <div className="wrap">
          <h1 className="reveal">Ejercicios HTML</h1>
          <p className="reveal">Prácticas iniciales de HTML: listas, tablas, enlaces, imágenes y más.</p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          {secciones.map((seccion) => (
            <React.Fragment key={seccion.titulo}>
              <div className="section-head reveal">
                <span className="idx">—</span>
                <h2>{seccion.titulo}</h2>
              </div>
              <div className="exercise-grid">
                {seccion.items.map((item) => (
                  <div className="ex-card reveal" key={item.nombre}>
                    <a href={href(item.ruta)} target="_blank" rel="noopener noreferrer">
                      <span className="ex-name">{item.nombre}</span>
                      <span className="ex-tag">{item.tag}</span>
                    </a>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default BaseDatosHtml;