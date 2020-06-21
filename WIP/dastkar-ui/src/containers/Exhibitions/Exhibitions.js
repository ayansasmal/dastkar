import React from "react";
import classes from "./Exhibitions.module.css";
import Events from "../../components/Events/Events";
import Input from "../../components/UI/Input/Input";

const Exhibitions = (props) => {
  return (
    <div className={classes.Exhibitions}>
      <div className={classes.Header}>
        <div className={classes.Title}>
          <h3>Exhibtion Planner</h3>
          <div className={classes.SearchLarge}>
            <div className={classes.SearchIcon}><ion-icon name="search-outline"></ion-icon></div>
            <div className={classes.SearchField}><Input type="text" placeholder="Search by name..." /></div>
          </div>
        </div>
      </div>
      <div className={classes.SearchSmall}>
            <div className={classes.SearchIcon}><ion-icon name="search-outline"></ion-icon></div>
            <div className={classes.SearchField}><Input type="text" placeholder="Search by name..." /></div>
          </div>
      <div className={classes.ExhibitionRow}>
        <Events title="Ongoing Exhibitions" />
      </div>
      <div className={classes.ExhibitionRow}>
        <Events title="Upcoming Exhibitions" />
      </div>
    </div>
  );
};

export default Exhibitions;
