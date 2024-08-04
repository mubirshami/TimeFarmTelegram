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
      {wallet ? (
        <div className="wallet-details">
          <div className="wallet-section">
            <div className="wallet-detail-item">
              <strong>Name:</strong> {wallet.name}
            </div>
            <div className="wallet-detail-item">
              <strong>Address:</strong> {wallet.account.address}
            </div>
            <div className="wallet-detail-item">
              <strong>Chain:</strong> {wallet.account.chain}
            </div>
            <div className="wallet-detail-item">
              <strong>Public Key:</strong> {wallet.account.publicKey}
            </div>
            <div className="wallet-detail-item">
              <strong>Balance:</strong> {wallet.balance} TON
            </div>
            <div className="wallet-detail-item">
              <strong>App Name:</strong> {wallet.device.appName}
            </div>
            <div className="wallet-detail-item">
              <strong>App Version:</strong> {wallet.device.appVersion}
            </div>
            <div className="wallet-detail-item">
              <strong>Max Protocol Version:</strong> {wallet.device.maxProtocolVersion}
            </div>
            <div className="wallet-detail-item">
              <strong>Platform:</strong> {wallet.device.platform}
            </div>
            <div className="wallet-detail-item">
              <strong>Features:</strong> {wallet.device.features.join(', ')}
            </div>
            {wallet.imageUrl && (
              <div className="wallet-detail-item">
                <strong>Image:</strong>
                <img src={wallet.imageUrl} alt="wallet" />
              </div>
            )}
            {wallet.aboutUrl && (
              <div className="wallet-detail-item">
                <strong>About:</strong>
                <a href={wallet.aboutUrl} target="_blank" rel="noopener noreferrer">
                  {wallet.aboutUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="wallet-subheading">
            Connect your TON wallet for future rewards
          </div>
          <div className="wallet-section">
            <TonConnectButton className="wallet-connect-button" />
          </div>
        </>
      )}
      <Navbar />
    </div>
  );
};

export default Wallet;
