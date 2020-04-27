import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("OPEN modal fx from Card.js");
    setIsOpen(true);
  };

  return (
    <div className="card" data-activity={data.category}>
      <div className="card-container">
        <div className="tag-container">
          <span className="tag">{data.category}</span>
        </div>
        <div className="activity-container">
          <h2 className="activity-name">{data.name}</h2>
          <div className="neighborhood">{data.neighborhood}</div>
          <a className="directions" href={data.directions}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </a>
          <button onClick={handleClick}>Open Modal</button>
          {isOpen ? (
            <Modal
              name={data.name}
              description={data.description}
              setIsOpen={setIsOpen}
            />
          ) : (
            ""
          )}
          {console.log("isOpen ", isOpen)}
        </div>
      </div>
    </div>
  );
};

export default Card;
