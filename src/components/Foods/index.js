import React from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
import SearchIcon from "@material-ui/icons/Search";
import FoodMenu from "../partials/FoodMenu";

const Foods = () => {
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
        <div className="content-wrapper">
          <FoodMenu
            imageURL="/homer-simpson.png"
            foodTitle="Pizza with pepperoni and mozarella and some loooooo nnnnggggg title"
            foodDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui consequuntur nam aspernatur ullam illo cupiditate aliquid rerum ipsa dolorum perferendis! Dolorum odio vero possimus nemo nam quaerat officia aspernatur?"
            cookingDuration="4 Minutes"
            foodPortion="8"
            foodID="1234567890"
          />
          <FoodMenu
            imageURL="/homer-simpson.png"
            foodTitle="Pizza with pepperoni and mozarella and so"
            foodDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui consequuntur nam aspernat"
            cookingDuration="4 Minutes"
            foodPortion="8"
            foodID="1234567890"
          />
          <FoodMenu
            imageURL="/homer-simpson.png"
            foodTitle="Pizza with pepperoni and mozarella and some loooooo nnnnggggg title moree longgg"
            foodDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, qui conseqsimus nemo nam quaerat officia aspernatur?"
            cookingDuration="4 Minutes"
            foodPortion="8"
            foodID="1234567890"
          />
        </div>
      </div>
    </>
  );
};

export default Foods;
