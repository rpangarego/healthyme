import React, { useState } from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";

const ExerciseStart = ({ location }) => {
  let [progress, setProgress] = useState(0);

  let backToURI = location.pathname.split("/");

  const handleProgress = () => {
    if (progress >= 100) return false;
    setProgress(progress + 10);
  };

  return (
    <>
      <Breadcrumb backTo={`/${backToURI[1]}/${backToURI[2]}`} />
      <div className="exercise-start">
        <div className="exercise-playing-info">
          <h1 className="title">Abs & Obliques</h1>

          <h2 className="exercise-subtitle">AB Stretch</h2>
          <p>Next: Spiderman Pushups</p>
          <h3 className="exercise-timer">00:30</h3>
        </div>

        <div className="exercise-playing-animate">
          <img
            src="http://localhost:3000/burpees-exercise.gif"
            alt="some alt"
            className="exercise-image"
          />

          <div className="timer-bar">
            <span
              className="exercise-progress"
              style={{ width: `${progress}%` }}
            ></span>
          </div>

          <button className="exercise-button" onClick={handleProgress}>
            PAUSE
          </button>
        </div>
      </div>
    </>
  );
};

export default ExerciseStart;
