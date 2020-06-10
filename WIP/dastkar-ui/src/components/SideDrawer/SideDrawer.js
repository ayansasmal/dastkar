import React from "react";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../Header/NavigationItems/NavigationItems";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={attachedClasses.join(" ")} onClick={props.closed}>
      <nav>
        <h3 className={classes.Heading}>Dastkar Billing System</h3>
        <NavigationItems type="primary" navType="button" />
      </nav>
    </div>
  );
};

export default SideDrawer;
