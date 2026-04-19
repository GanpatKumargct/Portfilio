import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer section glass">
      <div className="container footer-container">
        <div className="footer-content">
          <a href="#home" className="logo">
            Ganpat<span className="accent-text">.</span>
          </a>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Ganpat Kumar. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="https://github.com/GanpatKumargct" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/ganpatkumar1/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        
        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
