import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Modal = ({
  name,
  neighborhood,
  description,
  image,
  directions,
  setIsOpen,
}) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal modal-is-open">
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} size="3x" />
      </button>
      <div className="modal-content">
        <h3>{name}</h3>
        <p>{neighborhood}</p>
        <a href={directions}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </a>
        <hr />
        <div className="modal-details">
          <img src={image} alt={name}></img>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
