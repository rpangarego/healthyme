import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Sorry, page not found.</h1>
      <Link to="/" className="exercise-button">
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
