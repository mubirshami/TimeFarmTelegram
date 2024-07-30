import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import "./index.css";
import Button from "../button";
import frensImg from "../../assets/group-photo.png";
import CloseIcon from "@mui/icons-material/Close";

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
      <div className="frens-heading">My Buddies</div>
      <div className="frens-description">
        Earn 20% for your direct referrals, 10% for their referrals, then 5%,
        2.5%, and 1.25% for your fifth-level referrals. Plus earn 15,000 SECOND
        for each invite, while your friend receives 30,000!
      </div>
      <div className="image-section">
        <img className="frens-img" src={frensImg} />
      </div>
      <div className="invite-button">
        <Button text="Invite A Buddy" onClick={openModal} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Invite A Fren Modal"
        className={`modal ${modalIsOpen ? "open" : ""}`}
        overlayClassName={`modal-overlay ${modalIsOpen ? "open" : "closed"}`}
      >
        <div className="modal-invite-heading">
          <div className="modal-invite-heading">Invite Buddies</div>
          <CloseIcon className="modal-close-icon" onClick={closeModal} />
        </div>
        <div className="modal-popup">
          <Button text="Send in Telegram" />
          <Button text="Copy Link" />
        </div>
      </Modal>
      <Navbar />
    </div>
  );
};

export default Frens;
