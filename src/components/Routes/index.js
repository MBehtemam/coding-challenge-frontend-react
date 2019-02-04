import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from '../Layout/IndexPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <IndexPage />} />
      <Route path="/case/:id" component={() => <span>Detail</span>} />
    </Switch>
  </Router>
);
export default Routes;
