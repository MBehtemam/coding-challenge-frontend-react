import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IndexPage from '../Layout/IndexPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/page/:page" component={IndexPage} />
      <Route exact path="/case/:id" component={() => <span>Detail</span>} />
      <Redirect path="/" to="/page/1" />
    </Switch>
  </Router>
);
export default Routes;
