import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'SAP',
      role: 'Software Engineer',
      period: 'Oct 2025 – Present',
      location: 'Bangalore',
      description: 'Working on SAP BTP, CAP framework, and cloud-native solutions using Java and CDS.',
      tech: ['Java', 'SAP CAP', 'SAP BTP', 'CDS', 'HANA']
    },
    {
      company: 'NatWest Group',
      role: 'Software Engineer',
      period: 'Sept 2023 – Oct 2025',
      location: 'Gurgaon',
      description: 'Built cross-border payment system with multi-currency support. Implemented state machines for payment and FX processing. Created GCP infrastructure using Terraform.',
      tech: ['Java', 'Spring Boot', 'Spring State Machine', 'GCP', 'Terraform', 'Pub/Sub']
    },
    {
      company: 'Lenskart',
      role: 'Software Engineer',
      period: 'Apr 2022 – Sept 2023',
      location: 'Gurgaon',
      description: 'Developed "Buy 1 Get 2nd Later" feature. Helped migrate communication system to in-house platform. Mentored freshers and resolved high-priority production issues.',
      tech: ['Java', 'Spring Boot', 'Kafka', 'MySQL', 'REST APIs']
    },
    {
      company: 'Impetus Technologies',
      role: 'Software Engineer',
      period: 'Sept 2021 – Apr 2022',
      location: 'Remote',
      description: 'Updated Log4j versions across multiple services to fix critical vulnerability in the cashmachine application.',
      tech: ['Java', 'Log4j', 'Microservices']
    },
    {
      company: 'Tavisca',
      role: 'Software Engineer',
      period: 'Jun 2019 – Sept 2021',
      location: 'Pune',
      description: 'Designed multi-tenant Benefits platform used by RBS and Vodafone. Built workflow orchestrator for customer ingestion. Worked on Kafka messaging and GraphQL APIs.',
      tech: ['Java', 'Kafka', 'GraphQL', 'REST APIs', 'Microservices']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-company-info">
                  <h3>{exp.company}</h3>
                  <span className="experience-role">{exp.role}</span>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
