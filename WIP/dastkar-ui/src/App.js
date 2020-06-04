import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Artisans from "./containers/Artisans/Artisans";
import Dashboard from "./containers/Dashboard/Dashboard";
import Exhibitions from "./containers/Exhibitions/Exhibitions";
import Home from "./containers/Home/Home";
import './axios-mock';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/artisans" exact component={Artisans}></Route>
          <Route path="/exhibitions" exact component={Exhibitions}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
