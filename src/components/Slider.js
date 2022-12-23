import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import nami1 from "../assets/nami1.jpg";
import nami2 from "../assets/nami2.jpg";
import nami3 from "../assets/nami3.jpg";
import nami4 from "../assets/nami4.jpg";
import nami5 from "../assets/nami5.jpg";
import nami6 from "../assets/nami6.jpg";

const Slider = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDely: 100,
        shouldAutoPlay: true,
        shoudDisplayButtons: true,
        autoPlayDuration: 5000,
        height: "100vh"
      }}
    >
      <Slide
        background={{
          backgroundImag: nami1,
          backgroundAttachement: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImag: nami2,
          backgroundAttachement: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImag: nami3,
          backgroundAttachement: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImag: nami4,
          backgroundAttachement: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImag: nami5,
          backgroundAttachement: "fixed"
        }}
      />
      <Slide
        background={{
          backgroundImag: nami6,
          backgroundAttachement: "fixed"
        }}
      />
    </HeroSlider>
  );
};

export default Slider;
