import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  incidents: state.incidents
});
export default connect(
  mapStateToProps,
  undefined
)(Total);
