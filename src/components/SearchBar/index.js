import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QueryInput from './components/QueryInput';
import DatePicker from './components/DatePicker';
import * as QueryActions from '../../logic/Actions/queryActions';
import * as OccurredBeforeActions from '../../logic/Actions/occuredBeforeActions';

const Wrapper = styled.section`
  display: flex;
  min-height: 100px;
`;

const SearchBar = ({ setQuery, query, occurredBefore, setOccurredBefore }) => (
  <Wrapper>
    <QueryInput onBlur={e => setQuery(e.target.value)} defaultValue={query} />
    <DatePicker title="From" date={occurredBefore} onChange={t => setOccurredBefore(t)} />
  </Wrapper>
);
const mapStateToProps = state => ({
  query: state.query,
  occurredBefore: state.occurredBefore
});
const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(QueryActions.setQuery(query)),
  setOccurredBefore: time => dispatch(OccurredBeforeActions.setOccurredBefore(time))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,
  occurredBefore: PropTypes.number,
  setOccurredBefore: PropTypes.func
};
SearchBar.defaultProps = {
  query: '',
  setQuery: QueryActions.setQuery,
  occurredBefore: null,
  setOccurredBefore: OccurredBeforeActions.setOccurredBefore
};
