import React, { useState } from "react";
import "./index.css";
import Navbar from "../navbar";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tasks = [
    { id: 1, description: "Connect TON wallet", reward: "$250,000" },
    { id: 2, description: "Join to $NOTAI Channel", reward: "$150,000" },
    { id: 3, description: "Win Prize with HEXN", reward: "$100,000" },
    { id: 4, description: "Play monorix", reward: "$100,000" },
    { id: 5, description: "Follow Mashaverse on X", reward: "$100,000" },
  ];

  return (
    <div className="task-list-container">
      <div className="task-top">
        <div className="task-heading">Available Tasks</div>
        <div className="task-sub-heading">
          Complete any task and receive instant rewards!
        </div>
      </div>
      <div className="task-tabs">
        <button
          className={`task-tab ${activeTab === "Active" ? "active" : ""}`}
          onClick={() => setActiveTab("Active")}
        >
          Active
        </button>
        <button
          className={`task-tab ${activeTab === "Completed" ? "active" : ""}`}
          onClick={() => setActiveTab("Completed")}
        >
          Completed
        </button>
      </div>
      <div className="task-content">
        {activeTab === "Active" ? (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-desc">{task.description}</div>
                <div className="task-reward">{task.reward}</div>
                <button className="task-start-button">Start</button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="completed-message">
            <p>
              Congratulations! You have completed all the tasks, we will add new
              ones soon. Try to come back here later!
            </p>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default Tasks;
