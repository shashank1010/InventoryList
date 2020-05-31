import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import HeaderComponent from './components/Header/Header.component';
import DashboardComponent from './components/Dashboard/Dashboard.component';
import CategoryComponent from './components/Category/Category.component';
import ManageCategoriesComponent from './components/ManageCategories/ManageCategories.component';

import './App.scss';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container-fluid py-3">
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>

          <Route path="/dashboard">
            <DashboardComponent />
          </Route>
          <Route path="/manage-categories">
            <ManageCategoriesComponent />
          </Route>
          <Route path="/:categoryId">
            <CategoryComponent />
          </Route>

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
      </div>
    </Router>
  );
}

export default App;
