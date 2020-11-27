import React from "react";
import "./index.css";
import Breadcrumb from "../partials/Breadcrumb";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const FoodDetails = () => {
  return (
    <>
      <Breadcrumb backTo="/foods" />
      <div className="food-details">
        <img src="/homer-simpson.png" alt="" className="food-image" />

        <div className="food-info">
          <h1 className="food-name">
            Pizza with pepperoni and fresh mozarella and additional slice of
            lemon
          </h1>
          <div className="food-prep">
            <div>
              <AccessTimeIcon />
              <p>25 Minutes</p>
            </div>
            <div>
              <RestaurantIcon />
              <p>8 Portions</p>
            </div>
          </div>

          <p className="food-details-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            tempora necessitatibus natus! Distinctio molestiae non quam,
            temporibus velit dolore voluptatum rerum voluptate esse. Temporibus
            asperiores repellat, labore natus ad dolor. Ullam facere nulla vitae
            incidunt, similique quod eos iure. Maxime velit mollitia ducimus
            voluptatum sit incidunt odit, harum corporis at quaerat vitae
            explicabo nesciunt architecto officia.
          </p>

          <hr />

          <div>
            <h2 className="food-ingredients">Ingredients:</h2>
            <ul className="ingredients">
              <li>Chicken</li>
              <li>Meatballs</li>
              <li>Parsley</li>
              <li>90 ons of pork belly</li>
              <li>8pcs onion</li>
              <li>1000ml water</li>
            </ul>
          </div>

          <hr />

          <div>
            <h2 className="food-steps">Steps: </h2>
            <ul className="steps">
              <li>
                <h4>Step 1</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  esse vitae repellat similique sint sequi totam eveniet, ipsam
                  iure dolore dolores impedit, cum accusamus ipsa ducimus non
                  mollitia voluptate temporibus!
                </p>
              </li>
              <li>
                <h4>Step 2</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum adipisci sed qui eos minima. Exercitationem ratione
                  cupiditate harum dolore minus? Amet culpa rem cum excepturi
                  dolore fuga quae iusto eligendi. Facilis suscipit inventore,
                  quo nostrum voluptatum veniam, sequi ea, neque laudantium
                  officia doloribus illum eligendi impedit quisquam assumenda
                  nesciunt. Laboriosam et ab vel aliquam repellendus excepturi
                  cum alias neque voluptate.
                </p>
              </li>
              <li>
                <h4>Step 3</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  iure nesciunt quo praesentium nihil iusto reprehenderit quis
                  unde totam, error saepe aliquid ea soluta ex eaque non, atque
                  tempore. Minima?
                </p>
              </li>
              <li>
                <h4>Step 4</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
