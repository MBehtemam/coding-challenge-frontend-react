import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Total = ({ incidents }) => (
  <Wrapper>
    <span>{incidents.length}</span>
  </Wrapper>
);
Total.propTypes = {
  incidents: PropTypes.instanceOf(Array)
};
Total.defaultProps = {
  incidents: []
};
const mapStateToProps = state => ({
  incidents: state.incidents
});
export default connect(
  mapStateToProps,
  undefined
)(Total);
