import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Palette, Wrench, Cloud } from 'lucide-react';
import '../styles/Skills.css'


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 75, color: '#61DAFB' },
        { name: 'JavaScript', level: 86, color: '#FFCA28' },
        { name: 'HTML5/CSS3', level: 95, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 90, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Java', level: 82, color: '#DC382D' },
        { name: 'Python', level: 40, color: '#3776AB' },
        { name: 'REST APIs', level: 92, color: '#FF6B35' }
      ]
    },
    {
      title: 'Base de Datos',
      icon: Database,
      skills: [
        { name: 'MSSQL', level: 85, color: '#336791' },
        { name: 'MongoDB', level: 62, color: '#47A248' },
        { name: 'MySQL', level: 85, color: '#4479A1' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 25, color: '#FF9900' },
        { name: 'Docker', level: 80, color: '#2496ED' },
        { name: 'Git', level: 95, color: '#F05032' },
        { name: 'CI/CD', level: 40, color: '#326CE5' }
      ]
    },
    {
      title: 'Herramientas',
      icon: Wrench,
      skills: [
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Figma', level: 80, color: '#F24E1E' },
        { name: 'Postman', level: 85, color: '#FF6C37' }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 80, color: '#FF6B6B' },
        { name: 'Responsive Design', level: 95, color: '#4ECDC4' },
        { name: 'User Research', level: 75, color: '#96CEB4' },
        { name: 'Accessibility', level: 85, color: '#FFEAA7' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Is intersecting:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2 mb-4">
            <span className="text-accent">03.</span> Habilidades
          </h2>
          <p className="text-large text-secondary mb-12">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="heading-4">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            backgroundColor: skill.color,
                            transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3 className="heading-3 mb-4">Filosofía de desarrollo</h3>
            <p className="text-base text-secondary mb-6">
              Creo en el desarrollo centrado en el usuario, código limpio y escalable, 
              y el aprendizaje continuo. Mi enfoque combina las mejores prácticas 
              técnicas con una comprensión profunda de las necesidades del negocio.
            </p>
            <div className="principles">
              <div className="principle">
                <span className="principle-icon">🎯</span>
                <span>Enfoque en resultados</span>
              </div>
              <div className="principle">
                <span className="principle-icon">🔧</span>
                <span>Código mantenible</span>
              </div>
              <div className="principle">
                <span className="principle-icon">🚀</span>
                <span>Optimización continua</span>
              </div>
              <div className="principle">
                <span className="principle-icon">👥</span>
                <span>Colaboración efectiva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;