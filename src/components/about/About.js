import React from "react";
import './about.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container text-light">
        <div className="section-title">
          <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="200">
            <span>About</span>
          </h1>
          <p className="text-justify mt-3" data-aos="zoom-in" data-aos-duration="200">
            Hello, I'm an aspiring IT student passionate about Web Development and Machine Learning. Eager to contribute and embrace the transformative potential of technology.
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 about-img-container" data-aos="zoom-out-right" data-aos-duration="200">
            {" "}
            <img src="paju.png" className="img-fluid about-img" alt="" />
          </div>
          <div
            className="col-lg-8 pt-4 pt-lg-0 content"

          >
            <h3 data-aos="fade-left" data-aos-duration="200">Web Developer &amp; AIML Enthusiast</h3>
            <hr style={{ height: "5px", backgroundColor: "#fff" }} data-aos="fade-right" data-aos-duration="200" />
            <p className="fst-italic">
              {" "}
              Designing & Developing Dynamic Websites with a Focus on User
              Experience
            </p>
            <div className="row" data-aos="fade-left" data-aos-duration="200">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>31 May 2002</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+919665656267</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Pune, India</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>{new Date().getFullYear() - 2002}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong> <span>BTech (2024)</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong>{" "}
                    <span>prajvalgandhi483@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Status:</strong> <span>Open for Work</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-justify" data-aos="zoom-in" data-aos-duration="100">
              {" "}
              Full Stack Web Developer adept in HTML, CSS, JavaScript, Bootstrap, React, Django, Flask, PHP, MySQL, and MongoDB. Focused on crafting user-friendly interfaces and scalable, secure web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
