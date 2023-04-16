import React from "react";

export default function Internships() {
  return (
    <div className="component container">
      <div className="projects">
        <h2 className="text-light heading">
          <span>Internships / Experiences</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 mt-3 mb-5">
          <div className="col">
            <div
              className="card bg-dark text-light mb-3"
              style={{ maxWidth: "540px" }}
            >
              <div className="card-body">
                <div className="row row-cols-2">
                  <div className="col">
                    <img src="/rbtechLogo.png" alt="" width={200} />
                  </div>
                  <div className="col">
                    <h5 className="card-title">PHP Developer - Intern</h5>
                  </div>
                </div>
                <ul className="card-text text-justify mt-3">
                  <li> Developed a web-based <b>"Notice Management System"</b> during my internship using PHP language.</li><li> Gained expertise in PHP programming language while
                    working on a live project during my internship. </li>
                </ul>

                <p className="card-text">
                  <span>
                    <span className="badge bg-info p-1 mx-1">HTML</span>
                    <span className="badge bg-success p-1 mx-1">CSS</span>
                    <span className="badge bg-danger p-1 mx-1">Bootstrap</span>
                    <span className="badge bg-light text-dark p-1 mx-1">
                      JavaScript
                    </span>
                    <span className="badge bg-primary p-1 mx-1">PHP</span>
                    <span className="badge bg-warning p-1 mx-1">phpMyAdmin</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card bg-dark text-light mb-3"
              style={{ maxWidth: "540px" }}
            >
              <div className="card-body">
                <div className="row row-cols-2">
                  <div className="col">
                    <img
                      src="/pixelstatLogo.jpg"
                      alt=""
                      width={200}
                      height={40}
                    />
                  </div>
                  <div className="col">
                    <h5 className="card-title">Web Developer - Intern</h5>
                  </div>
                </div>
                <ul className="card-text text-justify mt-3">
                  <li>Bug fixing in earlier developed project.
                  </li><li>I designed and developed a custom ERP system for a
                    company, streamlining their data management, business logic implementation, and report generation
                    processes.
                  </li>
                </ul>
                <p className="card-text">
                  <span>
                    <span className="badge bg-info p-1  mx-1">HTML</span>
                    <span className="badge bg-success p-1  mx-1">CSS</span>
                    <span className="badge bg-danger p-1  mx-1">Bootstrap</span>
                    <span className="badge bg-light text-dark p-1  mx-1">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary p-1  mx-1">Ajax</span>
                    <span className="badge bg-primary p-1  mx-1">Flask</span>
                    <span className="badge bg-primary p-1  mx-1">Django</span>
                    <span className="badge bg-warning p-1  mx-1">MySQL</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
