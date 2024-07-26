import React from "react";
import Navbar from "../navbar";
import "./index.css";

const Wallet = () => {
  return (
    <div className="wallet-container">
      <img
        class="coin-img"
        alt="coin"
        width="96"
        height="96"
        src="https://img-tap-miniapp.chrono.tech/images/wallet/coin.png"
        srcset="https://img-tap-miniapp.chrono.tech/images/wallet/coin-2x.png 2x"
      ></img>
      <h1>Wallet</h1>
      <div className="subtitle">Connect your TON wallet for future rewards</div>
      <button className="connect-button">
        <img
          class="ton-icon"
          width="24"
          height="24"
          src="https://img-tap-miniapp.chrono.tech/svg/ton.svg"
          alt="ton"
        />
        Connect your TON Wallet
        <img
          class="arrow-icon"
          width="24"
          height="24"
          src="https://img-tap-miniapp.chrono.tech/svg/arrow.svg"
          alt=">"
        ></img>
      </button>
      <Navbar />
    </div>
  );
};

export default Wallet;
