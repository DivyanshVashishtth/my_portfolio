
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          Divyansh<span>.</span>
        </Link>

        <p className="footer-description">
          Building my skills, one project at a time.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Divyansh. All rights reserved.
          </p>

          <a href="#root">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
