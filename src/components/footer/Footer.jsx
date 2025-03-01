import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="modern-footer">
      <div className="footer-waves">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#wave" x="48" y="0" />
            <use href="#wave" x="48" y="3" />
            <use href="#wave" x="48" y="5" />
            <use href="#wave" x="48" y="7" />
          </g>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-main" data-aos="fade-up">
          <div className="footer-section contact-section">
            <h3 className="section-title">Let's Connect</h3>
            <div className="contact-grid">
              {[
                { icon: "envelope", label: "Email", value: "prajvalgandhi483@gmail.com", href: "mailto:prajvalgandhi483@gmail.com" },
                { icon: "phone", label: "Phone", value: "+91-9665656267", href: "tel:+919665656267" },
                { icon: "map-marker-alt", label: "Location", value: "Pune, Maharashtra", href: "https://www.google.com/maps?q=Pune,Maharashtra,India" }
              ].map((contact, index) => (
                <a key={index} href={contact.href} className="contact-card">
                  <div className="contact-icon">
                    <i className={`fas fa-${contact.icon}`}></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section social-section">
            <h3 className="section-title">Social Media</h3>
            <div className="social-icons">
              {[
                { icon: "github", url: "https://github.com/paju3125/", color: "#333" },
                { icon: "linkedin", url: "https://www.linkedin.com/in/prajval-gandhi-648504211/", color: "#0077b5" },
                { icon: "instagram", url: "https://www.instagram.com/prajval_gandhi/", color: "#e4405f" },
                { icon: "facebook", url: "https://www.facebook.com/prajval.gandhi", color: "#1877f2" },
                { icon: "whatsapp", url: "https://wa.me/9665656267", color: "#25D366" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{"--hover-color": social.color}}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p className="copyright">
            <span className="heart">❤️</span>
            Crafted with passion by Prajval Gandhi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
