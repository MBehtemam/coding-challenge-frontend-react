import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './logic/Store';
import Routes from './components/Routes';
import Header from './components/Header/Header';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Layout>
          <Header />
          <Routes />
        </Layout>
      </Provider>
    );
  }
}

export default App;
