import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Breadcrumb from "../partials/Breadcrumb";

const ExerciseCompleted = () => {
  return (
    <>
      <Breadcrumb goBackText="Home" />
      <div className="exercise-completed">
        <h1 className>Exercise Completed! 🎉</h1>

        <img
          src="http://localhost:3000/exercise-completed.webp"
          alt="Exercise completed!"
        />

        <div className="nav-buttons">
          <Link className="exercise-button" to="/exercises">
            More Exercise
          </Link>
          <Link className="exercise-button" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExerciseCompleted;
