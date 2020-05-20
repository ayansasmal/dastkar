import React from "react";
import classes from "./Exhibition.module.css";

const Exhibition = (props) => {
  const duration = new Date(props.endDate) - new Date(props.startDate);
  console.log(new Date(props.endDate), new Date(props.startDate), duration);
  const elapsed = new Date() - new Date(props.startDate);
  console.log(elapsed);
  const pc = ((elapsed / duration) * 100).toFixed(2);
  console.log("Percent done", pc);
  return (
    <div className={classes.Exhibition}>
      <h4>
        {props.name}, {props.location}
      </h4>
      <div>
        <ion-icon name="calendar-outline" />
        <span className={classes.Detail}>
          {props.startDate} to {props.endDate}
        </span>
      </div>
      <div>
        <ion-icon name="person-circle-outline" />
        <span className={classes.Detail}>{props.spoc}</span>
      </div>
      <div className={[classes.meter, classes.nostripes].join(" ")}>
        <span style={{ width: `${pc}%` }}></span>
      </div>
    </div>
  );
};

export default Exhibition;
