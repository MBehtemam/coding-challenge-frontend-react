import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from './components/DatePicker';
import QueryInput from './components/QueryInput';
import * as QueryActions from '../../logic/Actions/queryActions';
import * as OccurredBeforeActions from '../../logic/Actions/occuredBeforeActions';
import * as OccuredAfterActions from '../../logic/Actions/occuredAfterActions';
import Button from '../Button';

const Wrapper = styled.section`
  display: flex;
`;

const SearchBar = ({
  setQuery,
  query,
  occurredBefore,
  setOccurredBefore,
  setOccurredAfter,
  occurredAfter
}) => (
  <Wrapper>
    <QueryInput onBlur={e => setQuery(e.target.value)} defaultValue={query} />
    <DatePicker date={occurredBefore} title="From" onChagne={setOccurredBefore} />
    <DatePicker date={occurredAfter} title="To" onChagne={setOccurredAfter} />
    <Button>Clear</Button>
    <Button>Apply</Button>
  </Wrapper>
);
const mapStateToProps = state => ({
  query: state.query,
  occurredBefore: state.occurredBefore
});
const mapDispatchToProps = dispatch => ({
  setQuery: query => dispatch(QueryActions.setQuery(query)),
  setOccurredBefore: time => dispatch(OccurredBeforeActions.setOccurredBefore(time)),
  setOccurredAfter: time => dispatch(OccuredAfterActions.setOccurredAfter(time))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

SearchBar.propTypes = {
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
  setOccurredAfter: OccuredAfterActions.setOccurredAfter
};
