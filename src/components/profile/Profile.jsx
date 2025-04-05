import React from "react";
import "./profile.css";
import { useEffect } from "react";
import About from "../about/About";
import Skill from "../skills/Skill";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects"; // Updated import

export default function Profile() {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  useEffect(() => {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--accent-cyan)}";
    document.body.appendChild(css);
    
  }, []);

  return (
    <>
      <section id="hero" className="advanced-hero">
        {/* Dynamic background elements */}
        <div className="hero-bg">
          <div className="gradient-orb orb1"></div>
          <div className="gradient-orb orb2"></div>
          <div className="particles-container"></div>
          <div className="grid-overlay"></div>
        </div>
        
        <div className="hero-content-wrapper">
          <div className="content-intro" data-aos="fade-up" data-aos-duration="800">
            <div className="intro-badge">
              <span className="badge-icon">👨‍💻</span>
              <span className="badge-text">Software Engineer</span>
            </div>
            
            <h1 className="glitch-text" data-text="Prajval Gandhi">Prajval Gandhi</h1>
            
            <div className="tagline">
              <p className="tag-prefix">I'm a passionate </p>
              <span className="typewrite dynamic-text"
                data-period="2000"
                            data-type='[ "Software Engineer.", "React Developer.", "Python Developer", "Full Stack Developer", "ML Enthusiat." ]'>
              </span>
            </div>
          </div>

          <div className="code-terminal" data-aos="fade-up" data-aos-delay="300">
            <div className="terminal-header">
              <div className="window-controls">
                <span className="control close"></span>
                <span className="control minimize"></span>
                <span className="control maximize"></span>
              </div>
              <div className="terminal-title">dev-profile.jsx</div>
            </div>

            <div className="terminal-body">
              <div className="terminal-line prompt">
                <span className="prompt-marker">λ</span>
                <span className="command">portfolio --show-profile</span>
              </div>
              
              <div className="terminal-response">
                <div className="code-block">
                  <div className="code-line comment" data-aos="fade-right" data-aos-delay="500">
                    {'// Welcome to my digital workspace'}
                  </div>
                  
                  <div className="code-line" data-aos="fade-right" data-aos-delay="700">
                    <span className="keyword">const&nbsp;</span> <span className="variable">developer</span> = {"{"}
                  </div>
                  
                  <div className="code-line indented" data-aos="fade-right" data-aos-delay="900">
                    <span className="property">name:</span> <span className="string">"Prajval Gandhi"</span>,
                  </div>
                  
                  <div className="code-line indented" data-aos="fade-right" data-aos-delay="1100">
                    <span className="property">role:</span> <span className="string">"Software Developer"</span>,
                  </div>
                  
                  <div className="code-line indented" data-aos="fade-right" data-aos-delay="1300">
                    <span className="property">expertise:</span> [<span className="string">"React.js"</span>, <span className="string">"Next.js"</span>, <span className="string">"JavaScript"</span>, <span className="string">"Python"</span>, <span className="string">"MySQL"</span>],
                  </div>
                  
                  <div className="code-line indented" data-aos="fade-right" data-aos-delay="1500">
                    <span className="property">available:</span> <span className="boolean">true</span>,
                  </div>
                  
                  <div className="code-line" data-aos="fade-right" data-aos-delay="1700">{"}"}</div>
                </div>
                
                <div className="terminal-line result">
                  <span className="result-success">► Profile loaded successfully</span>
                </div>
                
                <div className="terminal-line prompt cursor-line">
                  <span className="prompt-marker">λ</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>

            <div className="terminal-cta" data-aos="fade-up" data-aos-delay="1900">
              <a href="/experience" className="btn-primary">View My Work</a>
              <a href="#footer" className="btn-secondary">Connect With Me</a>
            </div>
          </div>
          
          {/* <div className="floating-tech-stack">
            <div className="tech-icon html" data-aos="zoom-in" data-aos-delay="400"><img src="/logos/react.svg" alt="" width={50} /></div>
            <div className="tech-icon css" data-aos="zoom-in" data-aos-delay="500"><img src="/logos/next-js.svg" alt="" width={50} /></div>
            <div className="tech-icon javascript" data-aos="zoom-in" data-aos-delay="600"><img src="/logos/python.svg" alt="" width={50} /></div>
            <div className="tech-icon react" data-aos="zoom-in" data-aos-delay="700"><img src="/logos/mysql.svg" alt="" width={50} /></div>
            <div className="tech-icon node" data-aos="zoom-in" data-aos-delay="800"><img src="/logos/aws.svg" alt="" width={50} /></div>
          </div> */}
        </div>
        
        {/* <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="2000">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll to explore</div>
        </div> */}
      </section>
      
      <hr className="text-light" />
      <About />
      <hr className="text-light" />
      <Projects /> {/* Updated component */}
      <hr className="text-light" />
      <Skill />
      <hr className="text-light" />
      <Resume />
      <div className="availability-sticky" data-aos="fade-up" data-aos-delay="1000">
        Open for Dev Opportunities <span className="dev-icon">⌨️</span>
      </div>
    </>
  );
}
