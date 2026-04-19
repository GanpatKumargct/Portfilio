import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationTimeline = [
    {
      degree: 'B.E Computer Science',
      institution: 'Anna University',
      period: '2022 - 2026',
      details: 'Specialized in Human-Computer Interaction and Web Technologies.'
    },
    {
      degree: 'Frontend Development Bootcamp',
      institution: 'Bucket Study',
      period: '2024',
      details: 'Intensive 3-month program focusing on modern JavaScript frameworks and responsive design.'
    },
    {
      degree: 'Java Full Stack Course',
      institution: 'HGRD Edu Tech',
      period: '2024',
      details: 'Intensive 6-month program focusing on modern Java Full stack development and scalable architectures.'
    },
    {
      degree: 'High School - PCM',
      institution: 'Higher Secondary School',
      period: '2020 - 2022',
      details: 'A Science PCM Specialized. Secured 71.4% overall.'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {educationTimeline.map((item, index) => (
            <div 
              key={index} 
              className="education-card glass animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="edu-icon-container">
                <GraduationCap size={28} className="edu-icon" />
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3>{item.degree}</h3>
                  <span className="edu-period">{item.period}</span>
                </div>
                <h4 className="edu-institution">{item.institution}</h4>
                <p className="edu-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
