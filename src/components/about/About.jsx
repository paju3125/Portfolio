import React from "react";
import "./about.css";
export default function About() {
  return (
    <section id="about" className="text-light">
      <div className="container">
        <div className="" >
          <h1
            className="text-light heading mb-4"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <span>About Me</span>
          </h1>{" "}
          <p className="text-secondary fs-5 text-center">
            Innovative Software Engineer & Full Stack Developer
          </p>
          <hr
            className="w-25 mx-auto"
            style={{ borderTop: "3px solid #f8f9fa" }}
          />
        </div>

        <div className="row align-items-center" style={{zIndex: 1}}>
          <div
            className="col-lg-4 text-center mb-4"
            data-aos="zoom-out-right"
            data-aos-duration="500"
          >
            <div className="position-relative d-inline-block photo-frame"
>
              <img
                src="paju3.jpg"
                className="img-fluid rounded-circle"
                alt="Profile"
                width="300"
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <div className="position-absolute top-0 start-0 translate-middle bg-warning rounded-circle p-2"></div>
              <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-2" style={{ transform: 'translate(50%, 50%)' }}></div>
            </div>
          </div>

          <div
            className="col-lg-8"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <h3 className="fw-semibold text-warning">
              Software Engineer | Full Stack Developer
            </h3>
            <hr
              className="my-3 bg-light"
              style={{ height: "4px", border: "none" }}
            />
            <p className="lead text-secondary">
              Passionate about **Next.js, React, Python, Django, and Flask**.
              Specialized in scalable web solutions, performance optimization,
              and **Generative AI integration**. Expertise in **backend
              architecture, API integrations, and cloud computing**.
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled fs-5">
                  <li>
                    <i className="bi bi-calendar-check text-warning"></i>{" "}
                    <strong>Birthday:</strong> 31 May 2002
                  </li>
                  <li>
                    <i className="bi bi-geo-alt text-danger"></i>{" "}
                    <strong>City:</strong> Pune, India
                  </li>
                  <li>
                    <i className="bi bi-phone text-success"></i>{" "}
                    <strong>Phone:</strong> +91-9665656267
                  </li>
                  <li>
                    <i className="bi bi-envelope text-primary"></i>{" "}
                    <strong>Email:</strong> prajvalgandhi483@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled fs-5">
                  <li>
                    <i className="bi bi-award text-info"></i>{" "}
                    <strong>Degree:</strong> B.Tech - IT (2024)
                  </li>
                  <li>
                    <i className="bi bi-github text-secondary"></i>{" "}
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/paju3125"
                      className="text-light text-decoration-none"
                    >
                      github.com/paju3125
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-briefcase text-warning"></i>{" "}
                    <strong>Status:</strong> Open for Work
                  </li>
                  <li>
                    <i className="bi bi-linkedin text-primary"></i>{" "}
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/prajval-gandhi-648504211/"
                      className="text-light text-decoration-none"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="text-center mt-4">
              <a
                href="/resume.pdf"
                className="btn btn-outline-warning btn-lg px-4"
              >
                Download Resume
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
