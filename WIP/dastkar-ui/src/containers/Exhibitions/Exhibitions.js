import React from "react";
import classes from "./Exhibitions.module.css";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

const Exhibitions = (props) => {
  return (
    <div className={classes.Exhibitions}>
      <UpcomingEvents />
    </div>
  );
};

export default Exhibitions;
