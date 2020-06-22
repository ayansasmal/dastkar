import React from "react";
import classes from "./Tile.module.css";

const Tile = (props) => {
  const getAddress = (address) => {
    if (address) {
      return `${address.street}, ${address.locality}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
    }
    return undefined;
  };

  const minimizeText = (text, length) => {
    if (text.length >= length) return `${text.substr(0, length - 3)}...`;
    return text;
  };

  return (
    <div className={classes.Tile} onClick={() => props.clicked(props.id)}>
      <div className={classes.Header}>
        <div className={classes.Title}>{minimizeText(props.title, 20)}</div>
      </div>
      <div className={classes.Details}>
        <div className={classes.Detail}>{props.contactNo}</div>
        <div className={classes.Detail}>{props.email}</div>
        <div className={classes.Detail}>{`${minimizeText(
          getAddress(props.address),
          45
        )}`}</div>
      </div>
    </div>
  );
};

export default Tile;
