import React from "react";
import classes from "./Dashboard.module.css";
import Login from "../../components/Login/Login";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import axios from '../../axios';

const onLoginHandler = async (event) => {
  event.preventDefault();
  console.log("Login handler invoked");
  console.log("username", event.target.elements.username.value);
  console.log("password", event.target.elements.password.value);
  const loginResponse = await axios.post("/login",{username:event.target.elements.username.value, password:event.target.elements.password.value});
  console.log('Login Response', loginResponse);
};

const Dashboard = (props) => {
  return (
    <div className={classes.Dashboard}>
      <UpcomingEvents />
      <Login onSubmit={onLoginHandler} />
    </div>
  );
};

export default Dashboard;
