import React, { useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import Breadcrumb from "../partials/Breadcrumb";

const ExerciseStart = ({ location }) => {
  const history = useHistory();
  let [progress, setProgress] = useState(0);

  let exerciseURI = location.pathname.split("/");
  exerciseURI = `/${exerciseURI[1]}/${exerciseURI[2]}`;

  const handleProgress = () => {
    if (progress >= 100) history.push(exerciseURI + "/completed");
    setProgress(progress + 50);
  };

  return (
    <>
      <Breadcrumb backTo={exerciseURI} />
      <div className="exercise-start">
        <div className="exercise-playing-info">
          <h1 className="title">Abs & Obliques</h1>

          <h2 className="exercise-subtitle">AB Stretch</h2>
          <p>Next: Spiderman Pushups</p>
          <h3 className="exercise-timer">00:30</h3>
        </div>

        <div className="exercise-playing-animate">
          <img
            src="/burpees-exercise.gif"
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
