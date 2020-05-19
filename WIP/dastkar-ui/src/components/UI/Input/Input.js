import React from "react";
import classes from "./Input.module.css";

const getInput = (props, type = "text") => {
  switch (type) {
    case "text":
    case "password":
      return <input {...props} />;
    default:
      return <input type="text" placeholder="default" />;
  }
};

const Input = (props) => {
  let input = getInput(props, props.type);
  return input;
};

export default Input;
