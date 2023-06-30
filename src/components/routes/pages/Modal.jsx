import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="backdrop"></div>
      <div className="modalContent">
        <div className="modalChildren">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
