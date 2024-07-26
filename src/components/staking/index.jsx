import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import "./index.css";

const Staking = () => {
  return (
    <div className="staking-container">
      <h1 className="main-heading">Staking</h1>
      <div className="main-description">
        Lock up a portion of your digital assets for a specific period to earn
        rewards
      </div>
      <img
        className="img"
        alt="welcome"
        src="https://img-tap-miniapp.chrono.tech/images/intro/welcome.png"
        srcset="https://img-tap-miniapp.chrono.tech/images/intro/welcome-2x.png 2x"
      ></img>
      <div className="main-button">
        <Link to="/staking-amount">
          <Button text="Start Staking" />
        </Link> 
      </div>
    </div>
  );
};

export default Staking;
