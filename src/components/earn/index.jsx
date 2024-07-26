import React from "react";
import Navbar from "../navbar";
import "./index.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Earn = () => {
  const navigate = useNavigate();
  return (
    <div className="earn-container">
      <h1 className="main-heading">Earn</h1>
      <div className="main-content">
        <div className="earning-tab" onClick={() => {navigate("/staking")}}>
          {/* <img
            src="https://img-tap-miniapp.chrono.tech/images/icons/earn-staking-icon.svg"
            alt="earn-staking-icon-active"
          /> */}
          <span className="icons-style">          <FaArrowTrendUp/>
          </span>
          <div className="tab-info">
            <div className="tab-heading">Staking</div>
            <div>
              Lock up a portion of your digital assets for a specific period to
              earn rewards
            </div>
          </div>
        </div>
        <div className="earning-tab"onClick={() => {navigate("/answer-question")}}>
          {/* <img
            src="https://img-tap-miniapp.chrono.tech/images/icons/earn-oracle-icon.svg"
            alt="earn-oracle-icon"
          /> */}
          <span className="icons-style">           <FaCalendar/>
          </span>
          <div className="tab-info">
            <div className="tab-heading">Time Answer</div>
            <div>
              Answer questions, guess the dates and claim rewards daily.
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Earn;
