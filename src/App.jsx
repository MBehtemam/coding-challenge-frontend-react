import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './logic/Store';

class App extends Component {
  render() {
    return <Provider store={Store} />;
  }
}

export default App;
