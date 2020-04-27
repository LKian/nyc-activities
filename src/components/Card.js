import React from "react";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => (
  <div className="card">
    <div className="card-container">
      <div className="tag-container">
        <span className="tag">{data.category}</span>
      </div>
      <div className="activity-container">
        <h2 className="activity-name">{data.name}</h2>
        <div className="neighborhood">{data.neighborhood}</div>
        <a className="directions" href="{data.directions">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </a>
      </div>
    </div>
  </div>
);

export default Card;
