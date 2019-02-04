import React, { Fragment } from 'react';
import SearchBar from '../SearchBar';
import IncidentsGrid from '../IncidentsGrid';
const IndexPage = () => (
  <Fragment>
    <SearchBar />
    <IncidentsGrid />
  </Fragment>
);
export default IndexPage;
