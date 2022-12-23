import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import logo from "../components/logo_ostora.ico";
function Ostoralist() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg="log"
        btnText="Home button"
        url="#"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Ostoralist;
