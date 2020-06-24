import React, { useState } from "react";
import classes from "./EditableLabel.module.css";
import { minimizeText } from "../../../utils/text-utils";

const EditableLabel = (props) => {
  const [isBeingEdited, setBeingEdited] = useState(false);
  const [value, setValue] = useState(props.value);
  const [isValid, setValid] = useState(true);

  const inputTag = () => {
    if (props.type && props.type.toLowerCase() === "textarea") {
      return (<textarea
        value={value}
        className={classes.InputTextArea}
        hidden={!isBeingEdited}
        onChange={updateValue}
      />);
    }
    return (
      <input
        type="text"
        value={value}
        className={classes.InputTextBox}
        hidden={!isBeingEdited}
        onChange={updateValue}
      />
    );
  };

  const toggleEdit = () => {
    setBeingEdited(!isBeingEdited);
  };

  const updateValue = (event) => {
    setValue(event.target.value);
    if (typeof props.validationHandler === "function") {
      setValid(props.validationHandler(event.target.value));
    }
  };

  const acceptChange = () => {
    toggleEdit();
    props.updateHandler(value);
  };

  const rejectChange = () => {
    setValue(props.value);
    toggleEdit();
  };

  return (
    <div className={classes.EditableLabel}>
      <label className={classes.Label}>{props.label}</label>
      <div className={classes.Value}>
        <span className={classes.ValueSpan} hidden={isBeingEdited}>
          {minimizeText(value, 75)}
        </span>
        {inputTag()}
      </div>
      <div className={classes.IconSet}>
        <div
          className={classes.Edit}
          onClick={toggleEdit}
          hidden={isBeingEdited}
        >
          <ion-icon name="pencil-outline"></ion-icon>
        </div>
        <div
          className={classes.Accept}
          onClick={acceptChange}
          hidden={!isBeingEdited || !isValid}
        >
          <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <div
          className={classes.Reject}
          onClick={rejectChange}
          hidden={!isBeingEdited}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default EditableLabel;
