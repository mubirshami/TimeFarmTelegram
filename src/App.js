import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import Wallet from "./components/wallet";
import Tasks from "./components/tasks";
import Earn from "./components/earn";
import Frens from "./components/frens";
import Staking from "./components/staking";
import StakingPercent from "./components/stakingPercent";
import StakingAmount from "./components/stakingAmount";
import ConfirmStaking from "./components/confirmStaking";
import AnswerQuestion from "./components/answerQuestion";
import Upgrade from "./components/upgrade";
import Activity from "./components/activity";
import Rules from "./components/rules";
import LoadingAnimation from "./components/loading";
import DailyRewards from "./components/dailyRewards";


function App() {
  return (
    <div className="App">
      <Router basename="/TimeFarmTelegram">
        <Routes >
          <Route path="/" element={<LoadingAnimation />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/frens" element={<Frens />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/staking-percent" element={<StakingPercent />} />
          <Route path="/staking-amount" element={<StakingAmount />} />
          <Route path="/confirm-staking" element={<ConfirmStaking />} />
          <Route path="/answer-question" element={<AnswerQuestion />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/daily-rewards" element={<DailyRewards />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
