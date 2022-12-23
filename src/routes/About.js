import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Slider from "../components/Slider";
function About() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About title"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
