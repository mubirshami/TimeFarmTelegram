import React from "react";
import Navbar from "../navbar";
import "./index.css";
import pawsImage from "../../assets/paws.png";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

const Wallet = () => {
  const wallet = useTonWallet();

  return (
    <div className="wallet-container">
      <div className="paws-icon">
        <img
          className="paws-img"
          alt="coin"
          width="96"
          height="96"
          src={pawsImage}
        />
      </div>
      <div className="wallet-heading">Wallet</div>
      {!wallet ? (
        <div className="wallet-connect-prompt">
          <div className="wallet-subheading">
            Connect your TON wallet for future rewards
          </div>
          <div className="wallet-section">
            <TonConnectButton className="wallet-connect-button" />
          </div>
        </div>
      ) : (
        <div className="wallet-details">
          <div className="wallet-section">
            <div className="wallet-detail-item">
              <strong>Public Key:</strong> {wallet.account.publicKey}
            </div>
            <div className="wallet-detail-item">
              <strong>Balance:</strong> {wallet.balance} TON
            </div>
          </div>
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default Wallet;
