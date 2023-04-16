import React from "react";
import './about.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container text-light">
        <div className="section-title">
          <h1 className="text-light heading">
            <span>About</span>
          </h1>
          <p className="mt-3">
            Hello, I'm a student of Web Development and
            Machine Learning. I have a deep interest in these
            fields and am dedicated to developing my skills.
            I believe that technology has the potential to
            make a positive impact on society, and I'm eager
            to be a part of that change.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 aos-init aos-animate about-img-container" data-aos="fade-right">
            {" "}
            <img src="paju.png" className="img-fluid about-img" alt="" />
          </div>
          <div
            className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate"
            data-aos="fade-left"
          >
            <h3>Web Developer &amp; AIML Enthusiast</h3>
            <hr style={{ height: "5px", backgroundColor: "#fff" }} />
            <p className="fst-italic">
              {" "}
              Designing & Developing Dynamic Websites with a Focus on User
              Experience
            </p>
            <div className="row">
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
                    <strong>Age:</strong> <span>20</span>
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
            <p>
              {" "}
              I am a Full Stack Web Developer with a passion for creating
              dynamic and engaging websites and web applications. With a strong
              background in front-end technologies such as HTML, CSS, and
              JavaScript, as well as frameworks like Bootstrap and React, I am
              able to design and develop user interfaces that are both visually
              appealing and easy to use. I also have experience working with
              back-end technologies such as Django, Flask and PHP, and am
              well-versed in database management systems like MySQL and MongoDB.
              My goal is to create functional, scalable, and secure web
              solutions that provide a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
