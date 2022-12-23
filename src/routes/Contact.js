import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ContactImg from "../assets/ostora_studio_banner.png";
import Footer from "../components/Footer";
import Twitter from "../components/Twitter";
function Contact() {
  return (
    <>
      <NavBar />
      <Hero cName="hero-jngl" heroImg={ContactImg} title="" btnClass="hide" />
      <Twitter />
      <Footer />
    </>
  );
}

export default Contact;
