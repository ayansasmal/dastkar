import React from "react";
import classes from "./Home.module.css";
import Login from "../../components/Login/Login";
import axios from "../../axios";

const onLoginHandler = async (event) => {
  event.preventDefault();
  console.log("Login handler invoked");
  const loginResponse = await axios.post("/login", {
    username: event.target.elements.username.value,
    password: event.target.elements.password.value,
  });
  console.log("Login Response", loginResponse);
  if (loginResponse.status === 204) {
    console.log("redirect to dashboard");
    const roles = await axios.get("/roles");
    console.log(roles);
  }
};

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <Login onSubmit={onLoginHandler} />
    </div>
  );
};

export default Home;
