import React from 'react';
import './resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container text-light">
        <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="300">
          <span>Resume</span>
        </h1>
        <button
          className="btn btn-warning mt-3 px-5 rounded-pill shadow-lg"
          onClick={() => window.open("/Prajval_Gandhi_Resume.pdf", "_blank")}
          data-aos="zoom-out" data-aos-duration="300"
        >
          Download Resume
        </button>
        
        <div className="row text-justify mt-4" data-aos="fade-up" data-aos-duration="300">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Prajval Gandhi</h4>
              <p>
                <em>Software Engineer with expertise in full-stack development, specializing in Next.js, React, Python, and Django. Experienced in integrating Generative AI into applications, optimizing performance, and building scalable web solutions.</em>
              </p>
              <ul className="list-unstyled">
                <li><i className="fas fa-map-marker-alt"></i> Pimpri-Chinchwad, Maharashtra, India - 411061</li>
                <li><i className="fas fa-phone"></i> +91-9665656267</li>
                <li><i className="fas fa-envelope"></i> prajval.gandhi@mitaoe.ac.in</li>
                <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/prajval-gandhi-648504211/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech. - Information Technology</h4>
              <h5>2020 - 2024</h5>
              <p className='name-title'><em>MIT Academy of Engineering, Pune</em></p>
              <p>CGPA: 9.37 / 10</p>
            </div>
            <div className="resume-item">
              <h4>Diploma - Computer Engineering</h4>
              <h5>2018 - 2021</h5>
              <p className='name-title'><em>Government Polytechnic Ahmednagar</em></p>
              <p>Percentage: 94.69%</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>Jul 2024 - Present</h5>
              <p className='name-title'><em>Ignite Solutions</em></p>
              <ul>
                <li>Developed AI Chatbot for querying internal teamwork details.</li>
                <li>Designed UI for a large-scale digital pathology platform using Next.js and React.</li>
                <li>Contributed to the development and optimization of the Chaturji AI-based web application as part of a team.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Software Engineer Intern</h4>
              <h5>Jan 2024 - Jun 2024</h5>
              <p className='name-title'><em>Ignite Solutions</em></p>
              <ul>
                <li>Managed backend for "Onboarding Automation" application using Django and MySQL.</li>
                <li>Integrated GPT-4 and Gemini 1.5 via APIs for LLM enhancements.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Intern</h4>
              <h5>Jun 2022 - Oct 2022</h5>
              <p className='name-title'><em>PixelStat eSolutions</em></p>
              <ul>
                <li>Fixed bugs in existing projects and improved system stability.</li>
                <li>Developed a web application for "AKHIL BHARATIYA MARATHI CHITRAPAT MAHAMANDAL."</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
