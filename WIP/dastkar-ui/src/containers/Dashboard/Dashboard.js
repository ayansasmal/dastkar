import React from "react";
import classes from "./Dashboard.module.css";
import Login from "../../components/Login/Login";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

const Dashboard = (props) => {
  return (
    <div className={classes.Dashboard}>
      <UpcomingEvents />
      <Login />
    </div>
  );
};

export default Dashboard;
