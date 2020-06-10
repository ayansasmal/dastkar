import React, { useState } from "react";
import classes from "./Header.module.css";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const Header = (props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleSideBarHandler = () => {
    console.log("toggleSideBarHandler");
    if (sideBarOpen) {
      setSideBarOpen(!sideBarOpen);
    } else {
      setSideBarOpen(true);
    }
  };
  return (
    <header className={classes.Header}>
      <Toolbar drawerToggleClicked={toggleSideBarHandler} />
      <SideDrawer open={sideBarOpen} closed={toggleSideBarHandler} />
    </header>
  );
};

export default Header;
