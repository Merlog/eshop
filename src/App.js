import React from "react";
import HomePage from "./pages/homepage/homepage";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>Jackets PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/Jackets" component={JacketsPage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
