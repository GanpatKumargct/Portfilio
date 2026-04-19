import { Code, Cpu, Target, Brain } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src={profilePic} alt="Profile" className="about-image" />
          </div>
          <div className="about-text">
            <p>
              I’m a passionate Full Stack Developer with a strong focus on building robust systems using Java and Python. I enjoy creating efficient backend architectures and responsive user interfaces that solve real-world problems.
            </p>
            <p>
              I have hands-on experience with Java, Spring Boot, FastAPI, REST APIs, and databases. I’m comfortable working across the stack and believe in writing clean, maintainable, and scalable code.
            </p>
            <p>
              I’m currently exploring the frontiers of Gen AI, moving beyond simple API calls to build applications that involve deep control and fine-tuning of LLMs. I focus on learning by building and understanding the underlying behavior of intelligent systems.
            </p>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon"><Code size={24} /></div>
                <h4>Full Stack</h4>
                <p>Java & Python Ecosystems</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><Brain size={24} /></div>
                <h4>Gen AI</h4>
                <p>LLM Control & Fine-tuning</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><Target size={24} /></div>
                <h4>Problem Solver</h4>
                <p>Scalable Backend Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
