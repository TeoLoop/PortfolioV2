import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, Code, Coffee } from 'lucide-react';
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Contacto', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/TeoLoop',
      icon: <Github size={20} />,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/lopezmateo',
      icon: <Linkedin size={20} />,
      color: '#0077B5'
    },
    {
      name: 'Email',
      url: 'mailto:matelopez2830@gmail.com',
      icon: <Mail size={20} />,
      color: '#EA4335'
    }
  ];

  const technologies = [
    'Java', 'React', 'Javascript', '.NET', 'AWS', 'Docker'
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-main">
              <div className="footer-logo">
                <Code size={32} />
                <span className="logo-text">Mateo López</span>
              </div>
              <p className="footer-description">
                Desarrollador Full Stack apasionado por crear experiencias digitales 
                excepcionales y soluciones tecnológicas innovadoras.
              </p>
              <div className="footer-technologies">
                <span className="tech-label">Tecnologías favoritas:</span>
                <div className="tech-list">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Navegación</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Conectemos</h3>
              <p className="footer-text">
                Sígueme en redes sociales o contáctame directamente
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="contact-info">
                <p className="contact-item">
                  📧 matelopez2830@gmail.com
                </p>
                <p className="contact-item">
                  📍 Montevideo, Uruguay
                </p>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Colaboremos</h3>
              <p className="footer-text">
                ¿Tienes un proyecto interesante? Me encantaría ser parte de él.
              </p>
              <button
                onClick={() => handleNavClick('#contact')}
                className="footer-cta"
              >
                <Mail size={16} />
                Enviar mensaje
              </button>
              <div className="footer-stats">
                <div className="stat">
                  <span className="stat-number">9+</span>
                  <span className="stat-label">Proyectos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Años de experiencia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>© {currentYear} Mateo López. Hecho con</span>
              <Heart size={16} fill="currentColor" />
              <span>y mucho</span>
              <Coffee size={16} />
            </div>
            <button
              onClick={scrollToTop}
              className="scroll-to-top"
              aria-label="Volver arriba"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;