import "./App.css";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
