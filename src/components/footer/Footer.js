import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div id="footer" class="footer-dark">
      <footer>
        <div class="container" data-aos="zoom-in" data-aos-duration="2000">
          <div class="row d-grid d-md-flex justify-content-around align-items-center">
            <div class="col-sm-6 col-md-3 item">
              <h3>Contact</h3>
              <ul>
                <li>prajvalgandhi483@gmail.com</li>
                <li>+919665656267</li>
                <li>Pune, Maharashtra, India</li>
              </ul>
            </div>

            <div class="col item social"><a href="https://www.linkedin.com/in/prajval-gandhi-648504211/"><i class="icon ion-social-linkedin"></i></a><a href="https://github.com/paju3125/"><i class="icon ion-social-github"></i></a><a href="https://www.instagram.com/prajval_gandhi/"><i class="icon ion-social-instagram"></i></a><a href="https://www.facebook.com/prajval.gandhi"><i class="icon ion-social-facebook"></i></a></div>
          </div>
          <p class="copyright">Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
