import React from "react";
import classes from "./Dashboard.module.css";
import Events from "../../components/Events/Events";

const Dashboard = (props) => {
  return (
    <div className={classes.Dashboard}>
      <Events title="Ongoing Exhibitions"/>
    </div>
  );
};

export default Dashboard;
