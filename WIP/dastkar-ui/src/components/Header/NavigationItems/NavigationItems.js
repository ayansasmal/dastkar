import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  const navItems = [
    {
      target: "/",
      icon: "calendar-outline",
      toolTipText: "Manage Exhibition",
    },
    { target: "/", icon: "people-outline", toolTipText: "Manage Artisan" },
    { target: "/", icon: "card-outline", toolTipText: "Manage Billing" },
    {
      target: "/",
      icon: "person-circle-outline",
      toolTipText: "Logout",
    },
  ];
  const navigationLinks = navItems.map((item) => (
    <NavigationItem
      key={item.icon}
      target={item.target}
      icon={item.icon}
      toolTipText={item.toolTipText}
    />
  ));
  return <ul className={classes.NavigationItems}>{navigationLinks}</ul>;
};

export default NavigationItems;
