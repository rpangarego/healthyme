//==========================================================//
// This app is designed and developed by Ronaldo Pangarego  //
// email: ronaldo.pangarego@gmail.com                       //
// github: github.com/rpangarego                            //
// checkout my portofolio --> rpangarego.netlify.app        //
//==========================================================//

import React, { useEffect, useState } from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
// import SearchIcon from "@material-ui/icons/Search";
import FoodMenu from "../partials/FoodMenu";
import { CircularProgress } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";

const Foods = () => {
  const [{ foods }] = useDataLayerValue();
  // const [searchInput, setSearchInput] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [loadStatus, setLoadStatus] = useState("");

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
      setLoadStatus("Idk why it takes so long to get the data 🤔");
    }, 4000);
  }, []);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log("Search query: ", searchInput);
  // };

  return (
    <>
      <Breadcrumb goBackText="Home" />
      <div className="foods">
        <h1>Healthy Foods</h1>
        {/* <div className="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Type something here..."
              value={searchInput}
              className="search-input"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <SearchIcon />
            </button>
          </form>
        </div> */}

        {/* food contents */}
        {
          // if there's no data yet then show loading component
          isLoading && foods.length < 1 ? (
            <div className="loading-foods">
              <CircularProgress />
              <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
                {loadStatus}
              </h4>
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
      </div>
    </>
  );
};

export default Foods;
