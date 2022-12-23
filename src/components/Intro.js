import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import "./intro.css";
import IntroData from "./IntroData";

const Intro = () => {
  return (
    <div className="intro">
      <h1>An introduction</h1>
      <p>
        Building one of the biggest gaming tournaments on web3, accommodating
        both web2 (traditional technology) as well as Web3 (Crypto & Blockchain
        Technology). We have already tested this thesis with a six team (NFT
        project) tournament that has been running for four weeks with a 500
        dollar prize pool which has already been a huge success.{" "}
      </p>

      <IntroData
        classname="first-des"
        heading="HOW WE MOVE FORWARD"
        text="We believe that tapping into the conventional gaming industry is pivotal in the showcase of potential that the NFT space has. This is why we are looking to hire well known streamers within the congenital gaming and streaming stages as well as curating teams from projects within the Solana, Ethereum, Cardano and Aptos ecosystems playing games that people already know and love."
        img1={img1}
        img2={img2}
      />
      <IntroData
        classname="first-des-rev"
        heading="THE VISION "
        text="The attraction that will be built up as a result of the league, having viewership spanning both Web 2 & Web 3 will allow us to become a marketing platform with the ability to showcase what said NFT projects are able to provide for a Web 2 audience. The same sentiment is echoed for Web 2 companies that are interested in doing marketing on our platform with the advantage being a direct bridge between both web communities in one place. The business model of sponsorship will aid in exponentially scaling the league, reaching new thresholds  and attracting bigger streamers which will eventually allow the funding and execution of real life events for league finals, expos and conferences.
        The attraction that will be built up as a result of the league, having viewership spanning both Web 2 & Web 3 will allow us to become a marketing platform with the ability to showcase what said NFT projects are able to provide for a Web 2 audience. The same sentiment is echoed for Web 2 companies that are interested in doing marketing on our platform with the advantage being a direct bridge between both web communities in one place. The business model of sponsorship will aid in exponentially scaling the league, reaching new thresholds  and attracting bigger streamers which will eventually allow the funding and execution of real life events for league finals, expos and conferences.
        "
        img1={img3}
        img2={img4}
      />
    </div>
  );
};

export default Intro;
