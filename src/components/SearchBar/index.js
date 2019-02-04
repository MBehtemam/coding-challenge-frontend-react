import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from './components/DatePicker';
import QueryInput from './components/QueryInput';
import * as QueryActions from '../../logic/Actions/queryActions';
import * as OccurredBeforeActions from '../../logic/Actions/occuredBeforeActions';

const Wrapper = styled.section`
  display: flex;
`;

const SearchBar = ({ setQuery, query, occurredBefore, setOccurredBefore }) => (
  <Wrapper>
    <QueryInput onBlur={e => setQuery(e.target.value)} defaultValue={query} />
    <DatePicker date={occurredBefore} title="From" onChagne={setOccurredBefore} />
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
  occurredBefore: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setOccurredBefore: PropTypes.func
};
SearchBar.defaultProps = {
  query: '',
  setQuery: QueryActions.setQuery,
  occurredBefore: '',
  setOccurredBefore: OccurredBeforeActions.setOccurredBefore
};
