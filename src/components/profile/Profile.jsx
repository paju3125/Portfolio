import React from "react";
import "./profile.css";
import { useEffect } from "react";
import About from "../about/About";
import Skill from "../skills/Skill";
import Resume from "../resume/Resume";

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
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #FB8122}";
    document.body.appendChild(css);
  });

  return (
    <>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div
          className="hero-container d-flex flex-column justify-content-center align-items-center"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
        <h3 className="text-secondary text-left w-100  mt-3 mt-md-1">Hey folks,</h3>
          <h1 className="d-inline-flex"><p>I'm &nbsp;</p>Prajval Gandhi</h1>
          <p
            className="typewrite"
            data-period="2000"
            data-type='[ "Software Engineer.", "ML Enthusiat.", "React Developer.","Full Stack Developer" ]'
          ></p>
        </div>
      </section>

      <About />
      <hr className="text-light" />
      {/* <Journey />
      <hr className="text-light" /> */}
      <Skill />
      <hr className="text-light" />
      <Resume />
    </>
  );
}
