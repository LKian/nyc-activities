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
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const BUTTONS = {
  explore: { icon: faFireAlt },
  eat: { icon: faUtensils },
  drink: { icon: faCocktail },
  see: { icon: faBinoculars },
  shop: { icon: faShoppingCart },
  coffee: { icon: faCoffee },
};

const CategoryButton = ({ id, icon, clicker }) => (
  <button
    onClick={clicker}
    className="button button--filter"
    data-activity={id}
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </button>
);

const Grid = () => {
  const [activities, setActivities] = useState(data);
  const [activeCategory, setActiveCategory] = useState("");

  const uniqueCategories = [];
  for (let eachCat in data) {
    if (uniqueCategories.indexOf(data[eachCat].category) !== -1) {
    } else {
      uniqueCategories.push(data[eachCat].category);
    }
  }
  // [explore, eat, drink, see, shop, coffee]

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
          {Object.keys(BUTTONS).map((key) => (
            <CategoryButton
              key={key}
              id={key}
              clicker={handleButtonClick}
              {...BUTTONS[key]}
            />
          ))}
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
