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

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
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
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
