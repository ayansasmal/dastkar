import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  const navItems = {
    primary: [
      { target: "/dashboard", icon: "home-outline", toolTipText: "Dashboard" },
      {
        target: "/exhibitions",
        icon: "calendar-outline",
        toolTipText: "Manage Exhibition",
        child :[
          {
            target: "/exhibitions/plan",
            icon: "home-outline",
            name: "Exhibtion Planner",
          },
          {
            target: "/exhibitions/modify",
            icon: "calendar-outline",
            name: "Modify Exhibition",
          },
          { target: "/", icon: "card-outline", name: "Manage Billing" },
        ]
      },
      {
        target: "/artisans",
        icon: "people-outline",
        toolTipText: "Manage Artisan",
      },
      { target: "/", icon: "card-outline", toolTipText: "Manage Billing" },
      {
        target: "/",
        icon: "log-in-outline",
        toolTipText: "Login",
      },
      {
        target: "/",
        icon: "person-circle-outline",
        toolTipText:"My Account",
        child:[
          {
            target: "/exhibitions/plan",
            icon: "home-outline",
            name: "Exhibtion Planner",
          },
          {
            target: "/exhibitions/modify",
            icon: "calendar-outline",
            name: "Modify Exhibition",
          },
          { target: "/", icon: "card-outline", name: "Manage Billing" },
        ]
      },
    ],
    secondary: {
      artisans:[{
        target: "/artisans/add",
        icon: "people-outline",
        toolTipText: "Manage Artisan",
      }],
      dashboard:[],
      exhibitions: [
        {
          target: "/exhibitions/plan",
          icon: "home-outline",
          toolTipText: "Plan Exhibitions",
        },
        {
          target: "/exhibitions/modify",
          icon: "calendar-outline",
          toolTipText: "Manage Exhibition",
        },
        { target: "/", icon: "card-outline", toolTipText: "Manage Billing" },
      ],
    },
  };
  let navs = navItems[props.type ? props.type : "primary"];
  let navType = props.navType;
  if (props.type === "secondary") {
    navs = navItems.secondary[props.subType];
    navType = "button";
  }
  let navigationLinks = navs.map((item) => (
    <NavigationItem
      key={item.icon}
      target={item.target}
      icon={item.icon}
      toolTipText={item.toolTipText}
      type={navType}
      children={item.child}
    />
  ));
  return <ul className={classes.NavigationItems}>{navigationLinks}</ul>;
};

export default NavigationItems;
