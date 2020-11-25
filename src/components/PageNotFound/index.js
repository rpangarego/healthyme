import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Sorry, page not found.</h1>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default PageNotFound;
