import React from "react";
import classes from "./FormRow.module.css";

const FormRow = (props) => {
  let label = null;
  if (props.label) {
    label = (
      <label className={classes.Label} for={props.for}>
        {props.label}
      </label>
    );
  }
  return <div className={classes.FormRow}>{props.children}</div>;
};

export default FormRow;
