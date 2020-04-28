import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ name, neighborhood, description, directions, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal modal-is-open">
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} size="3x" />
      </button>
      <h3>{name}</h3>
      <hr />
      <p>{neighborhood}</p>
      <p>{description}</p>
      <a href={directions}>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
      </a>
    </div>
  );
};

export default Modal;
