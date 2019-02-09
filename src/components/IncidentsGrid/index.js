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

const Grid = ({ incidents, incidentsStatus }) => (
  <Wrapper>
    {incidentsStatus.loading && <span>Loading.....</span>}
    {incidentsStatus.ok === 0 && incidentsStatus.loading === false && incidents.length === 0 && (
      <span>{incidentsStatus.err}</span>
    )}
    {incidents.length > 0 &&
      incidents.map(incident => <Incident key={incident.id} incident={incident} />)}
  </Wrapper>
);
const mapStateToProps = (state, ownProps) => ({
  incidents:
    state.incidents[
      Object.keys(state.incidents).find(p => p === `p${ownProps.match.params.page}`)
    ] || [],
  incidentsStatus: state.incidentsStatus
});
Grid.propTypes = {
  incidents: PropTypes.instanceOf(Array),
  incidentsStatus: PropTypes.instanceOf(Object)
};
Grid.defaultProps = {
  incidents: [],
  incidentsStatus: {}
};
export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(Grid)
);
