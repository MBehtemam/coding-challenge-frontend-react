import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Layout/Input';
import DatePicker from './components/DatePicker';
import * as QueryActions from '../../logic/Actions/queryActions';
import * as ProximityActions from '../../logic/Actions/proximityActions';
import * as OccurredBeforeActions from '../../logic/Actions/occurredBeforeActions';
import * as OccurredAfterActions from '../../logic/Actions/occurredAfterActions';
import Button from '../Button';
import fetchingActions from '../../logic/Actions/fetchingActions';
import Row from '../Layout/Row';
import Column from '../Layout/Column';

const SearchBar = ({
  className,
  setQuery,
  query,
  occurredBefore,
  setOccurredBefore,
  setOccurredAfter,
  occurredAfter,
  fetchAction,
  proximity,
  setProximity
}) => (
  <Row as="section" className={className}>
    <Column span={4}>
      <Input
        type="text"
        addOnBefore="Query"
        onChange={e => setQuery(e)}
        value={query}
        defaultValue={query}
      />
    </Column>
    <Column span={4}>
      <Input
        type="text"
        addOnBefore="Proximity"
        onChange={val => setProximity(val)}
        value={proximity}
        defaultValue={proximity}
      />
    </Column>
    <Column span={3}>
      <DatePicker date={occurredBefore} title="From" onChange={setOccurredBefore} />
    </Column>
    <Column span={3}>
      <DatePicker date={occurredAfter} title="To" onChange={setOccurredAfter} />
    </Column>
    <Column span={2}>
      <Button>Clear</Button>
      <Button onClick={fetchAction}>Apply</Button>
    </Column>
  </Row>
);

