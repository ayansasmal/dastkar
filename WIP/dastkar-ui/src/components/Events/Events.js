import React from "react";
import classes from "./Events.module.css";
import ExhibitionOutline from "../ExhibitionOutline/ExhibitionOutline";
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
        <h3 className={classes.Heading}>{props.title}</h3>
        <div className={classes.Carousel}>
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Pune"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Delhi"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Bangalore"
            startDate="05-02-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Ahmedabad"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Pune"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Delhi"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Bangalore"
            startDate="05-02-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Ahmedabad"
            startDate="06-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Events);
