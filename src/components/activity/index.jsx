import React from "react";
import "./index.css";
import Navbar from "../navbar";
import { Link } from "react-router-dom";
const Activity = () => {
  return (
    <div className="leaderboard-container">
      <h1 className="main-heading">Leaderboard</h1>
      <div className="leaderboard-content">
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
          <Link to={"/rules"}>More Details</Link>
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
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Activity;
