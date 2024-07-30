import React from "react";
import Navbar from "../navbar";
import "./index.css";
import pawsImage from "../../assets/paws.png";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <div className="paws-icon">
        <img
          class="paws-img"
          alt="coin"
          width="96"
          height="96"
          src={pawsImage}
        ></img>
      </div>
      <div className="wallet-heading">Wallet</div>
      <div className="wallet-subheading">
        Connect your TON wallet for future rewards
      </div>
      <div className="wallet-section">
        <button className="connect-button">
          <img
            class="ton-icon-wallet"
            width="24"
            height="24"
            src="https://img-tap-miniapp.chrono.tech/svg/ton.svg"
            alt="ton"
          />
          Connect your TON Wallet
          <img
            class="arrow-icon-wallet"
            width="24"
            height="24"
            src="https://img-tap-miniapp.chrono.tech/svg/arrow.svg"
            alt=">"
          ></img>
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Wallet;
