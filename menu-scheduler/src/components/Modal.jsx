import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Dish Details"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {children}
      <button onClick={onClose} style={{ marginTop: "10px" }}>
        Close
      </button>
    </ReactModal>
  );
};

export default Modal;