import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="component container">
      <div className="projects">
        <h2 className="text-light heading">
          <span>Projects</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 mt-3 mb-5">
          <div className="col">
            <div className="card   text-light text-justify mb-3">
              <div className="row g-0">
                <div className="col-md-5">
                  <video width="250" height="250" controls>
                    <source src="/vid/My Shows.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      Online Multiplex Ticket Booking System
                    </h5>
                    <p className="card-text">
                      A web-based project. Similar to bookmyshow website with
                      some additional innovative features.
                      <br />
                      Facility to store the information of the new customer,
                      different types of movie show timing, ticket rates of
                      different types on show class etc.
                      <br />
                      Ability to the admin to add or remove slides of slider,
                      add/update/delete movies, apply or remove social
                      distancing to multiplexes, apply coupon codes to users
                      <br />
                      <br /> Modules : <br />
                      1. User <br />
                      2. Admin
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
                        <span className="badge bg-primary p-1">PHP</span>
                        <span className="badge bg-warning p-1">phpMyAdmin</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card   text-light mb-3">
              <div className="row g-0">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="btn btn-light btn-outline-primary"
                    style={{
                      width: "fit-content",
                      height: "fit-content",
                      fontWeight: "700",
                    }}
                  >
                    <a
                      href="/WMS_Outputs.pdf"
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      View Project
                    </a>
                  </button>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Wage Worker Management System{" "}
                      <span className="badge bg-success p-1">Sponsored</span>
                    </h5>
                    <p className="card-text">
                      The project “Daily wage worker management system” aims to
                      keep daily based records of wage workers working in
                      various departments. This system maintains the information
                      about number of workers entering and exiting the plant and
                      the particular department and their entry and exit time
                      collected from the security and supervisors. The reports
                      generated from the data stored by security and supervisors
                      will be available to the plant head, so the frauds/cheats
                      at the supervisors/manager level can be detected easily.
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
                        <span className="badge bg-primary p-1">Django</span>
                        <span className="badge bg-warning p-1">MySQL</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card   text-light mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="..."
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">ERP - Feedback System</h5>
                    <p className="card-text">
                      Developed student feedback system, in which students can
                      give feedback to various professors.
                      <br />
                      Mapped the whole system with institute's timetable to make
                      dynamic feedback form allocation.
                      <br />
                      Incorporated CSV to database entries for input of large
                      records. Worked with feedback Analyzer for admin panel.
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
                        <span className="badge bg-primary p-1">PHP</span>
                        <span className="badge bg-warning p-1">mariaDB</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card   text-light mb-3">
              <div className="row g-0">
                <div className="col-md-5">
                  <video width="250" height="250" controls>
                    <source src="/vid/PixelStat ERP.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      PixelStat ERP System{" "}
                      <span className="badge bg-success p-1">Sponsored</span>
                    </h5>
                    <p className="card-text">
                      Flask Project developed for Pixelstat eSolutions
                      Development Pvt. Ltd. <br />
                      <br />
                      Users: Admin and Manager. <br />
                      Purpose: Handling the membership details. <br />
                      <br />
                      <ul>
                        <li>
                          Retrieving data from excel files and storing in
                          database.{" "}
                        </li>
                        <li>Able to add/edit/delete data.</li>
                        <li>
                          Apply business logics and make reports available to
                          download.
                        </li>
                      </ul>
                    </p>
                    <p className="card-text">
                      <span>
                        <span className="badge bg-info p-1">HTML</span>
                        <span className="badge bg-success p-1">CSS</span>
                        <span className="badge bg-danger p-1">Bootstrap</span>
                        <span className="badge bg-light text-dark p-1">
                          JavaScript
                        </span>
                        <span className="badge bg-secondary p-1">Excel</span>
                        <span className="badge bg-primary p-1">Flask</span>
                        <span className="badge bg-warning p-1">SQL</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
