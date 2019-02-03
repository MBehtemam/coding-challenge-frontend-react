import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <span>Main</span>} />
      <Route path="/case/:id" component={() => <span>Detail</span>} />
    </Switch>
  </Router>
);
export default Routes;
