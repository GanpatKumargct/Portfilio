import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-timeline">
          <div className="experience-item glass animate-fade-up">
            <div className="exp-icon">
              <Briefcase size={24} />
            </div>
            <div className="exp-content">
              <div className="exp-header">
                <h3>Full Stack Developer & Tutor Intern</h3>
                <span className="exp-company">@BucketStudy</span>
                <span className="exp-date">26 Jun 2025 - 26 Dec 2025 (6 Months)</span>
              </div>
              <ul className="exp-bullets">
                <li>Worked on backend development using Java, Spring Boot, and REST APIs.</li>
                <li>Built and maintained APIs for real-world use cases and handled database integration (MySQL).</li>
                <li>Collaborated with frontend team to integrate backend services with UI.</li>
                <li>Debugged issues, optimized performance, and ensured smooth system functionality.</li>
                <li>Guided students in programming concepts and helped them with practical problem-solving.</li>
                <li>Gained experience in real-world development workflows and team collaboration.</li>
              </ul>
            </div>
          </div>
          {/* Add more experience items here if needed later */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
