import React from "react";
import classes from "./UpcomingEvents.module.css";
import Exhibition from "../Exhibition/Exhibition";
import { withRouter } from "react-router-dom";

const UpcomingEvents = (props) => {
  let cls = [];
  if (props.location.pathname === "/exhibitions") {
    cls.push(classes.Full);
    cls.push(classes.UpcomingEventsExhibition);
  } else {
    cls.push(classes.UpcomingEvents);
  }
  return (
    <div className={cls.join(" ")}>
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
      <Exhibition
        name="Nature Bazaar"
        location="Bangalore"
        startDate="05-02-2020"
        endDate="06-02-2020"
        spoc="Mahitosh Sasmal"
      />
      <Exhibition
        name="Nature Bazaar"
        location="Ahmedabad"
        startDate="05-15-2020"
        endDate="06-15-2020"
        spoc="Mahitosh Sasmal"
      />
    </div>
  );
};

export default withRouter(UpcomingEvents);
