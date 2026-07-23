import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const proyectosSena = [
  {
    titulo: 'SISGEM',
    tag: 'Proyecto general',
    branches: [
      { label: 'FRONT', enlace: 'https://github.com/Yefersn15/Sisgem-FRONT' },
      { label: 'API', enlace: 'https://github.com/Yefersn15/Sisgem-API' }
    ]
  },
  {
    titulo: 'EncomiExpress',
    tag: 'Proyecto general',
    demo: 'https://encomiexpress-frontend.vercel.app/',
    branches: [
      { label: 'FRONT', enlace: 'https://github.com/EncomiExpress/encomiexpress-frontend.git' },
      { label: 'API', enlace: 'https://github.com/EncomiExpress/encomiexpress-backend.git' }
    ]
  },
  {
    titulo: 'Proyecto Django',
    enlace: 'https://github.com/Yefersn15/ProyectoDJango',
    tag: 'Django · Python'
  },
  {
    titulo: 'Mi Página con CSS',
    enlace: 'https://github.com/Yefersn15/Mi-Pagna-con-CSS',
    demo: 'https://yefersn15.github.io/Mi-Pagna-con-CSS/',
    tag: 'HTML · CSS'
  },
  {
    titulo: 'Landing Equipo 1',
    enlace: 'https://github.com/Yefersn15/landing-equipo1/',
    demo: 'https://yefersn15.github.io/landing-equipo1/',
    tag: 'HTML · CSS'
  },
  { titulo: 'Proyecto Three', enlace: 'https://github.com/Yefersn15/Proyecto_Three', tag: 'Frontend' },
  {
    titulo: 'Proyecto Five',
    enlace: 'https://github.com/Yefersn15/Proyecto_Five',
    demo: 'https://yefersn15.github.io/Proyecto_Five/',
    tag: 'React · Vite'
  },
  {
    titulo: 'Proyecto Six',
    enlace: 'https://github.com/Yefersn15/Proyecto_Six',
    tag: 'Fullstack',
    branches: [
      { label: 'Main', enlace: 'https://github.com/Yefersn15/Proyecto_Six' },
      { label: 'Api', enlace: 'https://github.com/Yefersn15/Proyecto_Six/tree/main/Api' },
      { label: 'Biblioteca', enlace: 'https://github.com/Yefersn15/Proyecto_Six/tree/main/Biblioteca' }
    ]
  },
  {
    titulo: '.NET',
    enlace: 'https://github.com/Yefersn15/.Net',
    tag: 'C# · .NET',
    branches: [
      { label: 'Main', enlace: 'https://github.com/Yefersn15/.Net' },
      { label: 'Ejercicios', enlace: 'https://github.com/Yefersn15/.Net/tree/main/Ejercicios' },
      { label: 'Listas', enlace: 'https://github.com/Yefersn15/.Net/tree/main/Listas' },
      { label: 'POO', enlace: 'https://github.com/Yefersn15/.Net/tree/main/POO' },
      { label: 'POO2', enlace: 'https://github.com/Yefersn15/.Net/tree/main/POO2' },
      { label: 'Personas', enlace: 'https://github.com/Yefersn15/.Net/tree/main/Personas' },
      { label: 'MVC', enlace: 'https://github.com/Yefersn15/.Net/tree/main/Proyecto%20MVC' },
      { label: 'Taller 3', enlace: 'https://github.com/Yefersn15/.Net/tree/main/taller_3' }
    ]
  },
  { titulo: 'Proyecto One', enlace: 'https://github.com/Yefersn15/Proyect_One', tag: 'React' },
  { titulo: 'Proyecto Two Vite', enlace: 'https://github.com/Yefersn15/proyecto_two_vite', tag: 'React · Vite' },
  {
    titulo: 'Parking Lot',
    enlace: 'https://github.com/Yefersn15/Parking_Lot',
    demo: 'https://yefersn15.github.io/Parking_Lot/',
    tag: 'React · Vite'
  },
  { titulo: 'Registro Login Perfil', enlace: 'https://github.com/Yefersn15/RegistorLoginPerfil', tag: 'Node · Django · React' },
  { titulo: 'Biblioteca Digital', enlace: 'https://github.com/Yefersn15/Biblioteca_Digital', tag: 'Django · Python' },
  { titulo: 'Parking Terminal', enlace: 'https://github.com/Yefersn15/Parking_Terminal', tag: 'Node.js' },
  { titulo: 'Streamlit App', enlace: 'https://github.com/Yefersn15/mi_app_streamlit', tag: 'Python · Streamlit' },
  { titulo: 'Práctica Objetos', enlace: 'https://github.com/Yefersn15/Practica_objetos', tag: 'JavaScript · POO' },
  {
    titulo: 'Repaso JS',
    enlace: 'https://github.com/Yefersn15/repaso-js',
    tag: 'JavaScript',
    branches: [
      { label: 'Main', enlace: 'https://github.com/Yefersn15/repaso-js' },
      { label: 'Callback', enlace: 'https://github.com/Yefersn15/repaso-js/tree/main/CallBack' },
      { label: 'Funciones', enlace: 'https://github.com/Yefersn15/repaso-js/tree/main/Funciones' },
      { label: 'Arrow', enlace: 'https://github.com/Yefersn15/repaso-js/tree/main/Funciones_Arrows' },
      { label: 'Promesas', enlace: 'https://github.com/Yefersn15/repaso-js/tree/main/Promesas' }
    ]
  },
  {
    titulo: 'Landing Equipo 1',
    enlace: 'https://github.com/Yefersn15/landing-equipo1/',
    demo: 'https://yefersn15.github.io/landing-equipo1/',
    tag: 'HTML · CSS'
  },
  {
    titulo: 'Proyecto Django',
    enlace: 'https://github.com/Yefersn15/ProyectoDJango',
    tag: 'Django · Python'
  },
  {
    titulo: 'Mi Página con CSS',
    enlace: 'https://github.com/Yefersn15/Mi-Pagna-con-CSS',
    demo: 'https://yefersn15.github.io/Mi-Pagna-con-CSS/',
    tag: 'HTML · CSS'
  }
];

