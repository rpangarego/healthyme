import React from "react";
import "./Breadcrumb.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const Breadcrumb = ({ goBackText }) => {
  return (
    <div className="breadcrumb">
      <Link>
        <ArrowBackIosIcon />
        <h5>{goBackText ? goBackText : "Back"}</h5>
      </Link>
    </div>
  );
};

export default Breadcrumb;
