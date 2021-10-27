import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AdminLogin from "./Components/Auth/AdminLogin";
import Homepage from "./Components/Homepage";
import Dashboard from "./Components/Dashboard/Dashboard";

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
          <Route path="/admin" exact>
            <AdminLogin />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
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
