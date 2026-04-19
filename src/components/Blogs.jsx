import { ArrowUpRight } from 'lucide-react';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      title: 'Understanding React State Management in 2025',
      date: 'March 15, 2026',
      excerpt: 'A deep dive into modern state management techniques, context API, and when to use external libraries like Redux or Zustand.',
      link: '#'
    },
    {
      title: 'Building Scalable APIs with Spring Boot',
      date: 'February 28, 2026',
      excerpt: 'Learn the architectural patterns and best practices for creating highly scalable REST APIs using Java and Spring Boot.',
      link: '#'
    },
    {
      title: 'The Future of Web Styling: Beyond Tailwind',
      date: 'January 10, 2026',
      excerpt: 'Exploring the new features in CSS that are making complex styling easier without relying heavily on utility frameworks.',
      link: '#'
    }
  ];

  return (
    <section id="blogs" className="section">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <a 
              key={index} 
              href={blog.link}
              className="blog-card glass animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="blog-date">{blog.date}</div>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <div className="blog-footer">
                <span className="read-more">Read Article</span>
                <ArrowUpRight size={20} className="blog-arrow" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
