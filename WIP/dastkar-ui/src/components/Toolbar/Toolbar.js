import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../Header/NavigationItems/NavigationItems";
import { withRouter } from "react-router-dom";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  let primaryClasses = [classes.Row, classes.DesktopOnly];
  return (
    <div className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav>
        <div className={primaryClasses.join(" ")}>
          <h1 className={classes.Heading}>Dastkar Billing System</h1>
          <NavigationItems type="primary" navType="icons" />
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Toolbar);
