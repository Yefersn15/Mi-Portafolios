import React from 'react';

const Contact = () => {
  return (
    <section className="contact-hero">
      <div className="wrap">
        <div className="eyebrow reveal">Hablemos</div>
        <p className="lead reveal">¿Tienes una idea, una oportunidad o quieres conversar sobre tecnología? Escríbeme.</p>
        <a className="email reveal" href="mailto:yefersonandres225@gmail.com">yefersonandres225@gmail.com</a>
        <div className="socials reveal">
          <a href="https://github.com/Yefersn15" target="_blank" rel="noopener noreferrer" className="social-card">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 .5a12 12 0 0 0-3.8 23.1c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.6-.8 3.3-1.3.1-.6.4-1.1.8-1.3-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.6 11.6 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
              </svg>
            </span>
            <span className="social-label">GitHub</span>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer" className="social-card">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 11.62a1.56 1.56 0 0 0 0-3.12ZM5.5 9.98h2.88V18H5.5zM10.24 9.98h2.76v1.12h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.39V18h-2.88v-7.36h-2.76v.95h-.04c-.4-.74-1.28-1.53-2.64-1.53-1.8 0-3.68 1.18-3.68 3.72V18H10.24z" />
              </svg>
            </span>
            <span className="social-label">LinkedIn</span>
          </a>

          <a href="../public/cv/hoja-de-vidaV2.pdf" target="_blank" rel="noopener noreferrer" className="social-card">
            <span className="social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 3h7l4 4v14H7z" />
                <path d="M14 3v4h4" />
                <path d="M9 13h6" />
                <path d="M9 16h6" />
              </svg>
            </span>
            <span className="social-label">CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;