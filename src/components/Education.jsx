import './Education.css';

const BASE_URL = import.meta.env.BASE_URL;

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-logo">
            <img src={`${BASE_URL}logos/Birla_Institute_of_Technology_Mesra.png`} alt="BIT Mesra" />
          </div>
          <div className="education-content">
            <div className="education-header">
              <div className="education-info">
                <h3>Birla Institute of Technology, Mesra</h3>
                <span className="education-degree">Bachelor of Technology (B.Tech) - Computer Science</span>
              </div>
              <div className="education-meta">
                <span className="education-period">2015 – 2019</span>
                <span className="education-location">Ranchi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="certification-section">
          <h3 className="certification-title">Certifications & Achievements</h3>

          <div className="certification-card">
            <div className="certification-logo gcp">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-3 3 1.5 1.5L12 18l1.5 1.5L15 18l-3-3z"/>
                <path d="M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/>
                <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </div>
            <div className="certification-content">
              <h4>GCP Associate Cloud Engineer</h4>
              <span className="certification-issuer">Google Cloud Platform • 2024</span>
              <p>Validates technical expertise in developing and maintaining applications on GCP platform</p>
            </div>
          </div>

          <div className="certification-card hackathon">
            <div className="certification-logo hackathon-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="certification-content">
              <h4>Bank of API Hackathon</h4>
              <span className="certification-issuer">NatWest Group • 2024</span>
              <p>Built "Financial Guru" - an AI-powered chatbot for loan and mortgage eligibility using RAG, GPT-4o, and NatWest APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
