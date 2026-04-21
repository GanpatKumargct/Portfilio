import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import aiValidatorImg from '../assets/Ai Validator.png';
import crmToolImg from '../assets/CRM tool.png';
import bookstoreImg from '../assets/bookstore_api_illustration.png';
import payrollImg from '../assets/Payroll.jpeg';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AI Startup Idea Validator',
      description: 'An AI-powered full-stack web application that analyzes startup ideas and generates comprehensive validation reports in seconds — including market analysis, competitor landscape, tech stack suggestions, and risk assessment via Groq LLaMA 3.3.',
      tags: ['React', 'FastAPI', 'PostgreSQL', 'AI (Groq)'],
      github: 'https://github.com/GanpatKumargct/Schmooze-Media',
      demo: 'https://ai-ideavalidator-iota.vercel.app/',
      hasImage: true,
      image: aiValidatorImg
    },
    {
      title: 'AI-First CRM (HCP Module)',
      description: 'An AI-powered CRM system where users log interactions with Healthcare Professionals (HCPs) using a conversational interface and local voice AI transcription instead of manual form filling.',
      tags: ['React', 'Redux', 'FastAPI', 'PostgreSQL', 'LangGraph'],
      github: 'https://github.com/GanpatKumargct/Ai-Powered-CRM',
      demo: '#',
      hasImage: true,
      image: crmToolImg
    },
    {
      title: 'Bookstore Management System - REST API',
      description: 'A backend application built using Java Spring Boot, designed to efficiently manage books, users, and orders through a set of RESTful APIs with JWT authentication and role-based access control.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JWT'],
      github: '#',
      demo: '#',
      hasImage: true,
      image: bookstoreImg
    },
    {
      title: 'Payroll Management System (PMS)',
      description: 'A full-stack Payroll Management System featuring automated employee payroll processing, attendance tracking, salary calculation, and role-based access control.',
      tags: ['Spring Boot', 'Java 17+', 'React.js', 'MySQL', 'JWT'],
      github: '#',
      demo: '#',
      hasImage: true,
      image: payrollImg
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextProjects = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevProjects = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card glass animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                {project.hasImage ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="project-abbr">{project.title.substring(0, 2).toUpperCase()}</span>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="projects-pagination animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={prevProjects} className="pagination-btn" aria-label="Previous Projects">
              <ChevronLeft size={24} />
            </button>
            <div className="pagination-dots">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`pagination-dot ${idx === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextProjects} className="pagination-btn" aria-label="Next Projects">
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
