import React from "react";
import classes from "./Dashboard.module.css";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

const Dashboard = (props) => {
  return (
    <div className={classes.Dashboard}>
      <UpcomingEvents />
    </div>
  );
};

export default Dashboard;
