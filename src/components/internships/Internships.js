import React, { useEffect } from "react";
import AOS from "aos";
import "./internship.css"

export default function Internships() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="component container">
      <div className="projects">
        <h2 className="text-light heading" data-aos="fade-up" data-aos-duration="500">
          <span>Internships / Experiences</span>
        </h2>

        <div className="row row-cols-1 row-cols-lg-2 g-4 mt-3 mb-5 aos-init aos-animate" >
          <div className="col" data-aos="zoom-in" data-aos-duration="1000">
            <div
              className="card bg-dark text-light mb-3"
            >
              <div className="card-body">
                <div>
                  <img src="/rbtechLogo.png" alt="" width={200} />
                  <h5 className="card-title mt-3">PHP Developer - Intern</h5>
                </div>
                <ul className="card-text text-justify mt-3">
                  <li> Developed a web-based <b>"Notice Management System"</b> during my internship using PHP language.</li><li> Gained expertise in PHP programming language while
                    working on a live project during my internship. </li>
                </ul>
              </div>

              <div className="card-footer my-2">
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
          <div className="col" data-aos="zoom-in" data-aos-duration="1000">
            <div
              className="card bg-dark text-light mb-3"
            >
              <div className="card-body">
                <div>
                  <img
                    src="/pixelstatLogo.jpg"
                    alt=""
                    width={200}
                    height={40}
                  />
                  <h5 className="card-title mt-3">Web Developer - Intern</h5>
                </div>
                <ul className="card-text text-justify mt-3">
                  <li>Bug fixing in earlier developed project.
                  </li><li>I designed and developed a custom ERP system for a
                    company, streamlining their data management, business logic implementation, and report generation
                    processes.
                  </li>
                </ul>
              </div>

              <div className="card-footer my-2">
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
          <div className="col" data-aos="zoom-in" data-aos-duration="1000">
            <div
              className="card bg-dark text-light mb-3"
            >
              <div className="card-body">
                <div>
                  <h5>
                    <strong>Result Software Development Pvt. Ltd.</strong>
                  </h5>
                  <strong><h6 className="card-title mt-3">Lead Project Coordinator - Internship
                  </h6></strong>
                </div>
                <ul className="card-text text-justify mt-3">
                  <li>Working on an "Automation in Recruitment Process" project.
                  </li><li>Leading the team of interns to complete the project.
                  </li>
                </ul>
              </div>



              <div className="card-footer my-2">
                <p className="card-text">
                  <span>
                    <span className="badge bg-info p-1  mx-1">Team Leadership</span>
                    <span className="badge bg-success p-1  mx-1">ReactJS</span>
                    <span className="badge bg-danger p-1  mx-1">Flask</span>
                    <span className="badge bg-light text-dark p-1  mx-1">
                      Machine Learning
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
