import React, { useState } from 'react';
import './index.css';
import Navbar from '../navbar';

const Tasks = () => {
  const [selectedTab, setSelectedTab] = useState('active');

  const activeTasks = [
    { id: 1, name: 'Connect TON wallet', reward: '$250,000', type: 'start' },
    { id: 2, name: 'Join to $NOTAI Channel', reward: '$100,000', type: 'start' },
    { id: 3, name: 'Play Musk Empire now!', reward: '$100,000', type: 'play' },
    { id: 6, name: 'Win Prize with HEXN', reward: '$100,000', type: 'start' },
    { id: 7, name: 'Follow our CEO on X', reward: '$100,000', type: 'start' }
  ];

  const completedTasks = [
    { id: 4, name: 'Completed Task 1', reward: '$150,000', type: 'completed' },
    { id: 5, name: 'Completed Task 2', reward: '$200,000', type: 'completed' },
  ];

  return (
    <div className="task-list-container">
        <h1>Available Tasks</h1>
        <div>Complete any task and recieve instant rewards!</div>
      <div className="tabs">
        <button
          className={`tab ${selectedTab === 'active' ? 'selected' : ''}`}
          onClick={() => setSelectedTab('active')}
        >
          Active
        </button>
        <button
          className={`tab ${selectedTab === 'completed' ? 'selected' : ''}`}
          onClick={() => setSelectedTab('completed')}
        >
          Completed
        </button>
      </div>

      <div className="tasks">
        {selectedTab === 'active' &&
          activeTasks.map((task) => (
            <div key={task.id} className="task">
              <span>{task.name}</span>
              <span>{task.reward}</span>
              <button className="task-action">{task.type}</button>
            </div>
          ))}

        {selectedTab === 'completed' &&
          completedTasks.map((task) => (
            <div key={task.id} className="task">
              <span>{task.name}</span>
              <span>{task.reward}</span>
            </div>
          ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Tasks;
