import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  const btnClass = [classes.NavigationItem];
  const childClass = [classes.NavigationItem];
  const tooltip = props.toolTipText ? (
    <span className={classes.ToolTipText}>{props.toolTipText}</span>
  ) : null;
  let childLink = null;
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
    if (props.children) {
      childClass.push(classes.NavButton);
      childClass.push(classes.IconBorder);
      childClass.push(classes.ChildMenu)
      childLink = props.children.map((val) => {
        return (
          <div className={childClass.join(" ")}>
          <NavLink to={val.target} activeClassName={classes.active}>
            <ion-icon name={val.icon} />
            <span className={classes.ButtonText}>{val.name}</span>
          </NavLink>
        </div>
        );
      });
    }
    navLink = (
      <li className={btnClass.join(" ")}>
        <ion-icon name={props.icon} />
        <div className={classes.arrow}></div>
        <div className={classes.dropdownContent}>
          <NavLink className={classes.ChildMenuHeading} to={props.target}>{props.toolTipText}</NavLink>
          {childLink}
        </div>
      </li>
    );
  }
  return navLink;
};

export default NavigationItem;
