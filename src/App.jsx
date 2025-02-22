import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Preloader from "./components/preloader/Preloader";
import AOS from "aos";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Certifications from "./components/certifications/Certifications";
import Internships from "./components/internships/Internships";
import Projects from "./components/projects/Projects";
import Error from "./components/Error";
import GraduationBook from "./components/GraduationBook";
// import Particle from "./components/Particle";

function App() {
  const [isLoading, setLoading] = useState(true);

  // Add particles configuration
  const particlesConfig = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.2,
        random: false
      },
      size: {
        value: 1,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.1,
        width: 0.5
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true
  };

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Initialize particles
    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig);
    }
  }, []);

  return (
    <>
      <div id="particles-js"></div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="" element={<Profile />} />
              <Route path="certifications" element={<Certifications />} />
              <Route path="projects" element={<Projects />} />
              <Route path="internships" element={<Internships />} />
              <Route path="graduation-book" element={<GraduationBook />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
      {/* <Particle/> */}
    </>
  );
}

export default App;
