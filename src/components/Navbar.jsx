import './Navbar.css';

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
          <a href="/resume.pdf" download className="navbar-resume">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
