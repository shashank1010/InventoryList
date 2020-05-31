import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderComponent from './components/Header/Header.component';
import './App.scss';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        <Route path="/dashboard"></Route>
        <Route path="/:categoryId"></Route>

        <Route path="/page-not-found">
          Page Not found<br />
          <Link to="/Dash">Go to Dashboard</Link>
        </Route>
        <Route path="*" render={
            ({ location }) =>
                <Redirect
                    to={{
                    pathname: "/page-not-found",
                    state: { from: location, breadcrumb: false }
                    }}
                />
            }
        />
      </Switch>
    </Router>
  );
}

export default App;
