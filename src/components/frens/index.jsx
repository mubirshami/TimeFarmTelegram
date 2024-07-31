import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import "./index.css";
import Button from "../button";
import frensImg from "../../assets/buddies.png";
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
        <p>2X Farming & Daily Reward = Invite 2 Buddies</p>
        <p>3X Farming & Daily Reward = Invite 5 Buddies</p>
        <p>4X Farming & Daily Reward = Invite 25 Buddies</p>
        <p>5X Farming & Daily Reward = Invite 50 Buddies</p>
        <p>
          Note- Refferal income is for only first level direct signup and user
          will get income only when his referral will login account and complete
          at least 1 task Bots and fake accounts will not count and can result
          into account deactivation.
        </p>
      </div>
      <div className="image-section">
        <img className="buddies-image" src={frensImg} alt="Buddies"/>
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
