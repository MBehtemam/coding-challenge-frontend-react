import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IndexPage from '../Pages/IndexPage';
import IncidentDetailPage from '../Pages/IncidentDetailPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/page/:page" component={IndexPage} />
      <Route exact path="/case/:id" component={IncidentDetailPage} />
      <Redirect path="/" to="/page/1" />
    </Switch>
  </Router>
);
export default Routes;
