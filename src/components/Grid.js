import React from "react";
import activities from "../data";
import Card from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faUtensils,
  faCocktail,
  faBinoculars,
  faShoppingCart,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Grid = ({ data }) => {
  return (
    <div className="app-container">
      <section>
        <div className="container-filters">
          <button className="button button--filter">
            <FontAwesomeIcon icon={faFireAlt} size="2x" />
          </button>
          <button className="button button--filter">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
          </button>

          <button className="button button--filter">
            <FontAwesomeIcon icon={faCocktail} size="2x" />
          </button>
          <button className="button button--filter">
            <FontAwesomeIcon icon={faBinoculars} size="2x" />
          </button>
          <button className="button button--filter">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </button>
        </div>
      </section>
      <section>
        <div className="grid">
          {activities.map((activity) => (
            <Card className="setInGrid" data={activity} name={activity.name}>
              <h4 className={activity.name}>here</h4>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Grid;
