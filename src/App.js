import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Preloader from "./components/preloader/Preloader";
import AOS from "aos"
import { useEffect, useState } from "react";

function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (

    <>
      {isLoading ? <Preloader /> : <>
        <Navbar />
        <Footer />
      </>}
    </>
  );
}

export default App;
