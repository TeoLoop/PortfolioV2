import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import '../styles/Hero.css'

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Desarrollador Full Stack',
    'Creador de Soluciones Web',
    'Apasionado por la Tecnología'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % titles.length;
      const fullText = titles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting animate-fade-in-up">
              <span className="text-accent">Hola, soy</span>
            </div>
            
            <h1 className="hero-name animate-fade-in-up">
              Mateo López
            </h1>
            
            <div className="hero-title animate-fade-in-up">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description animate-fade-in-up">
            Desarrollador Full Stack con experiencia en implementación de software y una sólida base en frontend y backend. Me especializo en crear experiencias web modernas y funcionales, aplicando buenas prácticas y código limpio.
            <br />
Completé la certificación Professional Developer en Digital House, trabajando con tecnologías como Java, .NET, React.js, HTML, CSS, JavaScript, MySQL, metodologías ágiles y administración de servidores Linux. Apasionado por seguir aprendiendo y creciendo profesionalmente.
            </p>
            
            <div className="hero-actions animate-fade-in-up">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Ver mis proyectos
              </button>
              <button className="btn btn-secondary">
                <Download size={20} />
                Descargar CV
              </button>
            </div>
            
            <div className="hero-social animate-fade-in-up">
              <a 
                href="https://github.com/TeoLoop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/lopezmateo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:matelopez2830@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-visual animate-slide-in-right">
            <div className="hero-avatar">
              <div className="avatar-bg"></div>
              <div className="avatar-content">
                <span className="avatar-text">ML</span>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="scroll-indicator"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;