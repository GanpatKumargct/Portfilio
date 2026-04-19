import { Code2, Database, LayoutTemplate, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} className="accent-text" />,
      skills: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      icon: <Terminal size={24} className="accent-text" />,
      skills: ['Spring Boot', 'REST APIs', 'FASTAPI']
    },
    {
      title: 'Database',
      icon: <Database size={24} className="accent-text" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Other',
      icon: <LayoutTemplate size={24} className="accent-text" />,
      skills: ['Git', 'Postman', 'Docker', 'GitHub']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-card glass animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map(skill => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
