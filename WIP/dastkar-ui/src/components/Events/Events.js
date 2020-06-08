import React from "react";
import classes from "./Events.module.css";
import Exhibition from "../ExhibitionOutline/ExhibitionOutline";
import { withRouter } from "react-router-dom";

const Events = (props) => {
  let cls = [];
  cls.push(classes.UpcomingEvents);
  if (props.location.pathname === "/exhibitions") {
    cls.push(classes.Full);
  }

  return (
    <React.Fragment>
      <div className={cls.join(" ")}>
        <h3>{props.title}</h3>
        <Exhibition
          name="Nature Bazaar"
          location="Pune"
          startDate="05-15-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Delhi"
          startDate="05-15-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Bangalore"
          startDate="05-02-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Ahmedabad"
          startDate="05-15-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Pune"
          startDate="05-15-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Delhi"
          startDate="05-15-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Bangalore"
          startDate="05-02-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
        <Exhibition
          name="Nature Bazaar"
          location="Ahmedabad"
          startDate="06-10-2020"
          endDate="06-30-2020"
          spoc="Mahitosh Sasmal"
        />
      </div>
    </React.Fragment>
  );
};

export default withRouter(Events);
