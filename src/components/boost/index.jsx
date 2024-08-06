import React from "react";
import "./index.css";
import ComingSoonAnimation from "../../assets/coming-soon-animation.gif";
import Navbar from "../navbar";
import BoltAnimation from "../../assets/animation.gif";

const Boost = () => {
  return (
    <div className="boost-container">
      <div className="animation-heading">
        <div className="coming-soon-bolt">
          <img
            src={BoltAnimation}
            alt="Bolt Animation"
            className="boost-image-style"
          />
        </div>
        <div className="animation-description">
          Exciting New Feature Unveiling Soon: Stay Tuned!
        </div>
        <div className="coming-soon-second-bolt">
          <img
            src={BoltAnimation}
            alt="Bolt Animation"
            className="boost-image-style"
          />
        </div>
      </div>
      <div className="boost-animation">
        <img
          src={ComingSoonAnimation}
          alt="Bolt Animation"
          className="boost-animation-style"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Boost;
