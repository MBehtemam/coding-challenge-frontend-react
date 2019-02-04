import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QueryInput from './components/QueryInput';
import * as QueryActions from '../../logic/Actions/queryActions';

const Wrapper = styled.section`
  display: flex;
  min-height: 100px;
`;

const SearchBar = ({ setQuery, query }) => (
  <Wrapper>
    <QueryInput onBlur={e => setQuery(e.target.value)} defaultValue={query} />
  </Wrapper>
);
const mapStateToProps = state => ({
  query: state.query
});
const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(QueryActions.setQuery(query))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string
};
SearchBar.defaultProps = {
  query: '',
  setQuery: QueryActions.setQuery
};
