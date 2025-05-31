import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import '../styles/Experience.css'

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Codere',
      position: 'Implementador de Software',
      location: 'Montevideo, Uruguay',
      period: '2022 - Presente',
      type: 'Tiempo completo',
      description: 'Implementación, mantenimiento y soporte de soluciones tecnológicas en entornos corporativos, trabajando con bases de datos, servicios web y páginas institucionales.',
      achievements: [
        'Administré y optimicé bases de datos SQL Server, mejorando la eficiencia de consultas en un 15%',
        'Implementé soluciones internas que aumentaron la eficiencia operativa en un 20%',
        'Realicé pruebas funcionales y de rendimiento con Postman, JMeter y SoapUI, reduciendo errores en producción en un 25%',
        'Gestioné servidores Windows, asegurando alta disponibilidad y rendimiento',
        'Participé en proyectos ágiles con metodologías Scrum y herramientas como Jira',
        'Mantuve y actualicé páginas web corporativas utilizando JavaScript, HTML y CSS'
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'SQL Server', 'Windows Server', 'WebServices', 'SoapUI', 'JMeter', 'Postman', 'Scrum', 'Jira']
    }
    ,
    {
      company: 'Freelance',
      position: 'Desarrollador Web',
      location: 'Remoto',
      period: '2021 - 2022',
      type: 'Freelance',
      description: 'Desarrollo de sitios web básicos y mantenimiento de páginas para clientes particulares.',
      achievements: [
        'Diseñé y desarrollé sitios web responsivos para emprendimientos locales',
        'Realicé mantenimiento y mejoras en sitios existentes',
        'Me comuniqué directamente con clientes para comprender sus necesidades y brindar soluciones simples y efectivas',
        'Fortalecí mis habilidades en desarrollo frontend y buenas prácticas de diseño web'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress']
    }
  ];

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2 mb-4">
            <span className="text-accent">02.</span> Experiencia
          </h2>
          <p className="text-large text-secondary mb-12">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="experience-container">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
              >
                <div className="tab-content">
                  <div className="tab-company">{exp.company}</div>
                  <div className="tab-period">{exp.period}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="experience-content">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-panel ${activeTab === index ? 'active' : ''}`}
              >
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="heading-3">{exp.position}</h3>
                    <div className="company-link">
                      <span className="text-accent">@ {exp.company}</span>
                      <ExternalLink size={16} className="external-icon" />
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="employment-type">
                      {exp.type}
                    </div>
                  </div>
                </div>

                <div className="experience-description">
                  <p className="text-base text-secondary mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="achievements">
                    <h4 className="heading-4 mb-4">Logros destacados:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="achievement-item">
                          <span className="bullet">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h4 className="heading-4 mb-4">Tecnologías utilizadas:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;