const mediaTecnicaBaseUrl = `${import.meta.env.BASE_URL}MediaTecnica/`;

const mediaTecnicaPathMap = {
  'Taller Maquetacion/maqueta1.html': 'Taller_Maquetacion/maqueta1.html',
  'Taller Maquetacion/maqueta2.html': 'Taller_Maquetacion/maqueta2.html',
  'Taller Maquetacion/maqueta2v2.html': 'Taller_Maquetacion/maqueta2v2.html',
  'Evaluacion de maquetacion/Evaluacion.html': 'Evaluacion_maquetacion/Evaluacion.html',
  'Biblioteca Digital Local/index.html': 'BibliotecaDigitaLocal/index.html',
  'Prototipo De Pagina/Prototipo.html': 'Prototipo_Pagina/Prototipo.html',
  'Tienda Deportiva/INDEX1.HTML': 'Tienda_Deportiva/INDEX1.HTML',
  'Listas/Lista desplegable.html': 'Listas/ListaDesplegable.html',
  'Listas/Lista Despegable De Estudiantes.html': 'Listas/ListaDesplegable_Estudiantes.html'
};

const buildMediaTecnicaHref = (ruta) => {
  const rutaReal = mediaTecnicaPathMap[ruta] || ruta;
  return `${mediaTecnicaBaseUrl}${encodeURI(rutaReal.replace(/^\/+/, ''))}`;
};

