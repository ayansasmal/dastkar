import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Modal} >
        <button className="close-button" id="close-button" onClick={props.click}>
          X
        </button>
        {props.children}
      </div>
      <div className={classes.ModalOverlay} id="modal-overlay"></div>
    </React.Fragment>
  );
};

export default Modal;
