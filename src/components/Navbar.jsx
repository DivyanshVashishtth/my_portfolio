
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Divyansh<span>.</span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="navigation-menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav
          id="navigation-menu"
          className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className="contact-link"
            onClick={closeMenu}
          >
            Contact Me <span>↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