const proyectosMediaTecnica = [
  {
    titulo: 'Maquetación',
    tag: 'CSS',
    clickableMain: false,
    branches: [
      { label: 'V1', enlace: buildMediaTecnicaHref('Taller_Maquetacion/maqueta1.html') },
      { label: 'V2', enlace: buildMediaTecnicaHref('Taller_Maquetacion/maqueta2.html') },
      { label: 'V2.2', enlace: buildMediaTecnicaHref('Taller_Maquetacion/maqueta2v2.html') }
    ]
  },
  { titulo: 'Evaluación maquetación', tag: 'CSS', enlace: buildMediaTecnicaHref('Evaluacion_maquetacion/Evaluacion.html') },
  { titulo: 'Taller evaluativo HTML', tag: 'HTML', enlace: '/talleres/taller-evaluativo', interno: true },
  { titulo: 'Práctica de Frames', tag: 'Frames', enlace: buildMediaTecnicaHref('HTML/Frame.html') },
  { titulo: 'Índice de Frames', tag: 'Frames', enlace: buildMediaTecnicaHref('Frames/Index_Frames.html') },
  { titulo: 'Evaluación de estilos CSS', tag: 'HTML/CSS', enlace: '/talleres/evaluacion-style', interno: true },
  { titulo: 'Biblioteca Digital Local', tag: 'HTML/CSS', enlace: buildMediaTecnicaHref('BibliotecaDigitaLocal/index.html') },
  { titulo: 'Base de Datos HTML', tag: 'HTML', enlace: '/talleres/base-datos-html', interno: true },
  { titulo: 'Prototipo página', tag: 'HTML/CSS', enlace: buildMediaTecnicaHref('Prototipo_Pagina/Prototipo.html') },
  { titulo: 'TransMarimba', tag: 'HTML', enlace: buildMediaTecnicaHref('Transmarimba/transmarimba-protopagina.html') },
  { titulo: 'Lista desplegable', tag: 'HTML', enlace: buildMediaTecnicaHref('Listas/Lista desplegable.html') },
  { titulo: 'Lista estudiantes', tag: 'HTML', enlace: buildMediaTecnicaHref('Listas/Lista Despegable De Estudiantes.html') },
  { titulo: 'Página con imágenes', tag: 'HTML/CSS', enlace: buildMediaTecnicaHref('HTML/Pagina.HTML') },
  { titulo: 'Tienda deportiva', tag: 'HTML', enlace: buildMediaTecnicaHref('Tienda_Deportiva/INDEX1.HTML') },
  { titulo: 'Frameset', tag: 'Frames', enlace: buildMediaTecnicaHref('Columnas/INDEX_FRAMESET.html') },
  { titulo: 'IFrame con JS', tag: 'Frames/JS', enlace: buildMediaTecnicaHref('Columnas/INDEX_IFRAME.html') }
];

const getProjectHref = (proyecto) => {
  const rawPath = proyecto.enlace || proyecto.archivo;

  if (!rawPath) {
    return null;
  }

  if (/^https?:\/\//i.test(rawPath)) {
    return rawPath;
  }

  return `/${encodeURI(rawPath.replace(/^\.\//, '').replace(/^\/+/, ''))}`;
};

