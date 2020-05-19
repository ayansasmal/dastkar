import React from "react";
import classes from "./SocialSignIns.module.css";
import SocialSignIn from "./SocialSignIn/SocialSignIn";

const SocialSignIns = (props) => {
  return (
    <div className={classes.SocialSignIns}>
      <SocialSignIn provider="Google" />
      <SocialSignIn provider="Facebook" />
    </div>
  );
};
export default SocialSignIns;
