import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import HomeImg from "../assets/starter.PNG";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import ServiceImg from "../assets/i.png";
function Home() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="WE ARE OSTORA"
        text="WE ARE UNIQUE"
        btnText="Home button"
        url="#"
        btnClass="hide"
      />
      <Intro />
      <Timeline />

      <div>
        <img src={HomeImg} alt="" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
