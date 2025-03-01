import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="side-nav-container">
      <button className="menu-trigger" onClick={toggleMenu}>
        <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
      </button>

      <nav className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className="nav-content">
          <div className="nav-header">
            <span className="nav-brand">
              Prajval
              <span className="brand-icon">✨</span>
            </span>
          </div>
          
          <ul className="nav-links">
            <li>
              <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/certifications" onClick={toggleMenu}>Certifications</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={toggleMenu}>Experience</NavLink>
            </li>
          </ul>

          <div className="nav-footer">
            <button
              className="resume-btn"
              onClick={() => window.open("/Prajval_Gandhi_Resume.pdf", "_blank")}
            >
              Get Resume
            </button>
          </div>
        </div>
      </nav>
      
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}
