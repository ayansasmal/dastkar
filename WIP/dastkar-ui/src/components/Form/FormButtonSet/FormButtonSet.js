import React from "react";
import classes from "./FormButtonSet.module.css";
import Button from "../../UI/Button/Button";

const FormButtonSet = (props) => {
  let buttons = [];
  if (props.setType === "login") {
    buttons.push(<Button type="submit" name={props.submitName} />);
  } else {
    buttons.push(<Button type="cancel" name={props.cancelName} />);
    buttons.push(<Button type="submit" name={props.submitName} />);
  }
  return <div className={classes.FormButtonSet}>{buttons}</div>;
};

export default FormButtonSet;
