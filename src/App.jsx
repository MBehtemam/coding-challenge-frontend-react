import React from 'react';
import { Provider } from 'react-redux';
import Store from './logic/Store';
import Routes from './components/Routes';
import Header from './components/Header/Header';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';

const App = () => (
  <Provider store={Store}>
    <Layout>
      <Header />
      <SearchBar />
      <Routes />
    </Layout>
  </Provider>
);
export default App;
