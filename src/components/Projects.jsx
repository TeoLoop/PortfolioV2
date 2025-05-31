import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Star, Filter } from 'lucide-react';
import '../styles/Projects.css'
import nomadax from '../assets/nomadax.png'
import todolist from '../assets/todolist.png'
import shoppingcart from '../assets/shoppingcart.png'
import chatgo from '../assets/chatgo.png'
import clima from '../assets/clima.png'
import movies from '../assets/movies.png'
import landing from '../assets/landing.png'
import portfolio from '../assets/portfolio.png'
import authservice from '../assets/authservice.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'NomadaX',
      description: 'NomadaX es una plataforma académica en desarrollo para reservas de alojamientos temporales, inspirada en Airbnb. Utiliza React, Spring Boot y MySQL, con Docker Compose para facilitar su ejecución local. Incluye un panel de administración para una gestión eficiente de hoteles.',
      image: nomadax,
      category: 'fullstack',
      technologies: ['React', 'Java', 'MySQL', 'Docker'],
      features: [
        'Autenticación y autorización',
        'Panel de administración',
        'Procesamiento de pagos',
        'Sistema de inventario',
        'Notificaciones en tiempo real'
      ],
      links: {
        github: 'https://github.com/TeoLoop/NomadaX',
      },
      status: 'Completado',
      year: '2025'
    },
    {
      id: 2,
      title: 'To Do List con React',
      description: 'Gestor de tareas simple e intuitivo para organizar tu día.',
      image: todolist,
      category: 'frontend',
      technologies: ['React', 'CSS'],
      features: [
        'Crear, editar y eliminar tareas',
        'Diseño responsive',
        'Interfaz sencilla'
      ],
      links: {
        github: 'https://github.com/TeoLoop/ToDo-List-React'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 3,
      title: 'Carrito de compras con React',
      description: 'Simulación de un e-commerce con funcionalidad de carrito y filtros.',
      image: shoppingcart,
      category: 'frontend',
      technologies: ['React', 'CSS', 'Fake Store API'],
      features: [
        'Añadir productos al carrito',
        'Filtrado de productos',
        'Interfaz amigable'
      ],
      links: {
        github: 'https://github.com/TeoLoop/ShoppingCart-React'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 4,
      title: 'Chat en tiempo real con Angular',
      description: 'Aplicación de chat desarrollada con Angular y backend con WebSockets.',
      image: chatgo,
      category: 'fullstack',
      technologies: ['Angular', 'Node.js', 'Socket.IO'],
      features: [
        'Mensajería en tiempo real',
        'Backend con WebSockets',
        'Interfaz con Angular'
      ],
      links: {
        github: 'https://github.com/TeoLoop/ChatGo'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 5,
      title: 'App de clima con React',
      description: 'Consulta del clima en tiempo real usando APIs externas.',
      image: clima,
      category: 'frontend',
      technologies: ['React', 'API REST', 'CSS'],
      features: [
        'Consulta de clima en tiempo real',
        'Uso de APIs externas',
        'Diseño limpio y responsive'
      ],
      links: {
        github: 'https://github.com/TeoLoop/ClimaApp-React'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 6,
      title: 'App de películas con React',
      description: 'Explorador de películas consumiendo la API de TheMovieDB.',
      image: movies,
      category: 'frontend',
      technologies: ['React', 'CSS', 'API-TheMovieDB'],
      features: [
        'Búsqueda de películas',
        'Detalles de películas',
        'Diseño moderno'
      ],
      links: {
        github: 'https://github.com/TeoLoop/AppPeliculas-react'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 7,
      title: 'Landing Page HTML y CSS',
      description: 'Página de presentación simple, estática y responsive.',
      image: landing,
      category: 'frontend',
      technologies: ['HTML', 'CSS'],
      features: [
        'Diseño responsive',
        'Carga rápida',
        'Contenido estático'
      ],
      links: {
        github: 'https://github.com/TeoLoop/Manage-Website'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 8,
      title: 'Portafolio Personal',
      description: 'Portafolio web desarrollado con React y Java Spring Boot, donde presento mis proyectos como desarrollador FullStack. Incluye integración con una API propia, diseño moderno y enfoque responsive.',
      image: portfolio,
      category: 'fullstack',
      technologies: ['React', 'Java', 'Spring Boot', 'CSS', 'HTML', 'H2'],
      features: [
        'Integración con API propia',
        'Diseño moderno',
        'Responsive'
      ],
      links: {
        github: 'https://github.com/TeoLoop/PortfolioV2'
      },
      status: 'Completado',
      year: '2024'
    },
    {
      id: 9,
      title: 'Servicio de autenticacion',
      description: 'Este microservicio proporciona funcionalidades de autenticación y registro de usuarios utilizando Spring Boot, Spring Security y JWT. Es parte de un ecosistema de microservicios más grande.',
      image: authservice,
      category: 'backend',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      features: [
        'Login, Register, Roles'
      ],
      links: {
        github: 'https://github.com/TeoLoop/AuthService'
      },
      status: 'Completado',
      year: '2025'
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos', count: projects.length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { key: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado':
        return '#10B981';
      case 'En desarrollo':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2 mb-4">
            <span className="text-accent">04.</span> Proyectos
          </h2>
          <p className="text-large text-secondary mb-8">
            Una selección de proyectos que demuestran mis habilidades técnicas
          </p>
        </div>

        <div className="projects-filters">
          <div className="filter-icon">
            <Filter size={20} />
          </div>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
            >
              {filter.label}
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
              <img src={project.image} alt={project.title} className="project-img" />
                <div className="image-placeholder">
                  <Eye size={48} />
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver sitio en vivo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver demo"
                      >
                        <Eye size={20} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver código en GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <div 
                      className="project-status"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="features-title">Características principales:</h4>
                  <ul className="features-list">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="feature-item">
                        <Star size={12} />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="feature-more">
                        +{project.features.length - 3} más
                      </li>
                    )}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-content">
            <h3 className="heading-3 mb-4">¿Interesado en ver más?</h3>
            <p className="text-base text-secondary mb-6">
              Estos son solo algunos de mis proyectos destacados. Puedes encontrar 
              más trabajo en mi perfil de GitHub o contactarme para discutir 
              proyectos específicos.
            </p>
            <div className="cta-buttons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={20} />
                Ver GitHub
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;