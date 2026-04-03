import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm always open to discussing new projects, opportunities, or just having a chat about technology.
        </p>
        <div className="contact-links">
          <a href="mailto:akshitkhatri.20@gmail.com" className="contact-link">
            Email
          </a>
          <a href="https://github.com/akshitk20" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="tel:+918851916194" className="contact-link">
            Phone
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
