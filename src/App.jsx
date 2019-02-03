import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './logic/Store';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
