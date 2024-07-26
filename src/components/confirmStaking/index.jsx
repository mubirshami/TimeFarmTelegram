import React from "react";
import "./index.css";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const ConfirmStaking = () => {
  const navigate = useNavigate();
  return (
    <div className="confirm-staking-container">
      <div className="step-three">
        <div className="step-three-text">Step 3 of 3</div>
        <div className="step-three-bar">
          <div className="step-three-bar-fill"></div>
        </div>
      </div>
      <div className="step-three-content">
        <div className="step-three-heading">Confirm</div>
        <div className="earning-card">
          <div className="earning-card-heading">Staking Info</div>
          <div className="step-three-section">
            <div className="amount-text">Amount</div>
            <div className="amount-value">
              <img
                src="https://img-tap-miniapp.chrono.tech/svg/dollar-black.svg"
                alt="dollar-black"
              />
              <span>0</span>
            </div>
          </div>
          <div className="step-three-section">
            <div className="duration-text">Duration</div>
            <div className="duration-value">0 days</div>
          </div>
          <div className="step-three-section">
            <div className="interest-text">APR</div>
            <div className="interest-value">3%</div>
          </div>
          <div className="step-three-section">
            <div className="total-text">Earnings</div>
            <div className="total-value">
              <img
                src="https://img-tap-miniapp.chrono.tech/svg/dollar-black.svg"
                alt="dollar-black"
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
        <Button text="Stake" onClick={() => navigate("/staking")} />
    </div>
  );
};

export default ConfirmStaking;
