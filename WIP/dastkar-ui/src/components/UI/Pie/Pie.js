import React from "react";

const Pie = (props) => {
  const classes = ["c100", "center"];
  classes.push(`p${props.status}`);
  return (
    <div className={classes.join(" ")}>
      <span>{props.status}%</span>
      <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
      </div>
    </div>
  );
};

export default Pie;
