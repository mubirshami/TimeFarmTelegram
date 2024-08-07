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
import { getDocs, query, where, updateDoc, collection, doc } from "firebase/firestore";

const HomePage = () => {
  const [time, setTime] = useState(6 * 60 * 60);
  const [isFarming, setIsFarming] = useState(false);
  const [farmingEnded, setFarmingEnded] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, total, setTotal } = useCtx();

  useEffect(() => {
    console.log("User:", user);
    getData();
    let timer;
    if (isFarming) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsFarming(false);
            setFarmingEnded(true);
            clearInterval(timer);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isFarming]);

  const getData = async () => {
    try {
      const userDataQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(userDataQuery);
      if (!result.empty) {
        const userData = result.docs[0].data();
        setTotal(userData.totalSheepDawg);
      }
    } catch (error) {
      console.error("Error getting user data:", error);
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

  const handleStartFarming = () => {
    setTime(6 * 60 * 60);
    setIsFarming(true);
    setFarmingEnded(false);
  };

  const handleClaimPoints = async () => {
    try {
      const updateTotalQuery = query(
        collection(db, "users"),
        where("id", "==", user.id)
      );
      const result = await getDocs(updateTotalQuery);
      if (!result.empty) {
        const userDoc = result.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        await updateDoc(userRef, {
          totalSheepDawg: total + 100,
        });
      }
      setFarmingEnded(false);
    } catch (error) {
      console.error("Error updating total:", error);
    }
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
      {!isFarming && !farmingEnded ? (
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
          Claim 100 Points
        </button>
      )}
      <Navbar />
    </div>
  );
};

export default HomePage;
