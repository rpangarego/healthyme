import React, { useEffect, useState } from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
import SearchIcon from "@material-ui/icons/Search";
import FoodMenu from "../partials/FoodMenu";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/v1/foods")
      .then((response) => {
        setFoods([response.data.foods]);
        setIsLoading(false);
      })
      .then(() => console.log(foods));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const showMoreFoods = () => {
  //   console.log("Hello!!!");
  // };

  return (
    <>
      <Breadcrumb goBackText="Home" />
      <div className="foods">
        <h1>Healthy Foods</h1>
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Type something here..."
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* food contents */}
        {
          // if there's no data yet then show loading component
          isLoading && foods.length < 1 ? (
            <div className="loading-foods">
              <CircularProgress />
            </div>
          ) : (
            <div className="content-wrapper">
              {foods[0].map((food) => (
                <FoodMenu
                  key={food._id}
                  imageURL={food.imageURL}
                  foodTitle={food.foodName}
                  foodDescription={food.description}
                  cookingDuration={food.cookingTime}
                  foodPortion={food.portion}
                  foodID={food._id}
                />
              ))}
            </div>
          )
        }

        {/* !isLoading && (
             <button className="show-more-foods" onClick={showMoreFoods}>
             Show more foods
           </button>) */}
      </div>
    </>
  );
};

export default Foods;
