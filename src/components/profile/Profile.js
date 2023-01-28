import React from "react";
import "./profile.css";
import { useEffect } from "react";

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

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

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
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  });

  return (
    <>
      <div className="container profile-container component">
        <>
          <div className="profile row">
            <div className="profile-image col-lg-3 col-md-4 col-sm-3 col-xs-3">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsF8AvRvrqeqePzr-tROaiGLdXQewNMZz0A&usqp=CAU"
                  alt=""
                />
                {/* <h5 className='text-center' style={{'fontSize':'1.5vw'}}>Prajval Gandhi</h5> */}
                {/* <h5 className='text-center' style={{'fontSize':'1.5vw'}}>Full Stack Developer</h5> */}
              </div>
            </div>
            <div className="profile-separator col-lg-2 col-md-2 col-xs-1 col-sm-1"></div>
            <div className="col-lg-7 col-md-6 col-sm-6 col-xs-6">
              <h1>
                <a
                  href="/"
                  className="typewrite text-light"
                  data-period="2000"
                  data-type='[ "Hi, Im Prajval.", "I Love to Develop.","I am a Web Developer." ]'
                  style={{ wordWrap: "break-word" }}
                >
                  <span className="wrap">HI, IM PRAJVAL.</span>
                </a>
              </h1>
            </div>
          </div>

          <div className="skills">
            <p>
              <button
                className="btn btn-primary px-5 bg-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3"
              >
                Skills
              </button>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  <div className="card card-body">
                    <div className="card-title">
                      <h5>Front-End Skills</h5>
                    </div>
                    <div className="container">
                      <div className="row g-2">
                        <div className="col">
                          <div className="p-1">
                            <b>HTML</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>CSS</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>Bootstrap</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>Javascript</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>jQuery</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>AJAX</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>ReactJS</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample3"
                >
                  <div className="card card-body">
                    <div className="card-title">
                      <h5>Backend Skills</h5>
                    </div>
                    <div className="container">
                      <div className="row g-2">
                        <div className="col">
                          <div className="p-1">
                            <b>Python</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>PHP</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>Flask</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>Django</b>
                          </div>
                        </div>
                        <div className="col">
                          <div
                            className="p-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Beginner"
                          >
                            <b>NodeJS(*)</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>MySQL | MongoDB</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample2"
                >
                  <div className="card card-body">
                    <div className="card-title">
                      <h5>Programming Languages</h5>
                    </div>
                    <div className="container">
                      <div className="row g-2">
                        <div className="col">
                          <div className="p-1">
                            <b>C++</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>Python</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>JavaScript</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>PHP</b>
                          </div>
                        </div>
                        <div className="col">
                          <div className="p-1">
                            <b>Java</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>

      <hr className="text-light" />
      <div className="container about-container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div className="col" style={{ position: "relative" }}>
            <div
              className="bg-light"
              style={{
                width: "75%",
                height: "100%",
                position: "absolute",

                zIndex: "-1",
              }}
            >
              {/*  */}
            </div>
            <div
              className=""
              style={{
                width: "75%",
                height: "100%",
                position: "absolute",
                marginLeft: "2rem",
                marginTop: "2rem",
                backgroundImage: "url('/paju4.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/*  */}
            </div>
            <div
              style={{
                width: "75%",
                height: "100%",
                marginLeft: "2rem",
                marginTop: "2rem",
                backgroundColor: "rgb(0,0,0,0.5)",
                position: "absolute",
              }}
            ></div>
          </div>
          <div className="col text-light" style={{ position: "relative" }}>
            <div className="content-heading">
              <div style={{ display: "inline-block", width: "50%" }}>
                <h6 style={{ float: "right" }}>Who am i</h6>
                <h1 style={{ fontSize: "4rem" }}>Hello</h1>
              </div>
              <div style={{ display: "inline-block", width: "50%" }}>
                <img
                  src="web.png"
                  style={{ width: "50%", float: "right" }}
                  alt=""
                />
              </div>
            </div>
            <div className="content mt-5" style={{ textAlign: "justify" }}>
              I'm an IT BTech student who is passionate about exploring and
              learning various trends in web development. I have about{" "}
              <b>{new Date().getFullYear() - 2019} years</b> of experience in
              <b> full-stack web development</b> and have also had projects
              sponsored by company.
              <br />I am a Full Stack Web Developer with a passion for creating
              dynamic and engaging websites and web applications. With a strong
              background in front-end technologies such as HTML, CSS, and
              JavaScript, as well as frameworks like Bootstrap and React, I am
              able to design and develop user interfaces that are both visually
              appealing and easy to use. I also have experience working with
              back-end technologies such as Django, Flask and PHP, and am
              well-versed in database management systems like MySQL and MongoDB.
              My goal is to create functional, scalable, and secure web
              solutions that provide a seamless user experience.
            </div>
          </div>
        </div>
      </div>
      <hr className="text-light" />
    </>
  );
}
