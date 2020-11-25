import React from "react";
import "./Header.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h3 className="logo">
          Healthy<span>Me</span>
        </h3>
      </Link>

      <Link to="/about">
        <IconButton>
          <HelpOutlineIcon fontSize="large" />
        </IconButton>
      </Link>
    </header>
  );
};

export default Header;
