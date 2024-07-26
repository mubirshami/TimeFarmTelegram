import React from "react";
import "./index.css";

const AnswerQuestion = () => {
  return (
    <div className="answer-container">
      <div className="image-placement">
        <img
          class="central-img"
          alt="white-crystal"
          src="https://img-tap-miniapp.chrono.tech/images/oracle/white-crystal.png"
          srcset="https://img-tap-miniapp.chrono.tech/images/oracle/white-crystal-x2.png 2x"
        ></img>
      </div>
      <div className="bottom-text">
        <div className="end-heading">
            You have already answered today's question
        </div>
        <div className="end-subheading">
            Come back tomorrow to claim a new reward
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestion;
