import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <Route path="/Register" exact>
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
