import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../Header/NavigationItems/NavigationItems";
import { withRouter } from "react-router-dom";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  let primaryClasses = [classes.Row, classes.DesktopOnly];
  let secondaryNav = null;
  if (props.location.pathname !== "/") {
    primaryClasses.push(classes.Shadow);
    secondaryNav = (
      <div className={classes.Row}>
        <NavigationItems
          type="secondary"
          subType="exhibitions"
          navType="button"
        />
      </div>
    );
  }
  return (
    <div className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav>
        <div className={primaryClasses.join(" ")}>
          <h1 className={classes.Heading}>Dastkar Billing System</h1>
          <NavigationItems type="primary" navType="icons" />
        </div>
        {secondaryNav}
      </nav>
    </div>
  );
};

export default withRouter(Toolbar);
