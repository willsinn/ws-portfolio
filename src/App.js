import React from "react";
import { Route, Switch, Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" />
        </Switch>
      </Router>
      hi
    </div>
  );
};

export default App;
