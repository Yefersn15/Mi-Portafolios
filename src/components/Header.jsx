import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header({ toggleTheme, theme }) {
  const isLightTheme = theme === 'light';
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="nav-inner">
        <div className="logo">Yeferson Moreno</div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}

        <div className={`nav-shell ${menuOpen ? 'open' : ''}`}>
          <nav id="site-nav" className="site-nav">
            <ul>
              <li><NavLink to="/" end onClick={closeMenu}>inicio</NavLink></li>
              <li><NavLink to="/sobre-mi" onClick={closeMenu}>sobre mí</NavLink></li>
              <li><NavLink to="/proyectos" onClick={closeMenu}>proyectos</NavLink></li>
              <li><NavLink to="/contacto" onClick={closeMenu}>contacto</NavLink></li>
            </ul>
            <button
              className="theme-toggle"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              aria-label={isLightTheme ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
              title={isLightTheme ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {isLightTheme ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3 12h2.2M18.8 12H21M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" />
                  <circle cx="12" cy="12" r="4.2" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;