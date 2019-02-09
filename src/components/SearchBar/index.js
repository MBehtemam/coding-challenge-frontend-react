import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from './components/DatePicker';
import QueryInput from './components/QueryInput';
import * as QueryActions from '../../logic/Actions/queryActions';
import * as OccurredBeforeActions from '../../logic/Actions/occuredBeforeActions';
import * as OccurredAfterActions from '../../logic/Actions/occuredAfterActions';
import Button from '../Button';
import fetchingActions from '../../logic/Actions/fetchingActions';

const Wrapper = styled.section`
  display: flex;
`;

const SearchBar = ({
  setQuery,
  query,
  occurredBefore,
  setOccurredBefore,
  setOccurredAfter,
  occurredAfter,
  fetchingAction
}) => (
  <Wrapper>
    <QueryInput onBlur={e => setQuery(e.target.value)} defaultValue={query} />
    <DatePicker date={occurredBefore} title="From" onChange={setOccurredBefore} />
    <DatePicker date={occurredAfter} title="To" onChange={setOccurredAfter} />
    <Button>Clear</Button>
    <Button onClick={fetchingAction}>Apply</Button>
  </Wrapper>
);
const mapStateToProps = state => ({
  query: state.query,
  occurredBefore: state.occurredBefore,
  occurredAfter: state.occurredAfter
});
const mapDispatchToProps = dispatch => ({
  fetchingActions: () => dispatch(fetchingActions(true, 1)),
  setQuery: query => dispatch(QueryActions.setQuery(query)),
  setOccurredBefore: time => dispatch(OccurredBeforeActions.setOccurredBefore(time)),
  setOccurredAfter: time => dispatch(OccurredAfterActions.setOccurredAfter(time))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
  fetchingAction: PropTypes.func,
  setQuery: PropTypes.func,
  query: PropTypes.string,
  occurredBefore: PropTypes.number,
  occurredAfter: PropTypes.number,
  setOccurredBefore: PropTypes.func,
  setOccurredAfter: PropTypes.func
};
SearchBar.defaultProps = {
  query: '',
  setQuery: QueryActions.setQuery,
  occurredBefore: 0,
  occurredAfter: 0,
  setOccurredBefore: OccurredBeforeActions.setOccurredBefore,
  setOccurredAfter: OccurredAfterActions.setOccurredAfter,
  fetchingAction: fetchingActions
};
