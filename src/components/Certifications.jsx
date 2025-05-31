import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Clock } from 'lucide-react';
import '../styles/Certifications.css'

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      expiryDate: '2027',
      credentialId: 'AWS-SAA-2024-001',
      category: 'cloud',
      status: 'active',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'RDS'],
      verificationUrl: 'https://aws.amazon.com/verification/12345',
      description: 'Certificación que valida la experiencia en el diseño de sistemas distribuidos en AWS.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      expiryDate: '2025',
      credentialId: 'GCP-PD-2023-456',
      category: 'cloud',
      status: 'active',
      skills: ['GCP', 'Kubernetes', 'App Engine', 'Cloud Functions'],
      verificationUrl: 'https://cloud.google.com/certification/verify/67890',
      description: 'Certificación que demuestra habilidades en desarrollo de aplicaciones nativas de la nube.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 3,
      title: 'React Developer Professional',
      issuer: 'Meta',
      date: '2024',
      expiryDate: 'Permanente',
      credentialId: 'META-REACT-2024-789',
      category: 'frontend',
      status: 'active',
      skills: ['React', 'Redux', 'React Native', 'JavaScript', 'TypeScript'],
      verificationUrl: 'https://developers.facebook.com/certificate/verify/111',
      description: 'Certificación avanzada en desarrollo con React y el ecosistema de Meta.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 4,
      title: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2023',
      expiryDate: '2026',
      credentialId: 'NODEJS-AD-2023-321',
      category: 'backend',
      status: 'active',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Microservices'],
      verificationUrl: 'https://openjsf.org/certification/verify/654',
      description: 'Certificación que valida competencias en desarrollo backend con Node.js.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 5,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      expiryDate: '2025',
      credentialId: 'DOCKER-DCA-2023-555',
      category: 'devops',
      status: 'active',
      skills: ['Docker', 'Containers', 'Docker Compose', 'Container Orchestration'],
      verificationUrl: 'https://docker.com/certificate/verify/999',
      description: 'Certificación en containerización y orquestación con Docker.',
      logo: '/api/placeholder/80/80'
    },
    {
      id: 6,
      title: 'MongoDB Developer',
      issuer: 'MongoDB Inc.',
      date: '2022',
      expiryDate: '2025',
      credentialId: 'MONGO-DEV-2022-777',
      category: 'database',
      status: 'expiring',
      skills: ['MongoDB', 'NoSQL', 'Aggregation', 'Indexing', 'Sharding'],
      verificationUrl: 'https://university.mongodb.com/verify/888',
      description: 'Certificación en desarrollo de aplicaciones con bases de datos MongoDB.',
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