import './Navbar.css';

const BASE_URL = import.meta.env.BASE_URL;

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">AK</a>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href={`${BASE_URL}resume.pdf`} download className="navbar-resume">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
