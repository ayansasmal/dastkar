import React from "react";
import classes from "./Exhibition.module.css";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

const Exhibition = (props) => {
  const duration = new Date(props.endDate) - new Date(props.startDate);
  const elapsed = new Date() - new Date(props.startDate);
  const pc = ((elapsed / duration) * 100).toFixed(2);
  return (
    <div className={classes.Exhibition}>
      <h4>
        {props.name}, {props.location}
      </h4>
      <div className={classes.Detail}>
        <div>
          <ion-icon name="calendar-outline" />
          <span>
            {props.startDate} to {props.endDate}
          </span>
        </div>
        <div>
          <ion-icon name="person-circle-outline" />
          <span>{props.spoc}</span>
        </div>
      </div>
      <ProgressBar status={pc} />
    </div>
  );
};

export default Exhibition;
