import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory()

import IndexPage from '../Layout/IndexPage';

const Routes = () => (
  <Router  history={history}>
    <Switch>
      <Route path="/" render={() => <IndexPage />} />
      <Route path="/case/:id" component={() => <span>Detail</span>} />
    </Switch>
  </Router>
);
export default Routes;
