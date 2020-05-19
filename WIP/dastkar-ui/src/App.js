import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
