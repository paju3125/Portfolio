import React from 'react'
import './resume.css'

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container text-light">

        <h1 className="text-light heading" data-aos="fade-up" data-aos-duration="300">
          <span>Resume</span>
        </h1>
        <button
          className="btn btn-outline-light mt-3 px-5"
          onClick={() =>
            (window.open("/Prajval_Gandhi_Resume.pdf", "_blank"))
          }
          data-aos="zoom-out" data-aos-duration="300"
        >
          Download Resume
        </button>
        <div className="row text-justify" data-aos="fade-up" data-aos-duration="300">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Prajval Gandhi</h4>
              <p>
                <em>Results-driven IT professional with a strong foundation in Python, C++, Java, and web development technologies. Demonstrated leadership as a Lead Coordinator and a Full Stack Intern. Passionate about leveraging technology to create efficient solutions.

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
              <p>Minor : <em>AI/ML</em> </p>
              <p>CGPA : <em>9.25</em> </p>
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
            <h3 className="resume-title">Internship</h3>
            <div className="resume-item">
              <h4>Lead Coordinator</h4>
              <h5>Jun 2023 - Aug 2023
              </h5>
              <p><em>Result Software Development </em></p>
              <ul>
                <li>Led intern team in completing "Automation in Recruitment Process" project.
                </li>
                <li>Utilized Flask, ReactJS, and Machine Learning for efficient project execution.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Web Developer</h4>
              <h5>Jul 2022 - Sept 2022</h5>
              <p><em>PixelStat eSolutions Development Pvt. Ltd.</em></p>
              <ul>
                <li>Remedied project bugs, fortifying system stability.</li>
                <li>Engineered a web app for "AKHIL BHARATIYA MARATHI CHITRAPAT MAHAMANDAL."</li>
                <li>Enhanced data management, business logic, and reporting using Flask, SQL, and JavaScript.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Trainee PHP Developer</h4>
              <h5>June 2020 - Aug 2020</h5>
              <p><em>R B Tech Services </em></p>
              <ul>
                <li>Engineered a web-based "Notice Management System" using PHP language.
                </li>
                <li>Acquired proficiency in PHP programming through hands-on experience on a live project during the internship.
                </li>
              </ul>
            </div>
            <h3 className="resume-title">Key Skills</h3>
            <div className="resume-item pb-0">
              {/* <h4>Prajval Gandhi</h4> */}

              <ul>
                <li>Well Known Languages: C++, Python, JavaScript, Java, PHP</li>
                <li>Hands on practice of MySQL and MongoDB</li>
                <li>Frontend Development skills: HTML | CSS | JS | Bootstrap | ReactJS</li>
                <li>Familiar with Flask, Django frameworks</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
