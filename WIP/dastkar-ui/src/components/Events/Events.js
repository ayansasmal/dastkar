import React, { useState } from "react";
import classes from "./Events.module.css";
import ExhibitionOutline from "../ExhibitionOutline/ExhibitionOutline";
import { withRouter } from "react-router-dom";

const Events = (props) => {
  let cls = [];
  cls.push(classes.UpcomingEvents);
  if (props.location.pathname === "/exhibitions") {
    cls.push(classes.Full);
  }

  const [classesChevron, setClassesChevron] = useState([classes.Chevron]);
  const [classesCarousel, setClassesCarousel] = useState([classes.Carousel]);

  const toggleCarousel = () => {
    let cls = [classes.Carousel];
    if(!classesCarousel.includes(classes.Hidden)){
      console.log('hiding');
      cls.push(classes.Hidden);
    } 
    setClassesCarousel(cls);
  }

  const clickChevron = () => {
    let cls = [classes.Chevron];
    if(!classesChevron.includes(classes.Rotate)){
      console.log('rotating');
      cls.push(classes.Rotate);
    } 
    toggleCarousel()
    setClassesChevron(cls);
  }

  return (
    <React.Fragment>
      <div className={cls.join(" ")}>
        <div  className={classes.Heading}>
          <h3>{props.title}</h3>
          <div className={classesChevron.join(' ')} onClick={clickChevron}>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
        </div>
        <div className={classesCarousel.join(' ')}>
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Pune"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Delhi"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Bangalore"
            startDate="05-02-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Ahmedabad"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Pune"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Delhi"
            startDate="05-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Bangalore"
            startDate="05-02-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
          <ExhibitionOutline
            name="Nature Bazaar"
            location="Ahmedabad"
            startDate="06-15-2020"
            endDate="06-30-2020"
            spoc="Mahitosh Sasmal"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Events);
