import './Hero.css';

const BASE_URL = import.meta.env.BASE_URL;

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-photo">
          <img src={`${BASE_URL}photo.jpg`} alt="Akshit Khatri" />
        </div>
        <h1>Akshit Khatri</h1>
        <h2>Software Engineer</h2>
        <p>6+ years of experience in backend development for cloud using Java, Spring Boot & GCP</p>
        <div className="hero-alma-mater">
          <img src={`${BASE_URL}logos/Birla_Institute_of_Technology_Mesra.png`} alt="BIT Mesra" />
          <span>BIT Mesra, Ranchi</span>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">6+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">1</span>
            <span className="hero-stat-label">GCP Certification</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
