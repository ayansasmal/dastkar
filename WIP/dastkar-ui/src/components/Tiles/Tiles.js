import React from "react";
import classes from "./Tiles.module.css";
import Tile from "../UI/Tile/Tile";

const Tiles = (props) => {
    const tileData = props.data.map((tile, index) => {
        return <Tile key={index} {...tile} clicked={props.clicked} id={tile.uniqueName}/>;
    });
  return (
    <div className={classes.Tiles}>
      {tileData}
    </div>
  );
};

export default Tiles;
