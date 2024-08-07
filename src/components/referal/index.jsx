import React from "react";
import { useNavigate } from "react-router-dom";

const Referral = () => {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate("/home");
  };
  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="referral-container">
      <div className="referral-heading">Enter Referral Code</div>
      <div className="referral-desc">
        Enter the referral code of the user who invited you. You can skip this
        step if you don't have one.
      </div>
      <div className="referral-input-container">
        <input
          type="text"
          placeholder="Enter referral code"
          className="referral-input"
        />
        <button className="referral-button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="referral-skip-button" onClick={handleSkip}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default Referral;
