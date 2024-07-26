import React from "react";
import "./index.css";
import Button from "../button";
import { Link } from "react-router-dom";

const StakingAmount = () => {
  return (
    <div className="staking-amount-container">
      <div className="step-two">
        <div className="step-two-text">Step 2 of 3</div>
        <div className="step-two-bar">
          <div className="step-two-bar-fill"></div>
        </div>
      </div>
      <div className="step-two-content">
        <div className="step-two-heading">Enter the amount</div>
        <div className="step-two-sub-heading">
          Select the amount of SECONDS you want to stake
        </div>
        <div className="amount">
          <div className="title">
            <div className="title-text">Amount</div>
            <span className="steric">*</span>
          </div>
          <div className="input-amount">
            <img
              src="https://img-tap-miniapp.chrono.tech/svg/dollar-black.svg"
              alt="dollar-black"
            />
            <input
              type="text"
              className="input"
              placeholder="0"
              inputMode="numeric"
            />
          </div>
          <div className="available-seconds">Available SECONDS: 0</div>
        </div>
      </div>
      <div className="percentages">
        <div className="percentage-option">25%</div>
        <div className="percentage-option">50%</div>
        <div className="percentage-option">75%</div>
        <div className="percentage-option">MAX</div>
      </div>
      <Link to={"/confirm-staking"}>
      <Button text="Continue"/>
      </Link>
    </div>
  );
};

export default StakingAmount;
