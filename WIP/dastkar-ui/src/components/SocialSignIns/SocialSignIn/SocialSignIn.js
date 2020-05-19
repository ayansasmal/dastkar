import React from "react";
import classes from "./SocialSignIn.module.css";

const SocialSignIn = (props) => {
  const signInClasses = [];
  signInClasses.push(classes.SocialSignIn);
  signInClasses.push(classes[props.provider]);
  let icon = null;
  if (props.provider === "Facebook") {
    icon = (
      <ion-icon
        name="logo-facebook"
        className={classes[props.provider]}
      ></ion-icon>
    );
  }
  if (props.provider === "Google") {
    icon = (
      <ion-icon
        name="logo-google"
        className={classes[props.provider]}
      ></ion-icon>
    );
  }
  return (
    <div className={signInClasses.join(" ")}>
      {icon}
      <span className={classes.ProviderName}>{props.provider}</span>
    </div>
  );
};

export default SocialSignIn;
