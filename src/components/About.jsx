import React from 'react';
import { Code2, Coffee, Heart, Target } from 'lucide-react';
import '../styles/About.css'

const About = () => {
  const stats = [
    { number: '3+', label: 'Años de experiencia', icon: Target },
    { number: '4+', label: 'Proyectos completados', icon: Code2 },
    { number: '500+', label: 'Tazas de café', icon: Coffee },
    { number: '100%', label: 'Dedicación', icon: Heart }
  ];

  const interests = [
    'Desarrollo Web Moderno',
    'Arquitectura de Software',
    'UI/UX Design',
    'Metodologías Ágiles',
    'Inteligencia Artificial',
    'Open Source'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2 className="heading-2 mb-4">
                <span className="text-accent">01.</span> Sobre mí
              </h2>
              <p className="text-large text-secondary mb-8">
                Desarrollador apasionado por crear soluciones digitales innovadoras
              </p>
            </div>

            <div className="about-description">
              <p className="text-base mb-6">
                Soy un desarrollador Full Stack con formación sólida y experiencia en implementación de software. A lo largo de los últimos años, trabajé como implementador, y complementé mi formación con proyectos propios y académicos, donde utilicé tecnologías como Java, React y MySQL, fortaleciendo mis habilidades tanto en frontend como en backend.
              </p>

              <p className="text-base mb-6">
                Me gusta enfocarme en soluciones funcionales y mantenibles, priorizando siempre la claridad del código y el trabajo en equipo. Disfruto enfrentar desafíos técnicos y aprender de cada experiencia, ya sea integrando servicios, automatizando procesos o mejorando la experiencia del usuario.
              </p>

              <p className="text-base mb-8">
                Finalicé la certificación Professional Developer en Digital House junto a Mercado Libre y Globant, sigo formándome día a día. Me interesa estar al tanto de las herramientas y buenas prácticas del desarrollo moderno, con el objetivo de seguir creciendo y aportar valor real a cada proyecto en el que participo.
              </p>


              <div className="interests">
                <h3 className="heading-4 mb-4">Áreas de interés:</h3>
                <div className="interests-grid">
                  {interests.map((interest, index) => (
                    <div key={index} className="interest-item">
                      <span className="text-accent">▸</span>
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-container">
              {stats.map(({ number, label, icon: Icon }, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <Icon size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{number}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-image">
              <div className="image-container">
                <div className="image-bg"></div>
                <div className="image-content">
                  <div className="code-snippet">
                    <div className="code-line">
                      <span className="code-keyword">const</span>
                      <span className="code-variable"> developer</span>
                      <span className="code-operator"> = </span>
                      <span className="code-brace">{'{'}</span>
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">name</span>
                      <span className="code-operator">: </span>
                      <span className="code-string">'Mateo López'</span>
                      <span className="code-operator">,</span>
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">passion</span>
                      <span className="code-operator">: </span>
                      <span className="code-string">'Code & Coffee'</span>
                      <span className="code-operator">,</span>
                    </div>
                    <div className="code-line code-indent">
                      <span className="code-property">status</span>
                      <span className="code-operator">: </span>
                      <span className="code-string">'Always Learning'</span>
                    </div>
                    <div className="code-line">
                      <span className="code-brace">{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;