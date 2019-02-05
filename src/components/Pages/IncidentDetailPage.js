import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import IncidentTitle from '../IncidentsGrid/IncidentTitle';
import IncidentAddress from '../IncidentsGrid/IncidentAddress';
import IncidentTime from '../IncidentsGrid/IncidentTime';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`;
const IncidentDetailPage = ({ incident }) =>
  incident ? (
    <Wrapper>
      <IncidentTitle title={incident.title} id={incident.id} />
      <IncidentAddress>{incident.address}</IncidentAddress>
      <IncidentTime>{new Date(incident.occurred_at).toDateString()}</IncidentTime>
    </Wrapper>
  ) : (
    'NOTING FOUND'
  );

IncidentDetailPage.propTypes = {
  incident: PropTypes.instanceOf(Object)
};
IncidentDetailPage.defaultProps = {
  incident: null
};
const mapStateToProps = (state, ownProps) => ({
  incident: state.incidents.find(inc => inc.id === parseInt(ownProps.match.params.id, 10))
});

export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(IncidentDetailPage)
);
