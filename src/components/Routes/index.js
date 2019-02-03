import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <span>Main</span>} />
          <Route path="/case/:id" component={() => <span>Detail</span>} />
        </Switch>
      </Router>
    );
  }
}
