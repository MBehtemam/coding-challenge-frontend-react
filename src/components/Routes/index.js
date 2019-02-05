import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IndexPage from '../Layout/IndexPage';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact path="/" to="/page/1" />
      <Route path="/page/:page" render={() => <IndexPage />} />
      <Route path="/case/:id" component={() => <span>Detail</span>} />
    </Switch>
  </Router>
);
export default Routes;
