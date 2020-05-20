import React from "react";
import classes from "./UpcomingEvents.module.css";
import Exhibition from "../Exhibition/Exhibition";

const UpcomingEvents = (props) => {
  return (
    <div className={classes.UpcomingEvents}>
      <Exhibition
        name="Nature Bazaar"
        location="Pune"
        startDate="05-02-2020"
        endDate="06-02-2020"
        spoc="Mahitosh Sasmal"
      />
      <Exhibition
        name="Nature Bazaar"
        location="Delhi"
        startDate="05-15-2020"
        endDate="06-15-2020"
        spoc="Mahitosh Sasmal"
      />
    </div>
  );
};

export default UpcomingEvents;
