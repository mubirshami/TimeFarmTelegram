import React, { useState } from "react";
import Modal from "react-modal";
import Navbar from "../navbar";
import PetsIcon from "@mui/icons-material/Pets";
import "./index.css";
import Button from "../button";
import CloseIcon from "@mui/icons-material/Close";
import TelegramIcon from "../../assets/telegram-icon.png";
import XIcon from "../../assets/x-icon.png";
import YouTubeIcon from "../../assets/youtube-icon.png";
import InstaIcon from "../../assets/insta-icon.png";
import WalletIcon from "../../assets/wallet-icon.png";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [activeTask, setActiveTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskDone, setTaskDone] = useState(false);

  const tasks = [
    { id: 1, description: "Follow our Telegram Channel", reward: "5000", url:"https://telegram.org/",pic:TelegramIcon },
    { id: 2, description: "Follow us on X", reward: "5000", url:"https://twitter.com/?lang=en", pic:XIcon },
    { id: 3, description: "Follow us on YouTube", reward: "5000",  url:"https://www.youtube.com/",pic:YouTubeIcon },
    { id: 4, description: "Follow us on Instagram", reward: "5000", url:"https://www.instagram.com/", pic:InstaIcon },
    { id: 5, description: "Connect your wallet", reward: "5000", url:"https://telegram.org/",pic:WalletIcon },
  ];

  const handleStartTask = (task) => {
    setActiveTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTask(null);
    setTaskDone(false);
  };

  const taskCompletion = () => {
    window.open(activeTask.url, "_blank");
    setTaskDone(true);
  }

  const claimPoints = () => {
    if(taskDone) {
      closeModal();
    }
  }

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
                <img src={task.pic} alt="icon" className="task-icon"/>
                <div className="task-desc">{task.description}</div>
                <div className="task-reward"><PetsIcon className="task-reward-icon"/>{task.reward}</div>
                <button className="task-start-button" onClick={() => handleStartTask(task)}>Start</button>
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
      {activeTask && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Task Details"
          className={`modal-task ${modalOpen ? 'open' : ''}`}
          overlayClassName={`modal-overlay-task ${modalOpen ? 'open' : 'closed'}`}
        >
          <div className="modal-content-task">
            <CloseIcon className="close-button" onClick={closeModal}/>
            <h2>{activeTask.description}</h2>
            <Button text="Start" onClick={taskCompletion} className="modal-start-button"/>
            <div className="modal-task-reward">
              <PetsIcon className="modal-task-reward-icon" />
              {activeTask.reward}
            </div>
            <Button text="Claim" onClick={claimPoints} className="claim-button"/>
          </div>
        </Modal>
      )}
      <Navbar />
    </div>
  );
};

export default Tasks;
