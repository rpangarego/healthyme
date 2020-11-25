import React from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import ExerciseDetailContent from "../partials/ExerciseDetailContent";

const ExerciseDetails = () => {
  return (
    <div className="exercise-details">
      <Breadcrumb goBackText="Exercises" backTo="/exercises" />

      <div className="exercise-info">
        <h1>Abs & Obliques</h1>
        <div className="info-details">
          <div className="more-details">
            <h5>15</h5>
            <p>Minutes</p>
          </div>
          <div className="more-details">
            <h5>8</h5>
            <p>Exercises</p>
          </div>
        </div>

        <Link to="/exercises/123456/start-exercise" className="start-exercise">
          <PlayCircleOutlineIcon />
          Start Exercise
        </Link>

        <div className="exercise-content">
          <ExerciseDetailContent
            imageURL="/images/homer-simpson.png"
            imageALT="its a pic"
            exerciseName="AB Stretch"
            exerciseDuration="20sec"
          />
          <ExerciseDetailContent
            imageURL="/images/homer-simpson.png"
            imageALT="its a pic"
            exerciseName="Jumping Jacks"
            exerciseDuration="20sec"
          />
          <ExerciseDetailContent
            imageURL="/images/homer-simpson.png"
            imageALT="its a pic"
            exerciseName="Spiderman Push-ups"
            exerciseDuration="20sec"
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
