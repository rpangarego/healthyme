import React from "react";
import "./FoodMenu.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { Link } from "react-router-dom";

const FoodMenu = ({
  imageURL,
  foodTitle,
  foodDescription,
  cookingDuration,
  foodPortion,
  foodID,
}) => {
  return (
    <div className="food-menu">
      <Link to={`foods/${foodID}/recipe`}>
        <img src={imageURL} alt={foodTitle} className="food-image" />
      </Link>
      <div className="food-info">
        <Link to={`foods/${foodID}/recipe`}>
          <h1 className="food-title">{foodTitle}</h1>
        </Link>
        <div className="food-preparation">
          <div className="food-duration">
            <AccessTimeIcon fontSize="small" />
            <p>{cookingDuration}</p>
          </div>
          <div className="food-portion">
            <RestaurantIcon fontSize="small" />
            <p>{foodPortion} Portions</p>
          </div>
        </div>
        <p className="food-description">{foodDescription}</p>
      </div>
    </div>
  );
};

export default FoodMenu;
