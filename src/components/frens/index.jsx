import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import "./index.css";
import Button from "../button";
import frensImg from "../../assets/buddies.png";
import CloseIcon from "@mui/icons-material/Close";
import PetsIcon from "@mui/icons-material/Pets";
import { useCtx } from "../../context/useContext";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Frens = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { total, setTotal, user } = useCtx();
  const [inviteCount, setInviteCount] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getUserInviteCount = async () => {
    try{
      const getInvitesQuery = query(collection(db, "users"), where("id", "==", user.id));
      const result = await getDocs(getInvitesQuery);
      if(!result.empty){
        const userData = result.docs[0].data();
        setInviteCount(userData.inviteCount);
      }
    }
    catch(error){
      console.error("Error getting user invite count:", error);
    }
  }

  const updateTotalSheepDawg = async (amount) => {
    try {
      const updateQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(updateQuery);
      if (!result.empty) {
        const userDoc = result.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        await updateDoc(userRef, {
          totalSheepDawg: total + amount,
        });
        setTotal(total + amount);
      }
    } catch (error) {
      console.error("Error updating total sheepdawg:", error);
    }
  };

  return (
    <div className="frens-container">
      <div className="frens-heading">My Buddies</div>
      <div className="frens-list">
        <div className="frens-item">
          <div className="frens-item-section">
            <img src={frensImg} alt="Friend 1" className="frens-icon" />
            <div className="frens-text">
              <div className="invite-frens-item-heading">Invite 3 Friends</div>
              <div className="invite-frens-item-desc">
                <PetsIcon className="invite-frens-icon" />
                50,000
              </div>
            </div>
            <button className="frens-claim-button">Claim</button>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "33%" }}></div>
          </div>
        </div>
        <div className="frens-item">
          <div className="frens-item-section">
            <img src={frensImg} alt="Friend 1" className="frens-icon" />
            <div className="frens-text">
              <div className="invite-frens-item-heading">Invite 10 Friends</div>
              <div className="invite-frens-item-desc">
                <PetsIcon className="invite-frens-icon" />
                200,000
              </div>
            </div>
            <button className="frens-claim-button">Claim</button>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "10%" }}></div>
          </div>
        </div>
        <div className="frens-item">
          <div className="frens-item-section">
            <img src={frensImg} alt="Friend 3" className="frens-icon" />
            <div className="frens-text">
              <div className="invite-frens-item-heading">Invite 25 Friends</div>
              <div className="invite-frens-item-desc">
                <PetsIcon className="invite-frens-icon" />
                250,000
              </div>
            </div>
            <button className="frens-claim-button">Claim</button>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "4%" }}></div>
          </div>
        </div>
        <div className="frens-item">
          <div className="frens-item-section">
            <img src={frensImg} alt="Friend 1" className="frens-icon" />
            <div className="frens-text">
              <div className="invite-frens-item-heading">Invite 50 Friends</div>
              <div className="invite-frens-item-desc">
                <PetsIcon className="invite-frens-icon" />
                300,000
              </div>
            </div>
            <button className="frens-claim-button">Claim</button>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "2%" }}></div>
          </div>
        </div>
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
          <div>Invite Buddies</div>
          <CloseIcon className="modal-close-icon" onClick={closeModal} />
        </div>
        <div className="modal-popup">
          <Button text="Copy Link" />
        </div>
      </Modal>
      <Navbar />
    </div>
  );
};

export default Frens;
