import React from "react";
import classes from "./Exhibitions.module.css";
import Events from "../../components/Events/Events";

const Exhibitions = (props) => {
  return (
    <div className={classes.Exhibitions}>
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
