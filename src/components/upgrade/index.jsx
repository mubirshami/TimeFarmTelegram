import React from "react";
import "./index.css";
import Navbar from "../navbar";
import Button from "../button";
import Level1 from "../../assets/Level_01.png";
import Level2 from "../../assets/Level_02.png";
import Level3 from "../../assets/Level_03.png";
import Level4 from "../../assets/Level_04.png";
import Level5 from "../../assets/Level_05.png";

const Upgrade = () => {
  return (
    <div className="upgrade-container">
      <div className="clocks-section">
        <div className="clocks-option">
          <img
            class="watch-img"
            src={Level1}
            alt="Level 1 Dawg"
          />
          <div className="clock-title">Sand Clock</div>
          <div className="clock-tokens">x1 tokens every 4 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>Free</span>
          </div>
          <Button text="Selected" />
        </div>
        <div className="clocks-option">
          <img
            class="watch-img"
            src={Level2}
            alt="Level 2 Dawg"
          />
          <div className="clock-title">Level 2 Dawg</div>
          <div className="clock-tokens">x2 tokens every 4 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>1,000,000</span>
          </div>
          <Button text="Not Enough" icon={"https://img-tap-miniapp.chrono.tech/svg/oi_dollar_white.svg"} />
        </div>
        <div className="clocks-option">
          <img
            class="watch-img"
            src={Level3}
            alt="Level 3 Dawg"
          />
          <div className="clock-title">Level 3 Dawg</div>
          <div className="clock-tokens">x3 tokens every 4 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>1,500,000</span>
          </div>
          <Button text="Unavailable" />
        </div>
        <div className="clocks-option">
          <img
            class="watch-img"
            src={Level4}
            alt="Level 4 Dawg"
          />
          <div className="clock-title">Level 4 Dawg</div>
          <div className="clock-tokens">x5 tokens every 4 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>2,500,000</span>
          </div>
          <Button text="Unavailable" />
        </div>
        <div className="clocks-option">
          <img
            class="watch-img"
            src={Level5}
            alt="Level 5 Dawg"
          />
          <div className="clock-title">Level 5 Dawg</div>
          <div className="clock-tokens">x8 tokens every 4 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>4,000,000</span>
          </div>
          <Button text="Unavailable" />
        </div>
        {/* <div className="clocks-option">
          <img
            class="watch-img"
            src="https://img-tap-miniapp.chrono.tech/images/watch-marketplace/5.png"
            srcset="https://img-tap-miniapp.chrono.tech/images/watch-marketplace/5-2x.png 2x"
            alt="Joker Clock"
          />
          <div className="clock-title">Joker Clock</div>
          <div className="clock-tokens">x13 tokens every 5 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>5,000,000</span>
          </div>
          <Button text="Unavailable" />
        </div>
        <div className="clocks-option">
          <img
            class="watch-img"
            src="https://img-tap-miniapp.chrono.tech/images/watch-marketplace/6.png"
            srcset="https://img-tap-miniapp.chrono.tech/images/watch-marketplace/6-2x.png 2x"
            alt="Engine Clock"
          />
          <div className="clock-title">Engine Clock</div>
          <div className="clock-tokens">x20 tokens every 6 hours</div>
          <div className="clock-price">
            <img
              class="dollar-icon"
              src="https://img-tap-miniapp.chrono.tech/images/icons/dollar.svg"
              alt="dollar"
            />
            <span>6,000,000</span>
          </div>
          <Button text="Unavailable" />
        </div> */}
      </div>
      <Navbar />
    </div>
  );
};

export default Upgrade;
