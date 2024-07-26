import React from "react";
import "./index.css";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const StakingPercent = () => {
    const navigate = useNavigate();
  return (
    <div className="staking-percent-container">
      <div className="step-one">
        <div className="step-one-text">Step 1 of 3</div>
        <div className="step-one-bar">
          <div className="step-one-bar-fill"></div>
        </div>
      </div>
      <div className="step-one-content">
        <div className="one-heading">Select the duration</div>
        <div className="one-sub-heading">
          The amount you stake will be locked until the term ends
        </div>
        <div className="duration">
          <div className="duration-option">
            <div className="duration-card">
              <img
                class="img"
                alt="gift-coin-yellow"
                width="96"
                height="96"
                src="https://img-tap-miniapp.chrono.tech/images/staking/gift-coin-yellow.png"
              />
              <div className="card-title">3 days</div>
              <div className="card-percentage">+3%</div>
            </div>
            <div className="duration-card">
              <img
                class="img"
                alt="gift-coin-orange"
                width="96"
                height="96"
                src="https://img-tap-miniapp.chrono.tech/images/staking/gift-coin-orange.png"
              />
              <div className="card-title">15 days</div>
              <div className="card-percentage">+10%</div>
            </div>
            <div className="duration-card">
              <img
                class="img"
                alt="gift-coin-purple"
                width="96"
                height="96"
                src="https://img-tap-miniapp.chrono.tech/images/staking/gift-coin-purple.png"
              />
              <div className="card-title">45 days</div>
              <div className="card-percentage">+35%</div>
            </div>
          </div>
        </div>
      </div>
      <Button text="Continue" onClick={() =>navigate("/staking-amount") } />
    </div>
  );
};

export default StakingPercent;
