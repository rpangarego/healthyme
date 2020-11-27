import React, { useEffect, useState } from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

const FoodDetails = ({ location }) => {
  const [foodDetails, setFoodDetails] = useState(null);
  const foodID = location.pathname.split("/")[2];
  const foodDetailsURI = `http://localhost:9000/api/v1/foods/${foodID}/recipe`;

  useEffect(() => {
    Axios.get(foodDetailsURI)
      .then((response) => setFoodDetails({ data: response.data }))
      .then(console.log(foodDetails));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb backTo="/foods" />

      <div className="food-details">
        {foodDetails == null ? (
          <div className="loading-foods">
            <CircularProgress />
          </div>
        ) : (
          <>
            <img
              src={foodDetails.data.imageURL}
              alt={foodDetails.data.foodName}
              className="food-image"
            />

            <div className="food-info">
              <h1 className="food-name">{foodDetails.data.foodName}</h1>
              <div className="food-prep">
                <div>
                  <AccessTimeIcon />
                  <p>{foodDetails.data.cookingTime}</p>
                </div>
                <div>
                  <RestaurantIcon />
                  <p>{foodDetails.data.portion} Portions</p>
                </div>
              </div>

              <p className="food-details-description">
                {foodDetails.data.description}
              </p>

              <hr />

              <div>
                <h2 className="food-ingredients">Ingredients:</h2>
                <ul className="ingredients">
                  {foodDetails.data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <hr />

              <div>
                <h2 className="food-steps">Steps: </h2>
                <ul className="steps">
                  {foodDetails.data.steps.map((step, index) => (
                    <li key={index}>
                      <h4>Step {index + 1}</h4>
                      <p>{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FoodDetails;
