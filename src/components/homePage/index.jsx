import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import HomeImage from "../../assets/Telegram Bot Welcome page.jpg";
import GameLoadingImage from "../../assets/Game loading page image.jpg";


const HomePage = () => {
  const [time, setTime] = useState(4 * 60 * 60);
  const [farming, setFarming] = useState(0);
  const [isFarming, setIsFarming] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isFarming) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        setFarming((prevFarming) => prevFarming + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isFarming]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleStartFarming = () => {
    setIsFarming(true);
  };

  return (
    <div className="farming-timer-container">
      <div className="top-icons">
        <div className="profile">
          <img
            src="https://img-tap-miniapp.chrono.tech/avatars/user-3-80.png"
            alt="Avatar"
            srcset="https://img-tap-miniapp.chrono.tech/avatars/user-3-180.png 2x"
          />
        </div>
        <div className="upgrade-translate">
          <div className="upgrade-button" onClick={() => navigate("/upgrade") }>
            <img
              src="https://img-tap-miniapp.chrono.tech/svg/bxs_zap.svg"
              alt="lightning"
            />
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
      <h1 className="money">$110,000</h1>
      {!isFarming ? (
        <button className="start-button" onClick={handleStartFarming}>
          Start Farming
        </button>
      ) : (
        <>
          <div className="hourglass-container">
            <img
              src={HomeImage}
              alt="Welcome Dawg"
              className="welcome-dawg-image"
            />
          </div>
          <div className="farming-info">
            <p>Farming: ${farming}</p>
            <img
              data-v-daf5de16=""
              src="https://img-tap-miniapp.chrono.tech/svg/oi_dollar_white.svg"
              alt="oi_dollar"
            ></img>
            <p>{formatTime(time)}</p>
          </div>
        </>
      )}
      <Navbar />
    </div>
  );
};

export default HomePage;
