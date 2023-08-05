import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AOS from "aos"
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
