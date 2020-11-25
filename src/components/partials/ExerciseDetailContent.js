import React from "react";
import "./ExerciseDetailContent.css";

const ExerciseDetailContent = ({
  imageURL,
  imageALT,
  exerciseName,
  exerciseDuration,
}) => {
  return (
    <div className="content-item">
      <img src={imageURL} alt={imageURL} />
      <div className="content-detail">
        <h3>{exerciseName}</h3>
        <p>{exerciseDuration}</p>
      </div>
    </div>
  );
};

export default ExerciseDetailContent;
