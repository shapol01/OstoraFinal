import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NamiWallet from "../components/NamiWallet";
import ServiceImg from "../assets/i.png";
function Service() {
  return (
    <>
      <NavBar />
      <Hero cName="hero" heroImg={ServiceImg} title="" btnClass="hide" />
      <NamiWallet />
      <Footer />
    </>
  );
}

export default Service;
