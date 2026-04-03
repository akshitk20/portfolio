import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a Software Engineer with 6+ years of experience in backend development for cloud using Java.
            Currently working at SAP, I specialize in developing scalable microservices and
            cloud-native solutions using Java, Spring Boot, and GCP.
          </p>
          <p>
            Previously, I worked at NatWest Group on cross-border payment systems, at Lenskart building
            customer-facing features, and at Tavisca designing multi-tenant platforms. I hold a GCP
            Associate Cloud Engineer certification and a B.Tech in Computer Science from BIT Mesra.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
