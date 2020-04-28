import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("OPEN modal fx from Card.js");
    setIsOpen(true);
    window.addEventListener("keyup", handleEsc);
  };

  const handleEsc = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  return (
    <div className="card" data-activity={data.category}>
      <div className="card-container">
        <div className="tag-container">
          <span className={`tag tag-${data.category}`}>{data.category}</span>
        </div>
        <div className="activity-container">
          <h2 className="activity-name">{data.name}</h2>
          <div className="neighborhood">{data.neighborhood}</div>
          <a className="directions" href={data.directions}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </a>
          <a onClick={handleClick}>
            <FontAwesomeIcon icon={faPlus} size="2x" />
          </a>
          {isOpen ? (
            <Modal
              name={data.name}
              neighborhood={data.neighborhood}
              description={data.description}
              directions={data.directions}
              setIsOpen={setIsOpen}
            />
          ) : null}
          {console.log("isOpen ", isOpen)}
        </div>
      </div>
    </div>
  );
};

export default Card;
