import React from "react";
import "./index.css";
import Navbar from "../navbar";

const Rules = () => {
  return (
    <div className="rules-container">
      <div className="rules-section">
        <div className="rules-heading">Rules</div>
        <div className="rules-description">
          <p>✨Sign Up for the Weekly $1,000 USDT Referral Contest✨</p>
          <p>Your referrals have played a huge role in this success.</p>
          <p>
            💰To spice things up, we’re launching the Weekly League of Time.
            Referral contest with a prize fund of 1000 USDT and 500K $SECOND for
            the top 20 winners!💰
          </p>
          <p>
            💰Anyone who refers 4 people or more in a week will receive an
            additional 100K $SECOND.💰
          </p>

          <p class="bold">📜 Rules</p>
          <ul>
            <li>
              Pool size is 1000 USDT and 50 mil{" "}
              <span class="row">
                <img
                  src="https://img-tap-miniapp.chrono.tech/svg/oi_dollar.svg"
                  alt="oi_dollar"
                />
                SECOND
              </span>
            </li>
            <li>
              Only first-level active referrals are counted; bots will not be
              considered;
            </li>
            <li>
              The competition runs weekly, ending every Sunday at midnight.
            </li>
          </ul>
          <p class="bold">💸 Reward distribution</p>
          <ul>
            <li>1st place: 400 USDT + 500K $SECOND</li>
            <li>2nd place: 200 USDT + 500K $SECOND</li>
            <li>3rd place: 100 USDT + 500K $SECOND</li>
            <li>4th-5th place: 50 USDT + 500K $SECOND</li>
            <li>6th-10th place: 20 USDT + 500K $SECOND</li>
            <li>11th-20th place: 10 USDT + 500K $SECOND</li>
          </ul>
          <p>Anyone who refers 4 people or more in a week will receive an additional 100K $SECOND. 🏆Think you’ve got what it takes to win? Start inviting friends now!</p>

        </div>
      </div>
        <Navbar />
    </div>
  );
};

export default Rules;
