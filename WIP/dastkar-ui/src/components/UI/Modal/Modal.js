import React from "react";
import classes from "./Modal.module.css";
import { minimizeText } from "../../../utils/text-utils";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Modal}>
        <div className={classes.Header}>
          <div className={classes.Title}>
            <h3>{minimizeText(props.title, 35)}</h3>
          </div>
          <button className={classes.CloseButton} onClick={props.click}>
            x
          </button>
        </div>
        {props.children}
      </div>
      <div className={classes.ModalOverlay}></div>
    </React.Fragment>
  );
};

export default Modal;
