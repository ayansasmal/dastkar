import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Modal}>
        <div className={classes.Header}>
          <div className={classes.Title}>
            <h3>{props.title}</h3>
          </div>
          <button className={classes.CloseButton} onClick={props.click}>
            X
          </button>
        </div>
        {props.children}
      </div>
      <div className={classes.ModalOverlay}></div>
    </React.Fragment>
  );
};

export default Modal;
