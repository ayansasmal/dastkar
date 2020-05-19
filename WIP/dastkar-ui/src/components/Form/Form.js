import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  return <div className={classes.Form}>{props.children}</div>;
};

export default Form;
