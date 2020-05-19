import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Row}>
        <div className={classes.Year}>
          <p>&copy; 2020</p>
        </div>
        <div>
          <ul className={classes.SocialLinks}>
            <li>
              <a href="/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.Row}>
        <div className={classes.FooterText}>
          <p>This site is under development. Please mind the mis alignment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
