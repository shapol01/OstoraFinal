import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>We are Ostora</h1>
          <p>We are unique</p>
        </div>
        <div>
          <a href="https://discord.com/invite/PNqqzgHwtp" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://twitter.com/Ostora_NFT" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://magiceden.io/marketplace/ostora_dao" target="_blank">
            <i className="fa-brands fa-artstation"></i>
          </a>
          <a href="https://twitter.com/OstoraStudios" target="_blank">
            <i className="fa-solid fa-paintbrush"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Ostora</h4>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/Wallet_SetUp">Wallet SetUp</a>
          <a href="/Ostora_studio">Ostora studio</a>
        </div>
        <div>
          <h4>Partners</h4>
          <a href="https://twitter.com/GorillaeNFT">GorillaeNFT</a>
          <a href="https://twitter.com/theunveiled222">Theunveiled</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
