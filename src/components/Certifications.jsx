import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Clock } from 'lucide-react';
import '../styles/Certifications.css'

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'Professional Developer',
      issuer: 'Digital House',
      date: '2025',
      expiryDate: 'Permanente',
      category: 'backend',
      status: 'active',
      skills: ['Java', 'React', 'Cloud Computing', 'Database'],
      verificationUrl: 'https://www.linkedin.com/in/lopezmateo/overlay/Certifications/597891503/treasury/?profileId=ACoAACM8HcEB1i-lBh7r2Xs7qdghBuHLbPMpEE0',
      description: 'Formación intensiva en desarrollo fullstack con enfoque en tecnologías como HTML, CSS, JavaScript, React, Java con Spring Boot, MySQL y AWS. Incluye prácticas en metodologías ágiles, testing y habilidades profesionales como comunicación efectiva y trabajo en equipo.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 2,
      title: 'Cloud Computing',
      issuer: 'Digital House',
      date: '2025',
      expiryDate: '2026',
      category: 'cloud',
      status: 'active',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'RDS'],
      verificationUrl: 'https://www.linkedin.com/in/lopezmateo/overlay/Certifications/602035571/treasury/?profileId=ACoAACM8HcEB1i-lBh7r2Xs7qdghBuHLbPMpEE0',
      description: 'Certificación que valida la experiencia en el diseño de sistemas distribuidos en AWS.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 3,
      title: 'Java Backend Developer',
      issuer: 'Digital House',
      date: '2024',
      expiryDate: 'Permanente',
      category: 'backend',
      status: 'active',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data', 'Hibernate'],
      verificationUrl: 'https://www.linkedin.com/in/lopezmateo/overlay/Certifications/602483297/treasury/?profileId=ACoAACM8HcEB1i-lBh7r2Xs7qdghBuHLbPMpEE0',
      description: 'Certificación en desarrollo backend con Java y el ecosistema de Spring.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 4,
      title: 'Database Developer',
      issuer: 'Linkedin Learning.',
      date: '2024',
      expiryDate: '----',
      category: 'database',
      status: 'active',
      skills: ['SQL', 'NoSQL', 'Aggregation', 'Indexing', 'Sharding'],
      verificationUrl: 'https://www.linkedin.com/learning/certificates/ab18d5578ea20c9b4d82654bc3055548664d537d69310900bbfb6d4882eeeebc',
      description: 'Certificación en desarrollo de bases de datos por Linkedin Learning.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 5,
      title: 'Web Designer',
      issuer: 'Digital House',
      date: '2023',
      expiryDate: '2026',
      category: 'frontend',
      status: 'active',
      skills: ['Javascript', 'HTML5', 'CSS3', 'Sass'],
      verificationUrl: 'https://www.linkedin.com/in/lopezmateo/overlay/Certifications/602741392/treasury/?profileId=ACoAACM8HcEB1i-lBh7r2Xs7qdghBuHLbPMpEE0',
      description: 'Certificación que valida competencias en desarrollo web basico',
      logo: '/api/placeholder/80/80'
    }
  ];

  const categories = [
    { key: 'all', label: 'Todas', count: certifications.length },
    { key: 'cloud', label: 'Cloud', count: certifications.filter(c => c.category === 'cloud').length },
    { key: 'frontend', label: 'Frontend', count: certifications.filter(c => c.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: certifications.filter(c => c.category === 'backend').length },
    { key: 'devops', label: 'DevOps', count: certifications.filter(c => c.category === 'devops').length },
    { key: 'database', label: 'Database', count: certifications.filter(c => c.category === 'database').length }
  ];

  const filteredCertifications = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'expiring':
        return <Clock size={16} className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return '#10B981';
      case 'expiring':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2 mb-4">
            <span className="text-accent">05.</span> Certificaciones
          </h2>
          <p className="text-large text-secondary mb-8">
            Certificaciones profesionales que validan mis conocimientos técnicos
          </p>
        </div>

        <div className="cert-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`filter-button ${activeCategory === category.key ? 'active' : ''}`}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        <div className="certifications-grid">
          {filteredCertifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <div className="cert-logo">
                  <Award size={32} />
                </div>
                <div className="cert-status">
                  {getStatusIcon(cert.status)}
                  <span className="status-text">{cert.status === 'active' ? 'Activa' : 'Por vencer'}</span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-details">
                  <div className="cert-detail">
                    <Calendar size={16} />
                    <span>Obtenida: {cert.date}</span>
                  </div>
                  <div className="cert-detail">
                    <Clock size={16} />
                    <span>Vence: {cert.expiryDate}</span>
                  </div>
                </div>

                <div className="cert-skills">
                  <h4 className="skills-title">Habilidades validadas:</h4>
                  <div className="skills-list">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cert-footer">
                  <div className="credential-info">
                    <span className="credential-label">ID:</span>
                    <span className="credential-id">{cert.credentialId}</span>
                  </div>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                    <ExternalLink size={16} />
                    Verificar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-stats">
          <div className="stat-card">
            <div className="stat-number">{certifications.length}</div>
            <div className="stat-label">Certificaciones Totales</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{certifications.filter(c => c.status === 'active').length}</div>
            <div className="stat-label">Activas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {[...new Set(certifications.flatMap(c => c.skills))].length}
            </div>
            <div className="stat-label">Tecnologías Validadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;