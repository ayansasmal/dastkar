import React from "react";
import classes from "./ExhibitionOutline.module.css";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import Pie from "../UI/Pie/Pie";

const ExhibitionOutline = (props) => {
  let progressBar = <div>Not yet started</div>;
  let pie = null;
  if (new Date() - new Date(props.startDate) >= 0) {
    const duration = new Date(props.endDate) - new Date(props.startDate);
    const elapsed = new Date() - new Date(props.startDate);
    const pc = ((elapsed / duration) * 100).toFixed(0);
    progressBar = <ProgressBar status={pc} />;
    pie= <Pie status={pc}/>
  } else {
    progressBar = <ProgressBar status="0" />;
    pie= <Pie status="0"/>
  }

  return (
    <div className={classes.Exhibition}>
      <div className={classes.Pie}>{pie}</div>
      <div className={classes.Data}>
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
    </div>
  );
};

export default ExhibitionOutline;
