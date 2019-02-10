import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from '../Layout/Row';

const Total = ({ className, incidentsCount }) => (
  <Row className={className}>
    <strong>{incidentsCount}</strong>
  </Row>
);
const TotalIncident = styled(Total)`
  justify-content: flex-end;
  font-size: 1.5rem;
  background: #6c757d;
  color: #ffc107;
  padding-right: 10px;
  font-weight: bold;
  font-family: sans-serif;
`;
Total.propTypes = {
  incidentsCount: PropTypes.number,
  className: PropTypes.string
};
Total.defaultProps = {
  incidentsCount: 0,
  className: ''
};
const mapStateToProps = state => ({
  incidentsCount: state.locations.length
});
export default connect(
  mapStateToProps,
  undefined
)(TotalIncident);
