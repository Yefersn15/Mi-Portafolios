# Mi Portafolio YAMG

Portafolio personal de **Yeferson Andrés Moreno Granda**, desarrollado con React y Vite. Presenta de forma clara y moderna la información profesional, los proyectos realizados durante la formación en Desarrollo de Software y los medios de contacto.

## Sobre mí

Estudiante de Tecnología en Análisis y Desarrollo de Software. Originalmente buscaba Programación de Videojuegos/Multimedia, pero terminó en Desarrollo de Software por ser lo más cercano a programar. Empezó con actividades de repaso pequeñas que sentaron las bases, y su primer proyecto grande fue una página de biblioteca (no terminada del todo) que sirvió de referencia para proyectos posteriores más complejos.

**Trayectoria**

| Periodo | Institución | Resumen |
|---|---|---|
| 2025 — hoy | SENA — Tecnología en Análisis y Desarrollo de Software | Lenguajes modernos, bases de datos, despliegue web, apps móviles y generación de APKs. Proyecto principal: **SISGEM**, tienda web híbrida con cajero de PC, construida desde cero (~90% completado) antes de pasar al equipo de **EncomiExpress**, donde aprendió herramientas de trabajo colaborativo. |
| 2023 — 2024 | I.E. Kennedy — Técnica en Desarrollo de Software | Primeros pasos en programación con VS Code, actividades pequeñas de práctica. Primer proyecto grande: página para una biblioteca. |

**Stack:** HTML · CSS · JavaScript · React · Node.js · PostgreSQL

**Contacto:** yefersonandres225@gmail.com · [GitHub](https://github.com/Yefersn15)

---

## Páginas del sitio

- **Home** — hero de presentación con llamados a la acción hacia Proyectos y Contacto.
- **Proyectos** — dos bloques: *Tecnología SENA (2025–2026)* y *Técnica I.E. Kennedy (2023–2024)*, cada uno con un proyecto destacado y un carrusel infinito de tarjetas (con soporte para múltiples ramas/enlaces por proyecto y demos en vivo).
- **Sobre mí** — bio, stack y línea de tiempo.
- **Contacto** — email directo y enlaces a redes (GitHub, LinkedIn, CV).

## Proyectos que muestra el portafolio

### SENA — destacado: SISGEM
Plataforma con doble ruta: **[FRONT](https://github.com/Yefersn15/Sisgem-FRONT)** y **[API](https://github.com/Yefersn15/Sisgem-API)**.

Resto del carrusel SENA:
- Proyecto Django ([repo](https://github.com/Yefersn15/ProyectoDJango)) — Django · Python
- Mi Página con CSS ([repo](https://github.com/Yefersn15/Mi-Pagna-con-CSS) · [demo](https://yefersn15.github.io/Mi-Pagna-con-CSS/)) — HTML · CSS
- Landing Equipo 1 ([repo](https://github.com/Yefersn15/landing-equipo1/) · [demo](https://yefersn15.github.io/landing-equipo1/)) — HTML · CSS
- Proyecto Three ([repo](https://github.com/Yefersn15/Proyecto_Three)) — Frontend
- Flutter consumo ([repo](https://github.com/Yefersn15/Flutter_consumo), con ramas Actividad y mi-api) — Flutter
- Proyecto Four ([repo](https://github.com/Yefersn15/Proyecto_Four)) — Proyecto
- Proyecto Six ([repo](https://github.com/Yefersn15/Proyecto_Six), con ramas Api y Biblioteca) — Fullstack
- .NET ([repo](https://github.com/Yefersn15/.Net), con ramas Ejercicios, Listas, POO, POO2, Personas, MVC, Taller 3) — C# · .NET
- Parking Lot ([repo](https://github.com/Yefersn15/Parking_Lot)) — C# · Aplicación
- Streamlit App ([repo](https://github.com/Yefersn15/mi_app_streamlit)) — Python · Streamlit
- Repaso JS ([repo](https://github.com/Yefersn15/repaso-js), con ramas Callback, Funciones, Arrow, Promesas) — JavaScript

> Nota: `Flutter_consumo` y `Proyecto_Four` aparecen referenciados en el código del portafolio pero no estaban documentados en el README general anterior — conviene revisar si siguen vigentes o si ya cambiaron de nombre/estado.

### Media Técnica — destacado: Sistema de Gestión de Biblioteca (I.E. Kennedy)
App web con HTML, CSS, JS y localStorage; módulos de autenticación, usuarios, editoriales, autores, categorías y préstamos.

Resto del carrusel Media Técnica (todos alojados en el despliegue de `Mi-Portafolios-Tecnico`):
Maquetación (V1/V2/V2.2), Evaluación de maquetación, Taller evaluativo HTML, Práctica de Frames, Índice de Frames, Evaluación de estilos CSS, Biblioteca Digital Local, Base de Datos HTML, Prototipo de página, TransMarimba, Listas desplegables (genérica y de estudiantes), Página con imágenes, Tienda deportiva, Frameset, IFrame con JS, y varias páginas temáticas (noticias, cultura, deportes, promociones, formulario de comentarios).

---

## Tecnologías utilizadas

- React 19
- Vite 8
- React Router DOM
- ESLint
- HTML5 y CSS3

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
npm run dev
```

## Scripts disponibles

- `npm run dev` — modo desarrollo
- `npm run build` — build de producción
- `npm run preview` — previsualiza la build
- `npm run lint` — ejecuta ESLint

## Estructura del proyecto

```text
src/
  components/
  pages/
    Home.jsx
    Proyectos.jsx
    SobreMi.jsx
    Contact.jsx
  assets/
  App.jsx
  main.jsx
```

---

## Aprendizajes

**De este portafolio (YAMG):**
- Interfaces modernas con React, organización de componentes/páginas y rutas con React Router.
- Presentación profesional y visual de información personal y técnica.
- Diseño modular reutilizable entre secciones (mismo patrón de tarjeta de proyecto con soporte de ramas y demos).

**De la Media Técnica (base sobre la que se construyó el resto):**
- Estructura HTML (textos, listas, tablas, enlaces, imágenes, formularios).
- Estilos CSS (fondos, colores, bordes, botones, tablas, tipografías).
- Maquetación, frames, columnas y estructuras de navegación.
- JavaScript básico: validación de formularios e interactividad.
- Organización ordenada de archivos y carpetas en proyectos crecientes.

---

## Reutilizable en otras páginas del mismo portafolio

- **Bio y trayectoria** (de `SobreMi.jsx`): sirve como base de texto para la sección "Sobre mí" del portafolio general (`Mi-Portafolios`) o para un `About` en LinkedIn/CV.
- **Tags de stack** (HTML, CSS, JavaScript, React, Node.js, PostgreSQL): reutilizables como badges en cualquier README de proyecto individual.
- **Patrón de tarjeta de proyecto** (`ProjectCard` en `Proyectos.jsx`, con `branches` y `demo`): aplicable si se arma una página de proyectos similar en `Mi-Portafolios-Tecnico` u otro repo.
- **Datos de contacto** (`Contact.jsx`): mismo bloque de email/redes puede ir al pie de cualquier README de portafolio.

## Autor

Yeferson Andrés Moreno Granda — [GitHub](https://github.com/Yefersn15) — yefersonandres225@gmail.com

## Licencia

MIT. Ver archivo `LICENSE`.