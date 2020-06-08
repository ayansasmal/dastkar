import React from "react";
import classes from "./ExhibitionOutline.module.css";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

const ExhibitionOutline = (props) => {
  let progressBar = <div>Not yet started</div>;
  if (new Date() - new Date(props.startDate) >= 0) {
    const duration = new Date(props.endDate) - new Date(props.startDate);
    const elapsed = new Date() - new Date(props.startDate);
    const pc = ((elapsed / duration) * 100).toFixed(2);
    progressBar = <ProgressBar status={pc} />;
  } else {
    progressBar = <ProgressBar status="0" />;
  }

  return (
    <div className={classes.Exhibition}>
      <h4>{props.name}</h4>
      <div className={classes.Detail}>
        <div>
          <ion-icon name="location-outline" />
          <span className={classes.Location}>{props.location}</span>
        </div>
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
      {progressBar}
    </div>
  );
};

export default ExhibitionOutline;
