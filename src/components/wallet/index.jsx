import React from "react";
import Navbar from "../navbar";
import "./index.css";
import pawsImage from "../../assets/paws.png";
import { TonConnectButton } from "@tonconnect/ui-react";

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
      <TonConnectButton className="wallet-connect-button"/>
      </div>
      <Navbar />
    </div>
  );
};

export default Wallet;
