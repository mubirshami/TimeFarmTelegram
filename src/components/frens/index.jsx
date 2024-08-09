import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import Button from "../button";
import frensImg from "../../assets/buddies.png";
import { useCtx } from "../../context/useContext";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Frens = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { total, setTotal, user } = useCtx();
  const [inviteCount, setInviteCount] = useState(0);
  const [claimedRewards, setClaimedRewards] = useState([]);
  const [copyMessage, setCopyMessage] = useState("");

  const getUserData = async () => {
    try {
      const getUserQuery = query(collection(db, "users"), where("id", "==",user.id));
      const result = await getDocs(getUserQuery);
      if (!result.empty) {
        const userData = result.docs[0].data();
        setInviteCount(userData.inviteCount || 0);
        setClaimedRewards(userData.claimedRewards || []);
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  };

  const calculateProgress = (goal) => {
    const percentage = (inviteCount / goal) * 100;
    return `${Math.min(percentage, 100)}%`;
  };

  const claimReward = async (goal, reward) => {
    if (inviteCount >= goal && !claimedRewards.includes(goal)) {
      try {
        const updateQuery = query(collection(db, "users"), where("id", "==", user.id));
        const result = await getDocs(updateQuery);
        if (!result.empty) {
          const userDoc = result.docs[0];
          const userRef = doc(db, "users", result.docs[0].id);

          await updateDoc(userRef, {
            claimedRewards: [...claimedRewards, goal],
            totalSheepDawg: total + reward,
          });

          setClaimedRewards([...claimedRewards, goal]);
          setTotal(total + reward);
        }
      } catch (error) {
        console.error("Error claiming reward:", error);
      }
    }
  };

  const copyLinkToClipboard = () => {
    const url = "https://t.me/SheepDawgBot?start=75ikGpEzHnSaf5jb";
    const referralIdText = `My Referral Id: ${user.id}`;    
    const textToCopy = `${url}\n${referralIdText}`;    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopyMessage("Link copied to clipboard!");
        setTimeout(() => setCopyMessage(""), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy the link:", error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const goalsAndRewards = [
    { goal: 3, reward: 50000 },
    { goal: 10, reward: 200000 },
    { goal: 25, reward: 250000 },
    { goal: 50, reward: 300000 },
  ];

  return (
    <div className="frens-container">
      <div className="frens-heading">My Buddies</div>
      <div className="frens-list">
        {goalsAndRewards.map(({ goal, reward }) => (
          <div className="frens-item" key={goal}>
            <div className="frens-item-section">
              <img src={frensImg} alt={`Invite ${goal} Friends`} className="frens-icon" />
              <div className="frens-text">
                <div className="invite-frens-item-heading">Invite {goal} Friends</div>
                <div className="invite-frens-item-desc">Reward: {reward.toLocaleString()}</div>
              </div>
              <button
                className="frens-claim-button"
                onClick={() => claimReward(goal, reward)}
                disabled={inviteCount < goal || claimedRewards.includes(goal)}
              >
                {claimedRewards.includes(goal) ? "Claimed" : "Claim"}
              </button>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: calculateProgress(goal) }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="invite-button">
        <Button text="Invite A Buddy" onClick={() => setModalIsOpen(true)} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Invite Buddies"
        className={`modal ${modalIsOpen ? "open" : ""}`}
        overlayClassName={`modal-overlay ${modalIsOpen ? "open" : "closed"}`}
      >
        <div className="modal-popup">
          <div className="modal-invite-heading">
            Invite Buddies
            <CloseIcon className="modal-close-icon" onClick={() => setModalIsOpen(false)} />
          </div>
          <Button text="Copy Link" onClick={copyLinkToClipboard} />
          {copyMessage && <div className="copy-message">{copyMessage}</div>}
        </div>
      </Modal>
      <Navbar />
    </div>
  );
};

export default Frens;
