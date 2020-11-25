import React from "react";
import "./index.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Start Your Healthy Lifestyle</h1>

      <div className="home-content">
        <Link to="/exercises">
          <div className="menu">
            <h3>Exercises</h3>
            <ArrowRightAltIcon />
          </div>
        </Link>
        <Link to="/foods">
          <div className="menu">
            <h3>Healthy Foods</h3>
            <ArrowRightAltIcon />
          </div>
        </Link>
        <Link to="/bmi-calculator">
          <div className="menu">
            <h3>BMI Calculator</h3>
            <ArrowRightAltIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