const styledSearchBar = styled(SearchBar)`
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background: linear-gradient(0deg, hsla(0, 0%, 95.7%, 0.92), hsla(0, 0%, 95.7%, 0.92)),
    url('data:image/svg+xml;charset=utf-8,<svg width="480" height="480" xmlns="http://www.w3.org/2000/svg"><path fill="%23A6A6A6" d="M69.2 63.2L0 69.3V25.8L18.5 0h46.7l4 63.2z"/><path fill="%23ADADAD" d="M165.8 20.6l30 110.6L275.2 7.9 165.8 20.6z"/><path fill="%23A6A6A6" d="M480 25.8v44.8l-32.2 2.6L480 25.8zm0 112.6v17l-88.2-40.2 56-42 32.2 65.2z"/><path fill="%23ADADAD" d="M405.2 211.2l10.6 108.7-79.3 10 68.7-118.7zM480 169v18.9l-64.2 132 17.4-118.7L480 169zm0 151.5v46.8l-64.2-47.4 64.2.6zm-186.2 37.4l62.7 64.7-74 6.6 11.3-71.3zm-174-101.3l100.7 90 73.3 11.3-174-101.3zm-50.6 67.3l17.3-59.3 29.3 126-46.6-66.7zm0 0l-4 94L0 367.3v-46.8l69.2 3.4zm114.6 143.3L65.2 417.9l50.6-27.3 68 76.6zM65.2 417.9V480H18.5l46.7-62.1z"/><path fill="%23A6A6A6" d="M12.5 159.9L0 155.4v-17l12.5 21.5z"/><path fill="%23ADADAD" d="M12.5 159.9L0 187.9V169l12.5-9.1z"/><path fill="%23A6A6A6" d="M308.5 164.6l28 165.3-68.7-126 40.7-39.3zm96.7 46.6l28-10-17.4 118.7-10.6-108.7zM220.5 346.6l62 82.6 11.3-71.3-73.3-11.3z"/><path fill="%23A6A6A6" d="M282.5 429.2l-6.3 50.8h-74.9l81.2-50.8zM69.2 323.9l46.6 66.7-50.6 27.3 4-94zm-56.7-164l56.7 164-4-79.3-52.7-84.7zM276.2 0l-1 7.9-109.4 12.7L201.3 0h74.9z"/><path fill="%23A6A6A6" d="M86.5 264.6l33.3-8-4 134-29.3-126z"/><path fill="%23B8BEBE" d="M293.8 357.9l122-38-59.3 102.7-62.7-64.7z"/><path fill="%23F4F4F4" d="M441.8 429.2l-85.3-6.6 59.3-102.7 26 109.3z"/><path fill="%23DCDCE2" d="M480 367.3v58.2l-38.2 3.7-26-109.3 64.2 47.4z"/><path fill="%23BEC3C3" d="M480 425.5V480h-53.3l15.1-50.8 38.2-3.7z"/><path fill="%23DCDCE2" d="M441.8 429.2L426.7 480h-57.5l-12.7-57.4 85.3 6.6z"/><path fill="%23BEC3C3" d="M369.2 480h-84.1l71.4-57.4 12.7 57.4z"/><path fill="%23F4F4F4" d="M356.5 422.6L285.1 480h-8.9l6.3-50.8 74-6.6zm-74 6.6L201.3 480h-35.9l18.4-12.8 98.7-38z"/><path fill="%23B8BEBE" d="M115.8 390.6l68 76.6 98.7-38-116.7-63.3-50 24.7z"/><path fill="%23F4F4F4" d="M119.8 256.6l-4 134 50-24.7-46-109.3z"/><path fill="%23CFCFCF" d="M220.5 346.6l62 82.6-116.7-63.3-46-109.3 100.7 90z"/><path fill="%23B8BEBE" d="M183.8 467.2L165.4 480H89l-23.8-62.1 118.6 49.3z"/><path fill="%23BEC3C3" d="M89 480H65.2v-62.1L89 480z"/><path fill="%23DCDCE2" d="M65.2 417.9L0 425.5v-58.2l65.2 50.6z"/><path fill="%23CFCFCF" d="M65.2 417.9L18.5 480H9.4l55.8-62.1z"/><path fill="%23B8BEBE" d="M65.2 417.9L9.4 480H0v-54.5l65.2-7.6z"/><path fill="%23F4F4F4" d="M65.2 244.6l54.6 12-33.3 8-17.3 59.3-4-79.3z"/><path fill="%23CFCFCF" d="M12.5 159.9L0 169v-13.6l12.5 4.5z"/><path fill="%23F4F4F4" d="M69.2 323.9L0 320.5V187.9l12.5-28 56.7 164zm267.3 6l-42.7 28 122-38-79.3 10zm143.5-142v132.6l-64.2-.6 64.2-132zm-171.5-23.3l124.7 36.6-28 10-68.7 118.7-28-165.3z"/><path fill="%23BEC3C3" d="M119.8 256.6l216.7 73.3-42.7 28-174-101.3z"/><path fill="%23B8BEBE" d="M267.8 203.9l68.7 126-216.7-73.3 148-52.7zm-255.3-44l107.3 96.7-54.6-12-52.7-84.7z"/><path fill="%23CFCFCF" d="M195.8 131.2l-76 125.4-107.3-96.7 183.3-28.7z"/><path fill="%23BEC3C3" d="M69.2 63.2l-56.7 96.7 183.3-28.7-126.6-68z"/><path fill="%23DCDCE2" d="M69.2 63.2l-56.7 96.7L0 138.4V69.3l69.2-6.1z"/><path fill="%23BEC3C3" d="M103.2 32.6l-34 30.6-4-63.2H89l14.2 32.6z"/><path fill="%23DCDCE2" d="M165.8 20.6l30 110.6-126.6-68 34-30.6 62.6-12z"/><path fill="%23F4F4F4" d="M119.8 256.6l76-125.4 112.7 33.4-40.7 39.3-148 52.7z"/><path fill="%23DCDCE2" d="M391.8 115.2l41.4 86-124.7-36.6 83.3-49.4zM275.2 7.9l33.3 156.7-112.7-33.4L275.2 7.9z"/><path fill="%23B8BEBE" d="M391.8 115.2l-83.3 49.4L275.2 7.9l9.9-7.9h84.1l22.6 115.2z"/><path fill="%23CFCFCF" d="M480 9.9v15.9l-32.2 47.4-56 42L480 9.9z"/><path fill="%23B8BEBE" d="M480 0v9.9l-88.2 105.3L426.7 0H480z"/><path fill="%23DCDCE2" d="M426.7 0l-34.9 115.2L369.2 0h57.5z"/><path fill="%23F4F4F4" d="M285.1 0l-9.9 7.9 1-7.9h8.9zm-83.8 0l-35.5 20.6-62.6 12L165.4 0h35.9z"/><path fill="%23CFCFCF" d="M18.5 0L0 25.8V9.9L9.4 0h9.1z"/><path fill="%23B8BEBE" d="M165.4 0l-62.2 32.6L89 0h76.4zM9.4 0L0 9.9V0h9.4z"/><path fill="%23DCDCE2" d="M480 69.3v69.1l-32.2-65.2 32.2-3.9z"/><path fill="%23CFCFCF" d="M480 155.4V169l-46.8 32.2-41.4-86 88.2 40.2z"/></svg>');
`;
const mapStateToProps = state => ({
  query: state.query,
  occurredBefore: state.occurredBefore,
  occurredAfter: state.occurredAfter,
  proximity: state.proximity
});
const mapDispatchToProps = dispatch => ({
  fetchAction: () => dispatch(fetchingActions(true, 1)),
  setQuery: query => dispatch(QueryActions.setQuery(query)),
  setOccurredBefore: time => dispatch(OccurredBeforeActions.setOccurredBefore(time)),
  setOccurredAfter: time => dispatch(OccurredAfterActions.setOccurredAfter(time)),
  setProximity: proximity => dispatch(ProximityActions.setProximity(proximity)),
  clearProximity: () => dispatch(ProximityActions.clearProximity())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledSearchBar);

SearchBar.propTypes = {
  fetchAction: PropTypes.func,
  className: PropTypes.string,
  setQuery: PropTypes.func,
  query: PropTypes.string,
  occurredBefore: PropTypes.number,
  occurredAfter: PropTypes.number,
  setOccurredBefore: PropTypes.func,
  setOccurredAfter: PropTypes.func,
  setProximity: PropTypes.func,
  proximity: PropTypes.string
};
SearchBar.defaultProps = {
  query: '',
  className: '',
  proximity: '',
  setQuery: QueryActions.setQuery,
  occurredBefore: 0,
  occurredAfter: 0,
  setOccurredBefore: OccurredBeforeActions.setOccurredBefore,
  setOccurredAfter: OccurredAfterActions.setOccurredAfter,
  fetchAction: fetchingActions,
  setProximity: ProximityActions.setProximity
};
