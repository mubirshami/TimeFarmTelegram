import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import "./index.css";
import {
  TonConnectButton,
  useTonWallet,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import WalletIcon from "../../assets/wallet-icon.png";
import CloseIcon from "@mui/icons-material/Close";
import pawsImage from "../../assets/paws.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import PaymentIcon from "@mui/icons-material/Payment";

const Wallet = () => {
  const wallet = useTonWallet();
  const [modalOpen, setModalOpen] = useState(false);
  const [tonUI] = useTonConnectUI();

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const disconnecteWallet = async () => {
    await tonUI.disconnect();
  };

  const formatPublicKey = (key) => {
    if (!key) return "";
    return `${key.slice(0, 6)}...${key.slice(-6)}`;
  };

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
        <div className="wallet-connected">
          <button className="wallet-connected-button" onClick={openModal}>
            Wallet Connected
          </button>
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Wallet Details"
            className={`modal-wallet ${modalOpen ? "open" : ""}`}
            overlayClassName={`modal-overlay-wallet ${
              modalOpen ? "open" : "closed"
            }`}
          >
            <div className="modal-content-wallet">
              <div className="modal-wallet-top-content">
                <CloseIcon className="close-button" onClick={closeModal} />
                <img
                  src={WalletIcon}
                  alt="Wallet Icon"
                  className="wallet-modal-icon"
                />
                <h2 className="wallet-connection-heading">Your TON wallet is connected</h2>
              </div>

              <div className="modal-wallet-main-content">
                <div className="wallet-disconnection">
                  <LinkOffIcon
                    className="wallet-disconnect-icon"
                    onClick={disconnecteWallet}
                  />
                </div>

                <div className="wallet-information">
                  <PaymentIcon className="wallet-detail-icon" />
                  <span className="wallet-public-key">
                    {formatPublicKey(wallet.account.publicKey)}
                  </span>
                  <ContentCopyIcon
                    className="wallet-copy-icon"
                    onClick={() =>
                      navigator.clipboard.writeText(wallet.account.publicKey)
                    }
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default Wallet;
