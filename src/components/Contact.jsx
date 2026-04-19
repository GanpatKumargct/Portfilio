import { Mail, Send, Phone } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaWhatsapp as Whatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info animate-fade-up">
            <h3>Let's build something together</h3>
            <p>Have a project in mind, a question, or just want to say hi? I'm currently open to new opportunities and my inbox is always open. I'll try my best to get back to you!</p>
            
            <div className="contact-links">
              <a href="mailto:ganpatkumardev@gmail.com" className="contact-detail glass">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">ganpatkumardev@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/919955652437" target="_blank" rel="noreferrer" className="contact-detail glass">
                <div className="contact-icon"><Whatsapp size={24} /></div>
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+91 9955652437</span>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/ganpatkumar1/" target="_blank" rel="noreferrer" className="contact-detail glass">
                <div className="contact-icon"><Linkedin size={24} /></div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">in/ganpatkumar1</span>
                </div>
              </a>
              
              <a href="https://github.com/GanpatKumargct" target="_blank" rel="noreferrer" className="contact-detail glass">
                <div className="contact-icon"><Github size={24} /></div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">GanpatKumargct</span>
                </div>
              </a>
            </div>
          </div>
          
          <form className="contact-form glass animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
