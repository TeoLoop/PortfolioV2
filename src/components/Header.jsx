import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code, User, Briefcase, Award, MessageCircle, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css'

const Header = () => {
  const { darkMode, toggleTheme, activeSection, setActiveSection } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: User },
    { id: 'about', label: 'Sobre mí', icon: User },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'skills', label: 'Habilidades', icon: Code },
    { id: 'projects', label: 'Proyectos', icon: FileText },
    { id: 'certifications', label: 'Certificaciones', icon: Award },
    { id: 'contact', label: 'Contacto', icon: MessageCircle }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">
              <span className="text-accent">{'<'}</span>
              Mateo López
              <span className="text-accent">{' />'}</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="header-controls">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost mobile-menu-btn md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`nav-link-mobile ${activeSection === id ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;