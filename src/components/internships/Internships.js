import React from "react";

export default function Internships() {
  return (
    <div className="component container">
      <div className="projects">
        <h1 className="text-light heading">Internships / Experiences</h1>

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
                <p className="card-text mt-3">
                  In the journey of Internship i learned PHP language and worked
                  on a project which was based on one of company's web based
                  live application titled
                  <b>Notice Management System</b> which is developed using PHP
                  and phpMyAdmin.
                </p>
                <p className="card-text">
                  <span>
                    <span className="badge bg-info p-1">HTML</span>
                    <span className="badge bg-success p-1">CSS</span>
                    <span className="badge bg-danger p-1">Bootstrap</span>
                    <span className="badge bg-light text-dark p-1">
                      JavaScript
                    </span>
                    <span className="badge bg-primary p-1">PHP</span>
                    <span className="badge bg-warning p-1">phpMyAdmin</span>
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
                <p className="card-text mt-3">
                  As a first task, i've successfully build an ERP for company
                  from which they can easily handle their excel file data, apply
                  business logics and generate the reports.
                </p>
                <p className="card-text">
                  <span>
                    <span className="badge bg-info p-1">HTML</span>
                    <span className="badge bg-success p-1">CSS</span>
                    <span className="badge bg-danger p-1">Bootstrap</span>
                    <span className="badge bg-light text-dark p-1">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary p-1">Ajax</span>
                    <span className="badge bg-primary p-1">Flask</span>
                    <span className="badge bg-primary p-1">Django</span>
                    <span className="badge bg-warning p-1">MySQL</span>
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
