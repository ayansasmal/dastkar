import React from "react";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../Header/NavigationItems/NavigationItems";

// import Logo from '../../Logo/Logo';
// import Backdrop from '../../UI/Backdrop/Backdrop';
// import Aux from '../../../hoc/Aux/Aux';

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    // <Aux>
    //   <Backdrop show={props.open} clicked={props.closed} />

    // </Aux>
    <div className={attachedClasses.join(" ")} onClick={props.closed}>
      <nav>
        <h1 className={classes.Heading}>Dastkar Billing System</h1>
        <NavigationItems type="primary" navType="button" />
      </nav>
    </div>
  );
};

export default SideDrawer;
