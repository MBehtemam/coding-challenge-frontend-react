import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Total = ({ incidentsCount }) => (
  <Wrapper>
    <span>{incidentsCount}</span>
  </Wrapper>
);
Total.propTypes = {
  incidentsCount: PropTypes.number
};
Total.defaultProps = {
  incidentsCount: 0
};
const mapStateToProps = state => ({
  incidentsCount: state.locations.length
});
export default connect(
  mapStateToProps,
  undefined
)(Total);
