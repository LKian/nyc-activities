import React from "react";
import "../App.css";

const Modal = ({ name, description, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal">
      <button onClick={handleClick}>XXX</button>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Modal;
