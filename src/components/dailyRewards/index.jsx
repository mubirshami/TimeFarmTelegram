import React, { useState } from "react";
import "./index.css";
import Button from "../button";
import { Link } from "react-router-dom";
import BoltAnimation from "../../assets/animation.gif";
import PetsIcon from "@mui/icons-material/Pets";

const DailyRewards = () => {
  const [dayNumber, setDayNumber] = useState(35);

  return (
    <div className="daily-rewards-container">
      <div className="daily-rewards-animation">
        <img src={BoltAnimation} alt="Bolt Animation" className="reward-animation-style" />
      </div>
      <div className="rewards-heading">Your daily rewards</div>
      <div className="rewards-section">
        <div className="reward-item">
          <div className="reward-icon"><PetsIcon/></div>
          <div className="reward-amount">70</div>
          <div className="reward-label">Sheep Dawg Points</div>
        </div>
        <div className="reward-item">
          <div className="reward-icon">🎫</div>
          <div className="reward-amount">7</div>
          <div className="reward-label">Play Passes</div>
        </div>
      </div>
      <div className="reward-bottom-text">
        <p>Come back tomorrow for check-in day {dayNumber}</p>
        <p>Tip: Skipping a day resets your check-in.</p>
      </div>
      <div className="rewad-claim-button">
        <Link to="/home">
          <Button text="Continue" />
        </Link>
      </div>
    </div>
  );
};

export default DailyRewards;
