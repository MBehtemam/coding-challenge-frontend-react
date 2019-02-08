import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
const mapStateToProps = (state, ownProps) => ({
  incidents:
    state.incidents[
      Object.keys(state.incidents).find(p => p === `p${ownProps.match.params.page}`)
    ] || []
});
Grid.propTypes = {
  incidents: PropTypes.instanceOf(Array)
};
Grid.defaultProps = {
  incidents: []
};
export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Grid)
);
