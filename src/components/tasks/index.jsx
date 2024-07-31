import React, { useState } from "react";
import "./index.css";
import Navbar from "../navbar";
import PetsIcon from "@mui/icons-material/Pets";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tasks = [
    { id: 1, description: "Follow our Telegram Chaneel", reward: "5000" },
    { id: 2, description: "Follow us on X", reward: "5000" },
    { id: 3, description: "Follow us on YouTube", reward: "5000" },
    { id: 4, description: "Follow us on Instagram", reward: "5000" }
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
                <div className="task-reward"><PetsIcon className="task-reward-icon"/>{task.reward}</div>
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
