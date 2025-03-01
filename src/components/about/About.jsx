import React from "react";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="text-light">
      <div className="container">
        <div className="section-header">
          <h1 className="text-light heading mb-4" data-aos="fade-up">
            <span>About Me</span>
          </h1>
          <p className="text-secondary" data-aos="fade-up" data-aos-delay="100">
            Software Engineer & Full Stack Developer
          </p>
          <hr class="w-25 mx-auto" style={{borderTop: "3px solid rgb(248, 249, 250)"}}></hr>
        </div>

        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          <div className="profile-image">
            <img
              src="paju3.jpg"
              alt="Profile"
              className="main-image"
            />
            <div className="image-backdrop"></div>
          </div>

          <div className="profile-info">
            <h3 className="title">Building Digital Experiences</h3>
            
            <div className="description">
              <p>
                Specialized in modern web technologies and full-stack development, 
                with a focus on creating scalable and innovative solutions.
              </p>
              <p>
                Core expertise in Next.js, React, Python, Django, and Flask, 
                with strong experience in backend architecture and cloud computing.
              </p>
            </div>

            <div className="skills-highlight">
              <div className="skill-category">
                <h4>Frontend</h4>
                <p>React.js, Next.js, TypeScript</p>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <p>Python, Django, Flask, MySQL</p>
              </div>
              <div className="skill-category">
                <h4>Other</h4>
                <p>Cloud Computing, CI/CD, Git</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/paju3125" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/prajval-gandhi-648504211/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:prajvalgandhi483@gmail.com">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
