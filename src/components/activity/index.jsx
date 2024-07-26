import React from "react";
import "./index.css";
import Navbar from "../navbar";
const Activity = () => {
  return (
    <div className="leaderboard-container">
      <h1 className="main-heading">Leaderboard</h1>
      <div className="leaderboard-content">
        <div className="leaderboard-header">
          <h2>Leaderboard</h2>
        </div>
        <div className="leaderboard-rewards">
          <div className="reward">
            <span>Get crypto</span>
            <span className="amount">+1K USDT</span>
          </div>
          <div className="reward">
            <span>+</span>
            <span className="amount">50M$</span>
          </div>
        </div>
        <div className="details">
          <a href="#">More details &rarr;</a>
        </div>
        <div className="user-list">
          <div className="user">
            <span className="rank">1</span>
            <span className="name">Мені НТР ІІГ</span>
            <span className="points">60,959 frens</span>
          </div>
          <div className="user">
            <span className="rank">2</span>
            <span className="name">Dan</span>
            <span className="points">39,835 frens</span>
          </div>
          {/* Add more users as needed */}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Activity;
