import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  const btnClass = [classes.NavigationItem];
  const tooltip = props.toolTipText ? (
    <span className={classes.ToolTipText}>{props.toolTipText}</span>
  ) : null;

  let navLink = null;
  if (props.type === "button") {
    const text = props.toolTipText ? (
      <span className={classes.ButtonText}>{tooltip}</span>
    ) : null;
    btnClass.push(classes.NavButton);
    if (props.toolTipText) {
      btnClass.push(classes.IconBorder);
    }
    navLink = (
      <li className={btnClass.join(" ")}>
        <NavLink to={props.target} activeClassName={classes.active}>
          <ion-icon name={props.icon} />
          {text}
        </NavLink>
      </li>
    );
  } else {
    btnClass.push(classes.NavIcon);
    navLink = (
      <li className={btnClass.join(" ")}>
        <NavLink to={props.target} activeClassName={classes.active}>
          <ion-icon name={props.icon} />
          {tooltip}
        </NavLink>
      </li>
    );
  }
  return navLink;
};

export default NavigationItem;
