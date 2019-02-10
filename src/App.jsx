import React from 'react';
import { Provider } from 'react-redux';
import Store from './logic/Store';
import Routes from './components/Routes';
import Layout from './components/Layout';

const App = () => (
  <Provider store={Store}>
    <Layout>
      <Routes />
    </Layout>
  </Provider>
);
export default App;
