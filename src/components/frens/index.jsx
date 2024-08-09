import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import Button from "../button";
import frensImg from "../../assets/buddies.png";
import { useCtx } from "../../context/useContext";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import "./index.css";

const Frens = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // For managing the modal visibility
  const { total, setTotal, user } = useCtx(); // Context variables
  const [inviteCount, setInviteCount] = useState(0); // Tracks the number of invited friends
  const [claimedRewards, setClaimedRewards] = useState([]); // Tracks which rewards have been claimed

  // Fetches the user's invite count and claimed rewards from Firestore
  const getUserData = async () => {
    try {
      const getUserQuery = query(collection(db, "users"), where("id", "==", user.id));
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

  // Updates the progress bar width based on the invite count
  const calculateProgress = (goal) => {
    const percentage = (inviteCount / goal) * 100;
    return `${Math.min(percentage, 100)}%`; // Ensures it doesn't exceed 100%
  };

  // Handles claiming a reward
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

  useEffect(() => {
    getUserData(); // Fetch user data when the component loads
  }, []);

  // Define the goals and rewards
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
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-invite-heading">
          <div>Invite Buddies</div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
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
