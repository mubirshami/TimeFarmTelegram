import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import "./index.css";
import Button from "../button";
const Frens = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="frens-container">
      <div className="frens-heading">My Frens</div>
      <div className="frens-description">
        Earn 20% for your direct referrals, 10% for their referrals, then 5%,
        2.5%, and 1.25% for your fifth-level referrals. Plus earn 15,000 SECOND
        for each invite, while your friend receives 30,000!
      </div>
      <div className="image-section">
        <img
          className="frens-img"
          src="https://img-tap-miniapp.chrono.tech/png/illustration1.png"
          alt="lx-guys"
        />
      </div>
      <div className="invite-button">
        <Button text="Invite A Fren" />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Invite A Fren Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Invite Frens</h2>
        <p>
          Earn 20% for your direct referrals, 10% for their referrals, then 5%,
          2.5%, and 1.25% for your fifth-level referrals. Plus earn 15,000
          SECOND for each invite, while your friend receives 30,000!
        </p>
        <div>
          <button>Send in Telegram</button>
          <button>Copy Link</button>
        </div>
        <button onClick={closeModal}>Close</button>
      </Modal>
      <Navbar />
    </div>
  );
};

export default Frens;
