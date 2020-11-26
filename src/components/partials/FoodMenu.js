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
      <Link to="foods/12798384267463/recipe">
        <img src={imageURL} alt={foodTitle} className="food-image" />
      </Link>
      <div className="food-info">
        <Link to="foods/12798384267463/recipe">
          <h1 className="food-title">{foodTitle}</h1>
        </Link>
        <div className="food-preparation">
          <div className="food-duration">
            <AccessTimeIcon />
            <h4>{cookingDuration}</h4>
          </div>
          <div className="food-portion">
            <RestaurantIcon />
            <h4>{foodPortion} Portions</h4>
          </div>
        </div>
        <p className="food-description">{foodDescription}</p>
      </div>
    </div>
  );
};

export default FoodMenu;
