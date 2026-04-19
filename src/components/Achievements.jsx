import { Trophy, Medal, Award } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'NPTEL Java Certification',
      organization: 'NPTEL',
      description: 'Elite, Silver Medal in advanced Java programming concepts and problem solving.',
      icon: <Medal size={28} />
    },
    {
      title: 'Hackathon Finalist',
      organization: 'National Level Tech Fest',
      description: 'Developed an innovative prototype solving real-world challenges under a 24-hour time constraint.',
      icon: <Trophy size={28} />
    },
    {
      title: 'Top Performer Award',
      organization: 'Academic Excellence',
      description: 'Recognized for outstanding academic performance and consistent technical contributions.',
      icon: <Award size={28} />
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="achievement-card glass animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achieve-icon">
                {achievement.icon}
              </div>
              <div className="achieve-content">
                <h3>{achievement.title}</h3>
                <span className="achieve-org">{achievement.organization}</span>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
