import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const btnClasses = [classes.Button];
  if (props.type === "cancel") btnClasses.push(classes.Cancel);
  if (props.type === "submit") btnClasses.push(classes.Submit);
  return <button className={btnClasses.join(" ")}>{props.name}</button>;
};

export default Button;

/*

https://coolors.co/f7d8aa-f5cc97-f4c084-f2b471-f0a85e-ef9c4c-ed9039-eb8426-ea7813-e86c00
*/
