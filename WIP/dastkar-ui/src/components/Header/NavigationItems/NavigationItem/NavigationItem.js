import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={classes.ToolTip}>
      <NavLink to={props.target} activeClassName={classes.active}>
        <ion-icon name={props.icon} />
        <span className={classes.ToolTipText}>{props.toolTipText}</span>
      </NavLink>
    </li>
  );
};

export default NavigationItem;
