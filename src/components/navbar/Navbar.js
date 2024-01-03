import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./navbar.css";
import Profile from "../profile/Profile";
import Internships from "../internships/Internships";
import Projects from "../projects/Projects";
import Certifications from "../certifications/Certifications";

export default function Navbar() {
  return (
    <Router>
      <div className="nav-comp">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary navbar-dark fixed-top"
          style={{ backgroundColor: "rgb(29,29,29)" }}
        >
          <div className="container-fluid">
            <Link to="" className="navbar-brand">
              Prajval's Portfolio
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03" >
              <ul className="navbar-nav w-100 mb-2 mb-lg-0  justify-content-center">
                <li className="nav-item mx-3">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to="/certifications" className="nav-link">
                    Courses & Certifications
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link to="/internships" className="nav-link">
                    Internships
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#footer">
                    Reach Me
                  </Link>
                </li> */}
              </ul>
              <button
                className="btn" style={{ backgroundColor: "#FB8122", color: "#fff", fontWeight: "600" }}
                onClick={() =>
                  (window.location.href = "/Prajval_Gandhi_Resume.pdf")
                }
              >
                My Resume
              </button>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="" element={<Profile />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="projects" element={<Projects />} />
          <Route path="internships" element={<Internships />} />
        </Routes>
      </div>
    </Router>
  );
}
