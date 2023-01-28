import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Router>
        <Routes>
          <Route exact path='' element={<Profile />} />
          <Route path='bio' element={<Bio />} />
          <Route path='certifications' element={<Certifications />} />
          <Route path='projects' element={<Projects />} />
          <Route path='internships' element={<Internships />} />
          <Route path='reach_me' element={<Bio />} />
        </Routes>
      </Router> */}
      <Footer />
    </>
  );
}

export default App;
