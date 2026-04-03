import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Financial Guru',
      description: 'AI-powered chatbot that helps customers with loan and mortgage eligibility queries. Uses RAG with NatWest public information and integrates with APIs for citizenship, address, and account verification.',
      tech: ['Java', 'Spring AI', 'GPT-4o', 'RAG', 'Pg Vector', 'REST APIs'],
      github: 'https://github.com/akshitk20/embedded-chat-service',
      demo: '#'
    },
    {
      title: 'Cross Border Payments',
      description: 'Payment processing system enabling customers to make cross-border payments via CSV files with multi-currency support. Implemented state machines for payment and FX processing workflows.',
      tech: ['Java', 'Spring Boot', 'Spring State Machine', 'GCP', 'Terraform'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Benefits Platform',
      description: 'Multi-tenant microservice platform used by customers like RBS and Vodafone. Built workflow orchestrator for customer ingestion with Kafka messaging and GraphQL APIs.',
      tech: ['Java', 'Kafka', 'GraphQL', 'REST APIs', 'Microservices'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.demo} className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
