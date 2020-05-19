import React from "react";
import classes from "./Input.module.css";

const getInput = (props, type = "text") => {
  switch (type) {
    case "text":
    case "password":
      return <input className={classes.Input} {...props} />;
    default:
      return (
        <input className={classes.Input} type="text" placeholder="default" />
      );
  }
};

const Input = (props) => {
  let input = getInput(props, props.type);
  return input;
};

export default Input;
