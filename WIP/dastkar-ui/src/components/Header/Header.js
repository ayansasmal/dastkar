import React from "react";
import classes from "./Header.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

const Header = () => {
  return (
    <header className={classes.Header}>
      <nav>
        <div className={classes.Row}>
          <h1 className={classes.Heading}>Dastkar Billing System</h1>
          <NavigationItems />
        </div>
      </nav>
    </header>
  );
};

export default Header;
