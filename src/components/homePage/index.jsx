import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import HomeImage from "../../assets/Welcome page.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Icon } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import PetsIcon from "@mui/icons-material/Pets";
import { db } from "../../firebase";
import { useCtx } from "../../context/useContext";
import Modal from "react-modal";
import Button from "../button";
import {
  getDocs,
  query,
  where,
  updateDoc,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [time, setTime] = useState(6 * 60 * 60);
  const [isFarming, setIsFarming] = useState(false);
  const [farmingEnded, setFarmingEnded] = useState(false);
  const [canClaimDaily, setCanClaimDaily] = useState(false); // New state for daily reward
  const navigate = useNavigate();
  const { user, total, setTotal, maxValue } = useCtx();
  const [isMax, setIsMax] = useState(false);
  const [farmingFactor, setFarmingFactor] = useState(1);

  useEffect(() => {
    getData();
    checkFarmingStatus();
    checkDailyReward(); // Check daily reward status
  }, []);

  const getData = async () => {
    try {
      const userDataQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(userDataQuery);
      if (!result.empty) {
        const userRef = doc(db, "users", result.docs[0].id);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.data();
        if (userData.totalSheepDawg >= maxValue) {
          setTotal(maxValue);
          setIsMax(true);
        } else {
          setTotal(userData.totalSheepDawg);
        }
      }
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  };

  const checkFarmingStatus = async () => {
    try {
      const userDataQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(userDataQuery);
      if (!result.empty) {
        const userRef = doc(db, "users", result.docs[0].id);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.data();
        const startTime = userData.startTime;

        if (startTime) {
          const currentTime = Date.now();
          const elapsedTime = (currentTime - startTime) / 1000; // in seconds

          if (elapsedTime >= 6 * 60 * 60) {
            setFarmingEnded(true);
            setTime(0);
          } else {
            setIsFarming(true);
            setTime(6 * 60 * 60 - elapsedTime);
            startFarmingTimer(6 * 60 * 60 - elapsedTime);
          }
        }
      }
    } catch (error) {
      console.error("Error checking farming status:", error);
    }
  };

  const checkDailyReward = async () => {
    try {
      const userDataQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(userDataQuery);
      if (!result.empty) {
        const userRef = doc(db, "users", result.docs[0].id);
        const userDoc = await getDoc(userRef);
        const userData = userDoc.data();
        const lastClaimedDailyReward = userData.lastClaimedDailyReward;

        const currentDate = new Date().toDateString();
        if (lastClaimedDailyReward !== currentDate) {
          setCanClaimDaily(true);
        }
      }
    } catch (error) {
      console.error("Error checking daily reward status:", error);
    }
  };

  const claimDailyReward = async () => {
    try {
      const userDataQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(userDataQuery);
      if (!result.empty) {
        const userRef = doc(db, "users", result.docs[0].id);
        const userInviteCount = result.docs[0].data().inviteCount;
        if (userInviteCount >= 2 && userInviteCount < 5) {
          setFarmingFactor(2);
        }
        else if (userInviteCount >= 5 && userInviteCount < 25) {
          setFarmingFactor(3);
        }
        else if (userInviteCount >= 25) {
          setFarmingFactor(4);
        }
        const currentDate = new Date().toDateString();
        if (total + ( 50 * farmingFactor) >= maxValue) {
          await updateDoc(userRef, {
            totalSheepDawg: maxValue,
            lastClaimedDailyReward: currentDate,
          });
          setTotal(maxValue);
          setCanClaimDaily(false);
          setModalIsOpen(false);
          setIsMax(true);
        } else {
          await updateDoc(userRef, {
            totalSheepDawg: total + ( 50 * farmingFactor ),
            lastClaimedDailyReward: currentDate,
          });
          setTotal(total + ( 50 * farmingFactor ));
          setCanClaimDaily(false);
          setModalIsOpen(false);
        }
      }
    } catch (error) {
      console.error("Error claiming daily reward:", error);
    }
  };
  const startFarmingTimer = (initialTime) => {
    let timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return Math.floor(prevTime - 1); // Ensure the value is an integer
        } else {
          setIsFarming(false);
          setFarmingEnded(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };

  const handleStartFarming = async () => {
    try {
      const userDataQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(userDataQuery);
      if (!result.empty) {
        const userRef = doc(db, "users", result.docs[0].id);
        await updateDoc(userRef, {
          startTime: Date.now(),
        });
        setTime(6 * 60 * 60);
        setIsFarming(true);
        setFarmingEnded(false);
        startFarmingTimer(6 * 60 * 60);
      }
    } catch (error) {
      console.error("Error starting farming:", error);
    }
  };

  const handleClaimPoints = async () => {
    try {
      const updateTotalQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(updateTotalQuery);
      if (!result.empty) {
        const userInvites = result.docs[0].data().inviteCount;
        if (userInvites >= 2 && userInvites < 5) {
          setFarmingFactor(2);
        }
        else if (userInvites >= 5 && userInvites < 25) {
          setFarmingFactor(3);
        }
        else if (userInvites >= 25) {
          setFarmingFactor(4);
        }
        const userRef = doc(db, "users", result.docs[0].id);

        if (total + ( 50 * farmingFactor ) >= maxValue) {
          await updateDoc(userRef, {
            totalSheepDawg: maxValue,
            startTime: null, // Reset the start time after claiming
          });
          setFarmingEnded(false);
          setIsMax(true);
          setTotal(maxValue);
        } else {
          await updateDoc(userRef, {
            totalSheepDawg: total + ( 50 * farmingFactor ),
            startTime: null, // Reset the start time after claiming
          });
          setFarmingEnded(false);
          setTotal(total + ( 50 * farmingFactor ));
        }
      }
    } catch (error) {
      console.error("Error updating total:", error);
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="farming-timer-container">
      <div className="top-icons">
        <div className="profile">
          <Icon className="profile-icon" component={AccountCircleIcon} />
        </div>
        <div className="upgrade-translate">
          <div className="upgrade-button" onClick={() => navigate("/boost")}>
            <Icon className="upgrade-icon" component={BoltIcon} />
            Boost
          </div>
          <div className="planet">
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Russian">Russian</option>
            </select>
          </div>
        </div>
      </div>
      <h1 className="money">
        <PetsIcon className="heading-paws-icon" />
        {total}
      </h1>
      <div className="hourglass-container">
        <img
          src={HomeImage}
          alt="Welcome Dawg"
          className="welcome-dawg-image"
        />
      </div>
      {!isMax && !isFarming && !farmingEnded ? (
        <button className="start-button" onClick={handleStartFarming}>
          Start Farming
        </button>
      ) : (
        <>
          <div className="farming-info">
            <p>
              Farming:
              <PetsIcon className="heading-paws-icon" />
            </p>
            <p>{formatTime(time)}</p>
          </div>
        </>
      )}
      {farmingEnded && (
        <button className="claim-button" onClick={handleClaimPoints}>
          Claim Points
        </button>
      )}
      {canClaimDaily && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Daily Login Rewards"
          className={`modal ${modalIsOpen ? "open" : ""}`}
          overlayClassName={`modal-overlay ${modalIsOpen ? "open" : "closed"}`}
        >
          <div className="modal-daily-login-popup">
            <div className="modal-daily-login-heading">
              Claim your Daily Login Reward
            </div>
            <Button text="Claim Sheep Dawgs" onClick={claimDailyReward} />
          </div>
        </Modal>
      )}
      <Navbar />
    </div>
  );
};

export default HomePage;
