import React, { useState } from "react";
import "../App.css";

const Modal = ({ name, description }) => {
  const [isClosed, setisClosed] = useState(false);

  const closeModal = () => {
    console.log("Close modal fx from within Modal.js");
    //   setModal(false);
  };

  return (
    <div className="modal">
      <button onClick={closeModal}>XXX</button>
      <h3>{name}</h3>

      <p>{description}</p>
    </div>
  );
};

export default Modal;
