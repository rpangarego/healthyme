import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Title from "../partials/Title";
import Breadcrumb from "../partials/Breadcrumb";

const Exercises = () => {
  return (
    <div className="exercises">
      <Breadcrumb />
      <Title title="Select Exercises" />

      <div className="exercises-content">
        <Link to="exercises/123456">
          <div className="exercise-option">
            <h3>Abs & Obliques</h3>
            <p>Lorem ipsum do something about your abs</p>
          </div>
        </Link>
        <Link to="exercises/123456">
          <div className="exercise-option">
            <h3>Chest</h3>
            <p>Lorem ipsum do something about your abs</p>
          </div>
        </Link>
        <Link to="exercises/123456">
          <div className="exercise-option">
            <h3>Legs</h3>
            <p>Lorem ipsum do something about your abs</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Exercises;
