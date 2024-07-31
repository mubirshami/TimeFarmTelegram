import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import HomeImage from "../../assets/Welcome page.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Icon } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import PetsIcon from "@mui/icons-material/Pets";

const HomePage = () => {
  const [time, setTime] = useState(6 * 60 * 60);
  const [isFarming, setIsFarming] = useState(false);
  const [farmingEnded, setFarmingEnded] = useState(false);
  const navigate = useNavigate();
  const [money, setMoney] = useState(110000);

  useEffect(() => {
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

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleStartFarming = () => {
    setTime(6 * 60 * 60);
    setIsFarming(true);
    setFarmingEnded(false);
  };

  const handleClaimPoints = () => {
    setMoney((prevMoney) => prevMoney + 100);
    setFarmingEnded(false);
  };

  return (
    <div className="farming-timer-container">
      <div className="top-icons">
        <div className="profile">
          <Icon className="profile-icon" component={AccountCircleIcon} />
        </div>
        <div className="upgrade-translate">
          <div className="upgrade-button" onClick={() => navigate("/upgrade")}>
            <Icon className="upgrade-icon" component={BoltIcon} />
            Upgrade
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
        {money.toLocaleString()}
      </h1>
      <div className="hourglass-container">
        <img src={HomeImage} alt="Welcome Dawg" className="welcome-dawg-image" />
      </div>
      {!isFarming && !farmingEnded ? (
        <button className="start-button" onClick={handleStartFarming}>
          Start Farming
        </button>
      ) : (
        <>
          <div className="farming-info">
            <p>Farming:<PetsIcon className="heading-paws-icon"/></p>
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
