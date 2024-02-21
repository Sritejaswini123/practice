// Speedometer.js

import React, { useState } from 'react';
import './App.css';

const App= () => {
  const [speed, setSpeed] = useState(0);

  const handleAccelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10);
    }
  };

  const handleApplyBrake = () => {
    if (speed > 0) {
      setSpeed(speed - 10);
    }
  };

  return (
    <div className="speedometer-container">
      <h2>Speedometer</h2>
      <img
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        alt="speedometer"
        className="speed-img"
      />
      <p> Min limit :0mph Max limit :200mph </p>
      <p className="speed-value">Speed: {speed} mph</p>
      <button className="speed-button" onClick={handleAccelerate}>
        Accelerate
      </button>
      <button className="speed-button" onClick={handleApplyBrake}>
        Apply Brake
      </button>
      {/* Add any additional visualization or styling for the speedometer here */}
    </div>
  );
};

export default App;
