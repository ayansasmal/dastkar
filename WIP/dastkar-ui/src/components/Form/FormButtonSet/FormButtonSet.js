import React from "react";
import classes from "./FormButtonSet.module.css";
import Button from "../../UI/Button/Button";

const FormButtonSet = (props) => {
  let buttons = [];
  if (props.setType === "login") {
    buttons.push(
      <Button
        key="submit"
        type="submit"
        name={props.submitName}
        onClick={props.onSubmit}
      />
    );
  } else {
    buttons.push(
      <Button
        key="cancel"
        type="cancel"
        name={props.cancelName}
        onClick={props.onClick}
      />
    );
    buttons.push(
      <Button
        key="submit"
        type="submit"
        name={props.submitName}
        onClick={props.onSubmit}
      />
    );
  }
  return <div className={classes.FormButtonSet}>{buttons}</div>;
};

export default FormButtonSet;
