import React from "react";
import "./Breadcrumb.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const Breadcrumb = ({ goBackText, backTo }) => {
  return (
    <div className="breadcrumb">
      <Link to={backTo ? backTo : "/"}>
        <ArrowBackIosIcon />
        <h5>{goBackText ? goBackText : "Back"}</h5>
      </Link>
    </div>
  );
};

export default Breadcrumb;
