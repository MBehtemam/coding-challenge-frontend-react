import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Incident from './Incident';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Grid = ({ incidents }) => (
  <Wrapper>
    {incidents.map(incident => (
      <Incident key={incident.id} incident={incident} />
    ))}
  </Wrapper>
);
const mapStateToProps = state => ({
  incidents: state.incidents
});
export default connect(
  mapStateToProps,
  undefined
)(Grid);
