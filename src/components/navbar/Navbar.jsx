import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navbarCollapse = useRef(null);

  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      document.querySelector('.navbar-toggler')?.click();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarCollapse.current && 
          !navbarCollapse.current.contains(event.target) &&
          !event.target.classList.contains('navbar-toggler') &&
          window.innerWidth < 992 &&
          document.querySelector('.navbar-collapse.show')) {
        closeNavbar();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="nav-comp">
      <nav className="navbar navbar-expand-lg fixed-top px-2" data-bs-theme="dark">
        <div className="container">
          <NavLink to="" className="navbar-brand">
            Prajval's Portfolio
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03" ref={navbarCollapse}>
            <ul className="navbar-nav w-100 mb-2 mb-lg-0  justify-content-center">
              <li className="nav-item mx-3">
                <NavLink to="/" className="nav-link" onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/certifications" className="nav-link" onClick={closeNavbar}>
                  Certifications
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/projects" className="nav-link" onClick={closeNavbar}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/internships" className="nav-link" onClick={closeNavbar}>
                  Internships
                </NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button
                className="btn"
                style={{
                  backgroundColor: "#dba622",
                  color: "#fff",
                  fontWeight: "600",
                  width: "fit-content",
                }}
                onClick={() =>
                  window.open("/Prajval_Gandhi_Resume.pdf", "_blank")
                }
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
