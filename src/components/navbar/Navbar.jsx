import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-comp">
      <nav
        className="navbar navbar-expand-lg fixed-top px-2"
        data-bs-theme="dark"
      >
        <div className="container">
          <NavLink to="" className="navbar-brand">
            Prajval's Portfolio
          </NavLink>
          {/* <a className="navbar-brand" href='/'>Prajval's Portfolio</a> */}
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
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav w-100 mb-2 mb-lg-0  justify-content-center">
              <li className="nav-item mx-3">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/certifications" className="nav-link">
                  Certifications
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/projects" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/internships" className="nav-link">
                  Internships
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink to="/graduation-book" className="nav-link">
                  Graduation Book
                </NavLink>
              </li>
              {/* <li className="nav-item">
                  <Link className="nav-link" to="#footer">
                    Reach Me
                  </Link>
                </li> */}
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
