import React from "react";
import classes from "./Artisan.module.css";

const Artisan = (props) => {
  return (
    <div className={classes.Artisan}>
      <div className={classes.Title}>
        <label>Name : </label>
        <span>{props.title}</span>
      </div>
      <div>{JSON.stringify(props)}</div>
    </div>
  );
};

export default Artisan;
