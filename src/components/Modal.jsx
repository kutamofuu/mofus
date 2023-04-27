import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, tomos, description, cover }) => {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <>
      <div className="modal" style={modalStyle}>
        <head className="modal-header">
          <span className="modal-close" onClick={onClose}></span>
          <h2 className="modal-name">{title}</h2>
          <p className="modal-description">{description}</p>
          <img src={cover} alt="" />
        </head>
        <ul className="manga-list">
          {tomos.map((direccion, index) => (
            <li key={index}>
              <a href={direccion.direccion}>Tomo {direccion.tomo}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Modal;
