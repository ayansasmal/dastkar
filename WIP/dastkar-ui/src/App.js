import React from "react";
import classes from "./App.module.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Exhibitions from "./containers/Exhibitions/Exhibitions";
import Artisans from "./containers/Artisans/Artisans";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main>
        <Switch>
          <Route path="/artisans" exact component={Artisans}></Route>
          <Route path="/exhibition" exact component={Exhibitions}></Route>
          <Route path="/" exact component={Dashboard}></Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
