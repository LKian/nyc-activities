import React, { useState } from "react";
import activities from "../data";
import Card from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faUtensils,
  faCocktail,
  faBinoculars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Grid = ({ data }) => {
  const [isMatch, setMatch] = useState();

  const handleButtonClick = (e) => {
    let clickedButton = e.currentTarget.dataset.activity;

    setMatch(clickedButton);
    {
      console.log("clicked on: ", clickedButton, " & is match: ", isMatch);
    }
  };

  return (
    <div className="app-container">
      <section>
        <div className="container-filters">
          <button
            className="button button--filter"
            data-activity="explore"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faFireAlt} size="2x" />
          </button>
          <button
            className="button button--filter button--eat"
            data-activity="eat"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faUtensils} size="2x" />
          </button>

          <button
            className="button button--filter button--drink"
            data-activity="drink"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faCocktail} size="2x" />
          </button>
          <button
            className="button button--filter button--see"
            data-activity="see"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faBinoculars} size="2x" />
          </button>
          <button
            className="button button--filter button--shop"
            data-activity="shop"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </button>
        </div>
      </section>
      <section>
        <div className="grid">
          {activities.map((activity) =>
            activity.category == isMatch ? (
              <Card
                className="setInGrid"
                data={activity}
                name={activity.name}
              />
            ) : null
          )}
        </div>
      </section>
    </div>
  );
};

export default Grid;
