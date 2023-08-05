import React from 'react'
import './resume.css'

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container text-light">

        <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="500">
          <span>Resume</span>
        </h1>
        <button
          className="btn btn-outline-light mt-3 px-5"
          onClick={() =>
            (window.location.href = "/Prajval's Resume.pdf")
          }
          data-aos="zoom-out" data-aos-duration="2000"
        >
          Download Resume
        </button>
        <div className="row text-justify" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Prajval Gandhi</h4>
              <p>
                <em>Full Stack Developer with 3+ years of hands-on experience designing, developing, and implementing applications and
                  solutions using a range of technologies and programming languages. Seeking to leverage broad development
                  experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
                </em>
              </p>
              <ul>
                <li>Pune, Maharashtra, India</li>
                <li>9665656267</li>
                <li>prajvalgandhi483@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology (IT)</h4>
              <h5>2021 - 2024</h5>
              <p><em>MIT Academy of Engineering, Alandi, Pune</em></p>
              <p>Major : <em>Information Technology</em> </p>
              <p>Minor : <em>AIML</em> </p>
              <p>CGPA : <em>9.31</em> </p>
            </div>
            <div className="resume-item">
              <h4>Diploma</h4>
              <h5>2018 - 2021</h5>
              <p><em>Government Polytechnic Ahmednagar</em></p>
              <p>Major : <em>Computer Engineering</em> </p>
              <p>Percentage : <em>94.69%</em> </p>
            </div>
            <div className="resume-item">
              <h4>SSC</h4>
              <h5>2018</h5>
              <p><em>Dr. N. J. Paulbudhe M. V.</em></p>
              <p>Percentage : <em>89.4%</em> </p>
            </div>
          </div>
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Internship / Work Experience</h3>
            <div className="resume-item">
              <h4>Web Development and Design Intern</h4>
              <h5>January 2023 - February 2024</h5>
              <p><em>Oasis Infobyte </em></p>
              <ul>
                <li>Task 1 - Responsive landing page for a website.</li>
                <li>Task 2 - Building Your Online Presence: Developing a Portfolio to Impress Prospective Employers.</li>
                <li>Task 3 - Design and Implementation of a Multi-unit Temperature Conversion Application for Celsius, Fahrenheit, and Kelvin</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Web Developer</h4>
              <h5>Jul 2022 - Sept 2022</h5>
              <p><em>PixelStat eSolutions Development Pvt. Ltd.</em></p>
              <ul>
                <li>Bug fixing in earlier developed project.</li>
                <li>I designed and developed a custom ERP system for a
                  company, streamlining their data management, business logic implementation, and report generation processes.

                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Web Developer Intern</h4>
              <h5>June 2020 - Aug 2020</h5>
              <p><em>R B Tech Services </em></p>
              <ul>
                <li>Learned PHP, Bootstrap, phpMyAdmin database</li>
                <li>Developed a project which was based on one of company's web
                  based live application which is 'Notice Management System' which
                  is developed in PHP.
                </li>
              </ul>
            </div>
            <h3 className="resume-title">Key Skills</h3>
            <div className="resume-item pb-0">
              {/* <h4>Prajval Gandhi</h4> */}

              <ul>
                <li>Well Known Languages: C++, JavaScript, Python, Java, PHP</li>
                <li>Hands on practice of MySQL and MongoDB</li>
                <li>Frontend Development skills: HTML | CSS | JS | Bootstrap | ReactJS</li>
                <li>Familiar with Django, Flask frameworks</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
