import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import profilePic from '../assets/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Ganpat Kumar<span className="accent-text">.</span></h1>
          <h2 className="hero-role">Full Stack Developer | Java & Python | Gen AI Enthusiast</h2>
          <p className="hero-summary">
            A passionate developer specializing in Java and Python. Currently exploring Gen AI to build
            intelligent applications focused on controlling and fine-tuning LLMs, not just API integration.
          </p>
          
          <div className="hero-actions">
            <a href="/Ganpat_Kumar_F.pdf" download className="btn btn-primary">
              Download Resume <Download size={18} />
            </a>
            <a href="#projects" className="btn btn-outline">
              View Work <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/GanpatKumargct" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ganpatkumar1/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ganpatkumardev@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="profile-blob">
            <div className="profile-image-container">
               <img src={profilePic} alt="Ganpat Kumar" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
