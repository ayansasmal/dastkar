import React from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={[classes.meter, classes.nostripes].join(" ")}>
      <span style={{ width: `${props.status}%` }}></span>
    </div>
  );
};

export default ProgressBar;