const ProjectCard = ({ proyecto }) => {
  const href = getProjectHref(proyecto);
  const esInterno = Boolean(proyecto.interno);
  const branches = Array.isArray(proyecto.branches) ? proyecto.branches.filter(Boolean) : [];
  const hasBranches = branches.length > 1;
  const hasDemo = Boolean(proyecto.demo);
  const clickableMain = proyecto.clickableMain !== false;

  // Si existe una rama "Main", la cara de la card redirige directamente a ella
  // y se excluye de los botones de ramas (que muestran solo el resto).
  const mainBranch = branches.find((b) => b.label.toLowerCase() === 'main');
  const otherBranches = mainBranch
    ? branches.filter((b) => b.label.toLowerCase() !== 'main')
    : branches;

  const cardContent = (
    <>
      <div className="card-thumb">
        <span>{proyecto.titulo.substring(0, 3).toUpperCase()}</span>
      </div>
      <h4>{proyecto.titulo}</h4>
      <span className="card-tag">{proyecto.tag}</span>
    </>
  );

  if (hasBranches || hasDemo) {
    return (
      <div className="project-card branchable" role="group" aria-label={`${proyecto.titulo} opciones`}>
        {clickableMain && href && esInterno && !mainBranch ? (
          <Link
            className="card-main card-main-link"
            to={href}
            aria-label={proyecto.titulo}
          >
            {cardContent}
          </Link>
        ) : clickableMain && href ? (
          <a
            className="card-main card-main-link"
            href={mainBranch ? mainBranch.enlace : href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${proyecto.titulo} ${mainBranch ? '(Main)' : ''}`.trim()}
          >
            {cardContent}
          </a>
        ) : (
          <div className="card-main">{cardContent}</div>
        )}
        {(otherBranches.length > 0 || hasDemo) && (
          <div className="branch-buttons">
            {otherBranches.map((branch) => (
              <a
                key={branch.label}
                className="branch-button"
                href={branch.enlace}
                target="_blank"
                rel="noopener noreferrer"
              >
                {branch.label}
              </a>
            ))}
            {hasDemo && (
              <a className="branch-button" href={proyecto.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    );
  }

  if (!href) {
    return (
      <div className="project-card disabled" role="img" aria-label={`${proyecto.titulo} (enlace pendiente)`}>
        {cardContent}
      </div>
    );
  }

  if (esInterno) {
    return (
      <Link className="project-card" to={href}>
        {cardContent}
      </Link>
    );
  }

  return (
    <a className="project-card" href={href} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  );
};

const TRANSITION_MS = 500;

const InfiniteCarousel = ({ items, intervalMs = 2500 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const snapTimeoutRef = useRef(null);
  const currentIndexRef = useRef(items.length); // arranca en la 1ª card del set del medio
  const cardWidthRef = useRef(0);

  const n = items.length;

  // Mide el ancho real de una card (incluye el gap), así funciona igual
  // en desktop y en el layout móvil, sin valores fijos.
  const measureCardWidth = () => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return 0;
    const cardRect = track.firstElementChild.getBoundingClientRect();
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return cardRect.width + gap;
  };

  const applyTransform = (index, smooth) => {
    const track = trackRef.current;
    if (!track) return;
    track.classList.toggle('paused', !smooth);
    track.style.transform = `translateX(-${index * cardWidthRef.current}px)`;
  };

  const moveTo = (index, smooth = true) => {
    currentIndexRef.current = index;
    applyTransform(index, smooth);
  };

  // Tras llegar a una copia extrema, salta sin transición al índice
  // equivalente del set central, para que el recorrido nunca se "note".
  const settleIfNeeded = () => {
    const index = currentIndexRef.current;
    if (index >= 2 * n) {
      requestAnimationFrame(() => moveTo(index - n, false));
    } else if (index < n) {
      requestAnimationFrame(() => moveTo(index + n, false));
    }
  };

  const scheduleSettle = () => {
    if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    snapTimeoutRef.current = setTimeout(settleIfNeeded, TRANSITION_MS + 20);
  };

  const next = () => {
    moveTo(currentIndexRef.current + 1, true);
    scheduleSettle();
  };

  const prev = () => {
    moveTo(currentIndexRef.current - 1, true);
    scheduleSettle();
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, intervalMs);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const init = () => {
      cardWidthRef.current = measureCardWidth();
      moveTo(n, false);
    };

    init();
    const raf = requestAnimationFrame(() => {
      startAutoPlay();
    });

    const handleResize = () => {
      cardWidthRef.current = measureCardWidth();
      applyTransform(currentIndexRef.current, false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      stopAutoPlay();
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoPlay();
  };

  const cards = [];
  for (let i = 0; i < 3; i++) {
    items.forEach((item, index) => {
      cards.push(
        <div className="carousel-item" key={`${item.titulo}-${i}-${index}`}>
          <ProjectCard proyecto={item} />
        </div>
      );
    });
  }

  return (
    <>
      <div className="carousel-wrapper reveal" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="carousel-track" ref={trackRef}>
          {cards}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          aria-label="Anterior"
          onClick={() => {
            stopAutoPlay();
            prev();
            if (!isPaused) startAutoPlay();
          }}
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => {
            stopAutoPlay();
            next();
            if (!isPaused) startAutoPlay();
          }}
        >
          ›
        </button>
      </div>
    </>
  );
};

const Proyectos = () => {
  return (
    <>
      <section className="project-section">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="eyebrow">Tecnología · SENA</div>
            <h2>Análisis y Desarrollo de Software</h2>
            <div className="sub">2025 – 2026 · Proyectos y actividades</div>
          </div>

          <div className="featured-duo reveal">
            <div className="featured-project featured-compact">
              <div className="thumb">
                <img src="https://placehold.co/600x338/1c1c16/edede3?text=EncomiExpress" alt="EncomiExpress" />
              </div>
              <div className="info">
                <span className="tag">Proyecto destacado</span>
                <h3>EncomiExpress</h3>
                <p>
                  Plataforma de gestión de envíos desarrollada en equipo, con frontend y API separados
                  y demo desplegada en producción.
                </p>
                <div className="branch-buttons featured-branches">
                  <a className="branch-button" href="https://github.com/EncomiExpress/encomiexpress-frontend.git" target="_blank" rel="noopener noreferrer">
                    FRONT
                  </a>
                  <a className="branch-button" href="https://github.com/EncomiExpress/encomiexpress-backend.git" target="_blank" rel="noopener noreferrer">
                    API
                  </a>
                  <a className="branch-button" href="https://encomiexpress-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="featured-project featured-compact">
              <div className="thumb">
                <img src="https://placehold.co/600x338/1c1c16/edede3?text=SISGEM" alt="SISGEM" />
              </div>
              <div className="info">
                <span className="tag">Proyecto en solitario</span>
                <h3>SISGEM</h3>
                <p>
                  Plataforma web con una doble ruta de desarrollo: frontend y API, pensada para cubrir la
                  experiencia de venta y la lógica del negocio en una sola solución.
                </p>
                <div className="branch-buttons featured-branches">
                  <a className="branch-button" href="https://github.com/Yefersn15/Sisgem-FRONT" target="_blank" rel="noopener noreferrer">
                    FRONT
                  </a>
                  <a className="branch-button" href="https://github.com/Yefersn15/Sisgem-API" target="_blank" rel="noopener noreferrer">
                    API
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <InfiniteCarousel items={proyectosSena.filter((_, index) => index > 1)} />
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="wrap">
          <div className="section-header reveal">
            <div className="eyebrow">Técnica · I.E. Kennedy</div>
            <h2>Desarrollo de Software</h2>
            <div className="sub">2023 – 2024 · Proyectos y actividades</div>
          </div>

          <div className="featured-project reveal">
            <div className="thumb">
              <img src="https://placehold.co/600x338/1c1c16/edede3?text=Biblioteca+Virtual+Kennedy" alt="Biblioteca Virtual" />
            </div>
            <div className="info">
              <span className="tag">Proyecto destacado</span>
              <h3>Sistema de Gestión de Biblioteca</h3>
              <p>
                Aplicación web para la administración de préstamos, devoluciones y catálogo de libros.
                Desarrollada con HTML, CSS, JavaScript y almacenamiento local (localStorage).
                Incluye módulos de autenticación, gestión de usuarios, editoriales, autores, categorías y préstamos.
              </p>
              <a href={buildMediaTecnicaHref('BibliotecaDigitaLocal/index.html')} className="btn primary" target="_blank" rel="noopener noreferrer">
                Ver proyecto →
              </a>
            </div>
          </div>

          <div className="reveal">
            <InfiniteCarousel items={proyectosMediaTecnica} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;