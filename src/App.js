import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import SignInStudent from './Components/Auth/SignIn/Student';
import SignInInstitute from './Components/Auth/SignIn/Institute';
import SignUpStudent from './Components/Auth/SignUp/Student';
import SignUpInstitute from './Components/Auth/SignUp/Institute';
import Homepage from './Components/Homepage';

function App() {
  return (
    <React.Fragment>
    <Router>
      <Switch>
        <Route path="/signInStudent" exact>
          <SignInStudent />
        </Route>
        <Route path="/signInInstitute" exact>
          <SignInInstitute />
        </Route>
        <Route path="/signUpStudent" exact>
          <SignUpStudent />
        </Route>
        <Route path="/signUpInstitute" exact>
          <SignUpInstitute />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>        
      </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
