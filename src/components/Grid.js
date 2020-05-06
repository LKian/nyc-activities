import React, { useState } from "react";
import data from "../data";
import Card from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faUtensils,
  faCocktail,
  faBinoculars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Grid = () => {
  const [activities, setActivities] = useState(data);
  const [activeCategory, setActiveCategory] = useState("");

  const handleButtonClick = (e) => {
    const categoryName = e.currentTarget.dataset.activity;
    setActiveCategory(categoryName);
    const filter = data.filter(
      (activity) => activity.category === categoryName
    );
    setActivities(filter);
  };

  return (
    <div className="app-container">
      <section>
        <div className="container-filters">
          <button
            style={{
              backgroundColor: activeCategory === "explore" ? "blue" : "white",
            }}
            className="button button--filter"
            data-activity="explore"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon icon={faFireAlt} size="2x" />
          </button>
          <button
            style={{
              backgroundColor: activeCategory === "eat" ? "blue" : "white",
            }}
            className="button button--filter button--eat"
            data-activity="eat"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon
              color={activeCategory === "eat" ? "#fff" : "#000"}
              icon={faUtensils}
              size="2x"
            />
          </button>

          <button
            style={{
              backgroundColor: activeCategory === "drink" ? "blue" : "white",
            }}
            className="button button--filter button--drink"
            data-activity="drink"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon
              color={activeCategory === "drink" ? "#fff" : "#000"}
              icon={faCocktail}
              size="2x"
            />
          </button>
          <button
            style={{
              backgroundColor: activeCategory === "see" ? "blue" : "white",
              color: "red",
            }}
            className="button button--filter button--see"
            data-activity="see"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon
              color={activeCategory === "see" ? "#fff" : "#000"}
              icon={faBinoculars}
              size="2x"
            />
          </button>
          <button
            style={{
              backgroundColor: activeCategory === "shop" ? "blue" : "white",
            }}
            className="button button--filter button--shop"
            data-activity="shop"
            onClick={handleButtonClick}
          >
            <FontAwesomeIcon
              color={activeCategory === "shop" ? "#fff" : "#000"}
              icon={faShoppingCart}
              size="2x"
            />
          </button>
        </div>
      </section>
      <section>
        <div className="grid">
          {activities &&
            activities.map((activity) => (
              <Card
                className="setInGrid"
                data={activity}
                name={activity.name}
                key={activity.name}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Grid;
