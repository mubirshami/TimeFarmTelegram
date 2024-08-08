import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { collection, getDocs, updateDoc, doc, getDoc, query } from "firebase/firestore";
import PetsIcon from "@mui/icons-material/Pets";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../button";
import Navbar from "../navbar";
import "./index.css";
import { db } from "../../firebase";
import { useCtx } from "../../context/useContext";

const Tasks = () => {
  const { user, total, setTotal } = useCtx();
  const [activeTab, setActiveTab] = useState("Active");
  const [activeTask, setActiveTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      // Fetch all tasks from Firestore
      const tasksQuery = collection(db, "tasks");
      const result = await getDocs(tasksQuery);

      // Filter out tasks that have been completed by the current user
      const filteredTasks = result.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((task) => !task.completedBy.includes(user.id));

      setTasks(filteredTasks);
    } catch (error) {
      console.error("Error getting tasks:", error);
    }
  };

  const handleStartTask = (task) => {
    setActiveTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTask(null);
    setTaskDone(false);
    getTasks(); // Refresh tasks after closing the modal
  };

  const taskCompletion = async () => {
    if (activeTask) {
      window.open(activeTask.url, "_blank");
      await updateTaskCompletion(activeTask);
    }
  };

  const updateTaskCompletion = async (task) => {
    try {
      const taskquery = query(collection(db, "tasks"), where("id", "==", task.id));
      const result = await getDocs(taskquery);
      const taskData = result.docs[0].data();
      await updateDoc(taskData, {
        completedBy: [...taskData.completedBy, user.id],
      });
      setTaskDone(true);
    } catch (error) {
      console.error("Error updating task completion:", error);
    }
  };

  const claimPoints = async () => {
    if (taskDone) {
      await updateTotalSheepDawg(activeTask.reward);
      closeModal();
    }
  };

  const updateTotalSheepDawg = async (amount) => {
    try {
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, {
        totalSheepDawg: total + amount,
      });
      setTotal(total + amount);
    } catch (error) {
      console.error("Error updating total sheepdawg:", error);
    }
  };

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
                <img src={task.pic} alt="icon" className="task-icon" />
                <div className="task-desc">{task.description}</div>
                <div className="task-reward">
                  <PetsIcon className="task-reward-icon" />
                  {task.reward}
                </div>
                <button
                  className="task-start-button"
                  onClick={() => handleStartTask(task)}
                >
                  Start
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="completed-message">
            <p>
              Congratulations! You have completed all the tasks, we will add
              new ones soon. Try to come back here later!
            </p>
          </div>
        )}
      </div>
      {activeTask && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Task Details"
          className={`modal-task ${modalOpen ? "open" : ""}`}
          overlayClassName={`modal-overlay-task ${modalOpen ? "open" : "closed"}`}
        >
          <div className="modal-content-task">
            <CloseIcon className="close-button" onClick={closeModal} />
            <h2>{activeTask.description}</h2>
            <Button
              text="Start"
              onClick={taskCompletion}
              className="modal-start-button"
            />
            <div className="modal-task-reward">
              <PetsIcon className="modal-task-reward-icon" />
              {activeTask.reward}
            </div>
            <Button text="Claim" onClick={claimPoints} className="claim-button" />
          </div>
        </Modal>
      )}
      <Navbar />
    </div>
  );
};

export default Tasks;
