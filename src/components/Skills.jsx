import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'C']
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'Spring Batch', 'Spring State Machine', 'Spring AI', 'SAP CAP', 'CDS']
    },
    {
      title: 'SAP Technologies',
      skills: ['SAP BTP', 'SAP CAP', 'SAP DWC', 'CDS']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'SAP HANA', 'Pg-vector']
    },
    {
      title: 'Cloud & Infra',
      skills: ['GCP', 'GKE', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      title: 'Messaging & Tools',
      skills: ['Kafka', 'Google Pub/Sub', 'Gradle', 'Maven', 'JUnit', 'Mockito']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
