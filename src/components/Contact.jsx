import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hola@mateolopez.dev',
      link: 'mailto:hola@mateolopez.dev'
    },
    {
      icon: <Phone size={24} />,
      label: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Ubicación',
      value: 'Montevideo, Uruguay',
      link: 'https://maps.google.com/?q=Montevideo,Uruguay'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/mateolopez',
      color: '#0077B5'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      url: 'https://github.com/mateolopez',
      color: '#333'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      url: 'https://twitter.com/mateolopez',
      color: '#1DA1F2'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      url: 'https://wa.me/15551234567',
      color: '#25D366'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2 mb-4">
            <span className="text-accent">06.</span> Contacto
          </h2>
          <p className="text-large text-secondary mb-8">
            ¿Tienes un proyecto en mente? Me encantaría escuchar de ti
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3 className="heading-3 mb-6">Hablemos</h3>
              <p className="text-base text-secondary mb-8">
                Estoy siempre abierto a discutir nuevas oportunidades, 
                proyectos interesantes o simplemente charlar sobre tecnología.
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4 className="social-title">Sígueme en:</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                    >
                      {social.icon}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="heading-3 mb-6">Envíame un mensaje</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                />
              </div>

              {submitStatus && (
                <div className={`form-status ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>¡Mensaje enviado correctamente! Te responderé pronto.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>Error al enviar el mensaje. Por favor, intenta de nuevo.</span>
                    </>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="form-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3 className="heading-3 mb-4">¿Prefieres una llamada rápida?</h3>
            <p className="text-base text-secondary mb-6">
              Si tienes prisa o prefieres hablar directamente, 
              no dudes en llamarme o enviarme un mensaje por WhatsApp.
            </p>
            <div className="cta-buttons">
              <a href="tel:+15551234567" className="btn btn-primary">
                <Phone size={20} />
                Llamar ahora
              </a>
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;